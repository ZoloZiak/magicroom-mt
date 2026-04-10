import type { APIRoute } from 'astro';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const BLOG_PATH = join(process.cwd(), 'content/json/blog.json');

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const posts = body.posts || [];
    
    await writeFile(BLOG_PATH, JSON.stringify({ posts }, null, 2), 'utf-8');

    return new Response(JSON.stringify({ success: true, message: 'Uložené!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Save blog error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};