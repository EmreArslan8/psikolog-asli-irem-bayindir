import type { APIRoute } from 'astro';
import { site, services, posts, workshops } from '../data/site';

/** Yapay zekâ arama/yanıt motorları için site özeti (llms.txt). Veriler site.ts'ten gelir. */
export const GET: APIRoute = () => {
  const u = (path: string) => new URL(path, site.url).href;
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name}, ${site.contact.city} / ${site.contact.region} merkezli ${site.tagline.toLowerCase()} hizmeti verir. Görüşmeler yüz yüze ve online yapılır. Çalışma saatleri: ${site.contact.hours}.`,
    '',
    '## Hizmetler',
    ...services.map((s) => `- [${s.title} (${s.age})](${u(`/hizmetler#${s.slug}`)}): ${s.summary}`),
    '',
    '## Sayfalar',
    `- [Hakkımda](${u('/hakkimda')}): Eğitim, çalışma yaklaşımı ve ilkeler`,
    `- [Randevu](${u('/randevu')}): Ön görüşme ve randevu talebi`,
    `- [Atölyeler](${u('/atolyeler')}): Çocuk, ergen ve ebeveyn atölyeleri`,
    `- [Blog](${u('/blog')}): Aileler için yazılar`,
    `- [İletişim](${u('/iletisim')}): Telefon, WhatsApp, e-posta ve adres`,
    '',
    ...(workshops.length ? ['## Atölyeler', ...workshops.map((w) => `- ${w.title} — ${w.audience}`), ''] : []),
    ...(posts.length ? ['## Blog yazıları', ...posts.map((p) => `- [${p.title}](${u(`/blog/${p.slug}`)}): ${p.excerpt}`), ''] : []),
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
