type Settings = {
  apiKey?: string;
  from?: string;
  to?: string;
  services: string[];
};

const unavailable = 'Form şu anda kullanılamıyor. Lütfen WhatsApp ya da telefonla ulaşın.';
const emailPattern = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const maxBytes = 24 * 1024;
const clients = ['Çocuğum için', 'Ergen çocuğum için', 'Kendim için', 'Aile olarak'];
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

function reply(status: number, message: string) {
  return Response.json({ success: status === 200, message }, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  });
}

// Single-process limit. A multi-instance deployment needs a shared limiter at the proxy.
export function createRateLimiter() {
  const attempts = new Map<string, { count: number; until: number }>();
  return (address: string, now = Date.now()) => {
    for (const [key, value] of attempts) {
      if (value.until <= now) attempts.delete(key);
    }
    const entry = attempts.get(address);
    if (entry) {
      if (entry.count >= 5) return false;
      entry.count++;
    } else {
      if (attempts.size >= 10000) return false;
      attempts.set(address, { count: 1, until: now + 10 * 60 * 1000 });
    }
    return true;
  };
}

export async function sendAppointment(
  request: Request,
  settings: Settings,
  dependencies: { send?: typeof fetch; allow?: () => boolean } = {},
) {
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    return reply(403, 'Lütfen formu bu site üzerinden gönderin.');
  }
  if (request.headers.get('content-type')?.split(';')[0].trim() !== 'application/x-www-form-urlencoded') {
    return reply(415, 'Form gönderim biçimi geçersiz.');
  }
  if (Number(request.headers.get('content-length')) > maxBytes) {
    return reply(413, 'Mesajınız çok uzun. Lütfen kısaltın.');
  }

  let form: URLSearchParams;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply(400, 'Lütfen formu doldurun.');
    const chunks: Uint8Array[] = [];
    let size = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) {
        await reader.cancel();
        return reply(413, 'Mesajınız çok uzun. Lütfen kısaltın.');
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
    form = new URLSearchParams(new TextDecoder().decode(bytes));
  } catch {
    return reply(400, 'Form okunamadı. Lütfen tekrar deneyin.');
  }

  // Silently discard submissions caught by the honeypot.
  if (form.get('botcheck')) return reply(200, 'Talebiniz gönderildi.');
  const value = (key: string) => (form.get(key) || '').trim();
  const name = value('ad_soyad');
  const phone = value('telefon');
  const email = value('email');
  const service = value('hizmet');
  const meeting = value('gorusme');
  const message = value('mesaj');
  const client = value('danisan');
  const date = value('tarih');
  const digits = phone.replace(/\D/g, '');

  if (name.length < 2 || name.length > 100 || /[\r\n\x00-\x1f]/.test(name)) {
    return reply(400, 'Lütfen adınızı ve soyadınızı kontrol edin.');
  }
  if (phone.length > 30 || !/^[+\d\s().-]+$/.test(phone) || digits.length < 10 || digits.length > 15) {
    return reply(400, 'Lütfen geçerli bir telefon numarası yazın.');
  }
  if (email && (email.length > 254 || !emailPattern.test(email))) {
    return reply(400, 'Lütfen e-posta adresinizi kontrol edin.');
  }
  if (![...settings.services, 'Henüz emin değilim'].includes(service) || !['Yüz yüze', 'Online'].includes(meeting)) {
    return reply(400, 'Lütfen hizmet ve görüşme tercihinizi seçin.');
  }
  if (client && !clients.includes(client)) {
    return reply(400, 'Lütfen görüşme bilgilerinizi kontrol edin.');
  }
  if (date && (!datePattern.test(date) || Number.isNaN(Date.parse(date)))) {
    return reply(400, 'Lütfen geçerli bir tarih seçin.');
  }
  if (message.length > 2000) return reply(400, 'Mesajınız en fazla 2000 karakter olabilir.');
  if (value('kvkk') !== 'on') return reply(400, 'Lütfen aydınlatma metnini okuyup onaylayın.');

  const { apiKey, from, to } = settings;
  if (!apiKey || !from || !to || !emailPattern.test(from) || !emailPattern.test(to)) {
    return reply(503, unavailable);
  }
  if (dependencies.allow && !dependencies.allow()) {
    return reply(429, 'Çok fazla talep gönderdiniz. Lütfen 10 dakika sonra tekrar deneyin.');
  }

  try {
    const result = await (dependencies.send || fetch)('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(10000),
      body: JSON.stringify({
        from,
        to: [to],
        subject: 'Yeni randevu talebi — Aslı İrem Bayındır',
        ...(email && { reply_to: email }),
        text: [
          `Ad Soyad: ${name}`, `Telefon: ${phone}`, `E-posta: ${email || 'Belirtilmedi'}`,
          `Hizmet: ${service}`, `Görüşme tercihi: ${meeting}`,
          `Görüşme kimin için: ${client || 'Belirtilmedi'}`, `Tercih edilen gün: ${date || 'Belirtilmedi'}`,
          '', 'Mesaj:', message || 'Belirtilmedi', '', 'Formdaki aydınlatma onayı: Verildi',
        ].join('\n'),
      }),
    });
    const data = await result.json();
    if (!result.ok || typeof data?.id !== 'string' || !data.id) return reply(502, unavailable);
    return reply(200, 'Talebiniz gönderildi.');
  } catch {
    return reply(502, unavailable);
  }
}
