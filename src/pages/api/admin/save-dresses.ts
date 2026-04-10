import type { APIRoute } from 'astro';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const DRESSES_PATH = join(process.cwd(), 'content/json/dresses.json');

export const POST: APIRoute = async ({ request }) => {

  try {
    const formData = await request.formData();
    
    const dresses: any[] = [];
    let i = 0;
    while (formData.has(`dresses[${i}][id]`)) {
      dresses.push({
        id: formData.get(`dresses[${i}][id]`) as string,
        name: formData.get(`dresses[${i}][name]`) as string,
        price: parseInt(formData.get(`dresses[${i}][price]`) as string) || 0,
        size: formData.get(`dresses[${i}][size]`) as string,
        color: formData.get(`dresses[${i}][color]`) as string,
        style: formData.get(`dresses[${i}][style]`) as string,
        status: formData.get(`dresses[${i}][status]`) as string,
        description: formData.get(`dresses[${i}][description]`) as string,
        details: formData.get(`dresses[${i}][details]`) as string,
        type: 'new',
        featured: false,
        images: []
      });
      i++;
    }

    await writeFile(DRESSES_PATH, JSON.stringify({ dresses }, null, 2), 'utf-8');

    return new Response(JSON.stringify({ success: true, message: 'Uložené!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Save dresses error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
