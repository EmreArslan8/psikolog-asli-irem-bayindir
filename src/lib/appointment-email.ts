export type AppointmentMail = {
  name: string;
  phone: string;
  email: string;
  service: string;
  meeting: string;
  client: string;
  date: string;
  message: string;
};

const brand = {
  bg: '#fff6eb',
  surface: '#fffbf6',
  line: '#efdccd',
  ink: '#493731',
  soft: '#6f5a52',
  muted: '#a08c82',
  accent: '#f27666',
  accentSoft: '#fde1d6',
};

const escapeHtml = (text: string) => text
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;');

const formatDate = (date: string) => {
  if (!date) return 'Belirtilmedi';
  const [year, month, day] = date.split('-');
  return `${day}.${month}.${year}`;
};

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:12px 0;border-bottom:1px solid ${brand.line};width:38%;font-size:13px;color:${brand.muted};vertical-align:top;">${label}</td>
    <td style="padding:12px 0;border-bottom:1px solid ${brand.line};font-size:15px;color:${brand.ink};font-weight:600;vertical-align:top;">${value}</td>
  </tr>`;

const button = (href: string, label: string, primary: boolean) => `
  <a href="${escapeHtml(href)}" style="display:inline-block;margin:0 8px 8px 0;padding:12px 22px;border-radius:999px;font-size:14px;font-weight:600;text-decoration:none;${
    primary
      ? `background:${brand.ink};color:${brand.bg};`
      : `background:${brand.accentSoft};color:${brand.ink};`
  }">${label}</a>`;

export function appointmentText(mail: AppointmentMail) {
  return [
    `Ad Soyad: ${mail.name}`, `Telefon: ${mail.phone}`, `E-posta: ${mail.email || 'Belirtilmedi'}`,
    `Hizmet: ${mail.service}`, `Görüşme tercihi: ${mail.meeting}`,
    `Görüşme kimin için: ${mail.client || 'Belirtilmedi'}`, `Tercih edilen gün: ${mail.date || 'Belirtilmedi'}`,
    '', 'Mesaj:', mail.message || 'Belirtilmedi', '', 'Formdaki aydınlatma onayı: Verildi',
  ].join('\n');
}

export function appointmentHtml(mail: AppointmentMail) {
  const digits = mail.phone.replace(/[^\d+]/g, '');
  const phoneDigits = mail.phone.replace(/\D/g, '');
  const whatsapp = mail.phone.trim().startsWith('+') ? phoneDigits
    : phoneDigits.startsWith('00') ? phoneDigits.slice(2)
    : /^0\d{10}$/.test(phoneDigits) ? `90${phoneDigits.slice(1)}`
    : /^\d{10}$/.test(phoneDigits) ? `90${phoneDigits}` : phoneDigits;
  const message = mail.message
    ? escapeHtml(mail.message).replace(/\r?\n/g, '<br>')
    : `<span style="color:${brand.muted};">Belirtilmedi</span>`;
  const email = mail.email
    ? `<a href="mailto:${escapeHtml(mail.email)}" style="color:${brand.accent};text-decoration:none;">${escapeHtml(mail.email)}</a>`
    : 'Belirtilmedi';

  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <title>Yeni randevu talebi</title>
</head>
<body style="margin:0;padding:0;background:${brand.bg};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(mail.name)} · ${escapeHtml(mail.service)} · ${escapeHtml(mail.meeting)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${brand.bg};padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">
        <tr><td style="padding:0 4px 20px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:${brand.muted};font-weight:600;">Aslı İrem Bayındır</td></tr>
        <tr><td style="background:${brand.surface};border:1px solid ${brand.line};border-radius:24px;padding:36px 32px;">
          <span style="display:inline-block;padding:6px 14px;border-radius:999px;background:${brand.accentSoft};color:${brand.accent};font-size:12px;font-weight:700;letter-spacing:.04em;">YENİ RANDEVU TALEBİ</span>
          <h1 style="margin:18px 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:28px;line-height:1.2;color:${brand.ink};font-weight:600;letter-spacing:-.02em;">${escapeHtml(mail.name)}</h1>
          <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:${brand.soft};">Web sitesindeki randevu formundan yeni bir talep geldi.</p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            ${row('Telefon', `<a href="tel:${escapeHtml(digits)}" style="color:${brand.ink};text-decoration:none;">${escapeHtml(mail.phone)}</a>`)}
            ${row('E-posta', email)}
            ${row('Hizmet', escapeHtml(mail.service))}
            ${row('Görüşme tercihi', escapeHtml(mail.meeting))}
            ${row('Görüşme kimin için', escapeHtml(mail.client || 'Belirtilmedi'))}
            ${row('Tercih edilen gün', escapeHtml(formatDate(mail.date)))}
          </table>
          <p style="margin:26px 0 8px;font-size:13px;color:${brand.muted};">Mesaj</p>
          <div style="padding:16px 18px;border-radius:16px;background:${brand.bg};font-size:15px;line-height:1.65;color:${brand.ink};">${message}</div>
          <div style="margin-top:28px;">
            ${button(`tel:${digits}`, 'Ara', true)}
            ${button(`https://wa.me/${whatsapp}`, 'WhatsApp', false)}
            ${mail.email ? button(`mailto:${mail.email}`, 'E-posta ile yanıtla', false) : ''}
          </div>
        </td></tr>
        <tr><td style="padding:20px 8px 0;font-size:12px;line-height:1.6;color:${brand.muted};text-align:center;">Formdaki aydınlatma metni onaylandı. Bu e-posta web sitesi randevu formundan otomatik gönderildi.</td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
