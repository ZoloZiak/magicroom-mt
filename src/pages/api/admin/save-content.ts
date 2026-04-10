import type { APIRoute } from 'astro';
import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

export const prerender = false;

const FILES_PATH = join(process.cwd(), 'content/json');

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const session = cookies.get('admin-session');
  if (!session?.value) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const formData = await request.formData();
    const fileName = formData.get('file') as string;
    
    if (!fileName) {
      return new Response(JSON.stringify({ error: 'Missing file name' }), { status: 400 });
    }

    const filePath = join(FILES_PATH, `${fileName}.json`);
    
    // Read current file
    let data: any = {};
    try {
      const content = await readFile(filePath, 'utf-8');
      data = JSON.parse(content);
    } catch (e) {
      // File doesn't exist
    }

    // Process form data based on file type
    if (fileName === 'services') {
      // Process SK packages
      const skPackages: any[] = [];
      let i = 0;
      while (formData.has(`sk_packages[${i}][name]_edit`)) {
        skPackages.push({
          name: formData.get(`sk_packages[${i}][name]_edit`) as string,
          price: formData.get(`sk_packages[${i}][price]_edit`) as string,
          description: formData.get(`sk_packages[${i}][description]_edit`) as string,
          features: (formData.get(`sk_packages[${i}][features]_edit`) as string).split(',').map(f => f.trim())
        });
        i++;
      }
      
      // Process SK extra
      const skExtra: any[] = [];
      i = 0;
      while (formData.has(`sk_extra[${i}][title]_edit`)) {
        skExtra.push({
          title: formData.get(`sk_extra[${i}][title]_edit`) as string,
          price: formData.get(`sk_extra[${i}][price]_edit`) as string,
          description: formData.get(`sk_extra[${i}][description]_edit`) as string
        });
        i++;
      }
      
      // Process EN packages
      const enPackages: any[] = [];
      i = 0;
      while (formData.has(`en_packages[${i}][name]_edit`)) {
        enPackages.push({
          name: formData.get(`en_packages[${i}][name]_edit`) as string,
          price: formData.get(`en_packages[${i}][price]_edit`) as string,
          description: formData.get(`en_packages[${i}][description]_edit`) as string,
          features: (formData.get(`en_packages[${i}][features]_edit`) as string).split(',').map(f => f.trim())
        });
        i++;
      }
      
      // Process EN extra
      const enExtra: any[] = [];
      i = 0;
      while (formData.has(`en_extra[${i}][title]_edit`)) {
        enExtra.push({
          title: formData.get(`en_extra[${i}][title]_edit`) as string,
          price: formData.get(`en_extra[${i}][price]_edit`) as string,
          description: formData.get(`en_extra[${i}][description]_edit`) as string
        });
        i++;
      }

      data = {
        sk: {
          packages: skPackages,
          extra: skExtra
        },
        en: {
          packages: enPackages,
          extra: enExtra
        }
      };
    }

    // Save file
    await writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');

    return new Response(JSON.stringify({ success: true, message: 'Uložené!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Save content error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
