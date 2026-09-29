import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { services } from '../../data/site';
import { createRateLimiter, sendAppointment } from '../../lib/appointment';

export const prerender = false;
const allow = createRateLimiter();

export const POST: APIRoute = ({ request, clientAddress }) => sendAppointment(request, {
  apiKey: getSecret('RESEND_API_KEY'),
  from: getSecret('RESEND_FROM_EMAIL'),
  to: getSecret('CONTACT_TO_EMAIL'),
  services: services.map((service) => service.title),
}, { allow: () => allow(clientAddress) });

export const ALL: APIRoute = () => new Response(null, {
  status: 405,
  headers: { Allow: 'POST', 'Cache-Control': 'no-store' },
});
