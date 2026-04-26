import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  return new Response(
    JSON.stringify({ success: true, message: 'Test success' }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
