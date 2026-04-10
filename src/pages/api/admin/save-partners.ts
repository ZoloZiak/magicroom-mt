import type { APIRoute } from 'astro';
import { writeFile } from 'fs/promises';
import { join } from 'path';

const PARTNERS_PATH = join(process.cwd(), 'content/json/partners.json');

export const POST: APIRoute = async ({ request }) => {

  try {
    const formData = await request.formData();
    
    // Read current file to preserve categories
    let currentData: any = {};
    try {
      const content = await readFile(PARTNERS_PATH, 'utf-8');
      currentData = JSON.parse(content);
    } catch (e) {}
    
    // Process SK partners
    const skPartners: any[] = [];
    let i = 0;
    while (formData.has(`sk_partners[${i}][name]`)) {
      skPartners.push({
        name: formData.get(`sk_partners[${i}][name]`) as string,
        category: formData.get(`sk_partners[${i}][category]`) as string,
        description: formData.get(`sk_partners[${i}][description]`) as string,
        link: formData.get(`sk_partners[${i}][link]`) as string
      });
      i++;
    }
    
    // Process EN partners
    const enPartners: any[] = [];
    i = 0;
    while (formData.has(`en_partners[${i}][name]`)) {
      enPartners.push({
        name: formData.get(`en_partners[${i}][name]`) as string,
        category: formData.get(`en_partners[${i}][category]`) as string,
        description: formData.get(`en_partners[${i}][description]`) as string,
        link: formData.get(`en_partners[${i}][link]`) as string
      });
      i++;
    }

    const data = {
      sk: { partners: skPartners },
      en: { partners: enPartners },
      categories: currentData.categories || { sk: [], en: [] }
    };

    await writeFile(PARTNERS_PATH, JSON.stringify(data, null, 2), 'utf-8');

    return new Response(JSON.stringify({ success: true, message: 'Uložené!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Save partners error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
