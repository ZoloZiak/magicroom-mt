import type { APIRoute } from 'astro';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

export const prerender = false;

const GALLERY_PATH = join(process.cwd(), 'content/json/gallery.json');

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const session = cookies.get('admin-session');
  if (!session?.value) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const formData = await request.formData();
    
    const items: any[] = [];
    let i = 0;
    while (formData.has(`items[${i}][filename]`)) {
      items.push({
        filename: formData.get(`items[${i}][filename]`) as string,
        title: formData.get(`items[${i}][title]`) as string,
        titleEn: formData.get(`items[${i}][titleEn]`) as string,
        alt: formData.get(`items[${i}][alt]`) as string,
        altEn: formData.get(`items[${i}][altEn]`) as string
      });
      i++;
    }

    await writeFile(GALLERY_PATH, JSON.stringify({ gallery: items }, null, 2), 'utf-8');

    return new Response(JSON.stringify({ success: true, message: 'Uložené!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Save gallery error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
