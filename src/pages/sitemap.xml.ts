import type { APIRoute } from 'astro';
import { site, services, posts } from '../data/site';

// Sabit sayfalar ve veri kaynaklarından gelen tüm indekslenebilir sayfalar.
// Yeni bir sabit sayfa eklenirse bu listeyi de güncelleyin.
export const prerender = true;

export const GET: APIRoute = () => {
  const paths = [
    '/', '/hakkimda', '/hizmetler', '/atolyeler', '/blog',
    '/iletisim', '/randevu', '/kitap-onerileri',
    ...services.map((service) => `/hizmetler/${service.slug}`),
    ...posts.map((post) => `/blog/${post.slug}`),
  ];
  const escapeXml = (value: string) => value.replace(/[<>&"']/g, (char) => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;',
  })[char]!);
  const entries = paths.map((path) => `  <url><loc>${escapeXml(new URL(path, site.url).href)}</loc></url>`);
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
