import type { APIRoute } from 'astro';

export function methodNotAllowed(): Response {
  return new Response(JSON.stringify({ error: 'Method not allowed. Use POST.' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' }
  });
}