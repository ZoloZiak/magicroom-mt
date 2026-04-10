import type { APIRoute } from 'astro';
import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';

const DRESSES_PATH = join(process.cwd(), 'content/json/dresses.json');

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'ZoloZiak';
const REPO_NAME = 'magicroom-mt';
const BRANCH = 'main';

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    
    // Handle JSON request (delete action)
    if (contentType.includes('application/json')) {
      const body = await request.json();
      
      if (body.action === 'delete') {
        // Delete - save filtered array
        await writeFile(DRESSES_PATH, JSON.stringify({ dresses: body.dresses || [] }, null, 2), 'utf-8');
        return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
      }
      
      if (body.action === 'add') {
        // Add new - read current, add new dress, save
        let currentData = { dresses: [] };
        try {
          const content = await readFile(DRESSES_PATH, 'utf-8');
          currentData = JSON.parse(content);
        } catch (e) {}
        
        const newDress = body.dress;
        newDress.images = [newDress.id];
        
        currentData.dresses.push(newDress);
        await writeFile(DRESSES_PATH, JSON.stringify(currentData, null, 2), 'utf-8');
        
        return new Response(JSON.stringify({ success: true, id: newDress.id }), { headers: { 'Content-Type': 'application/json' } });
      }
    }
    
    // Handle FormData request (edit existing)
    const formData = await request.formData();
    const action = formData.get('action') as string;
    
    // Handle add action from form
    if (action === 'add') {
      let currentData = { dresses: [] };
      try {
        const content = await readFile(DRESSES_PATH, 'utf-8');
        currentData = JSON.parse(content);
      } catch (e) {}
      
      const newDress = {
        id: formData.get('dress[id]') as string,
        name: formData.get('dress[name]') as string,
        price: parseInt(formData.get('dress[price]') as string) || 0,
        size: formData.get('dress[size]') as string || '',
        color: formData.get('dress[color]') as string || '',
        style: formData.get('dress[style]') as string || '',
        status: formData.get('dress[status]') as string || 'available',
        description: formData.get('dress[description]') as string || '',
        details: formData.get('dress[details]') as string || '',
        type: 'new',
        featured: false,
        images: [formData.get('dress[id]') as string]
      };
      
      // Upload image if provided
      const file = formData.get('file') as File;
      if (file && file.size > 0) {
        const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
        if (GITHUB_TOKEN) {
          const arrayBuffer = await file.arrayBuffer();
          const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
          const filename = `${newDress.id}.jpg`;
          const filePath = `content/images/dresses/${filename}`;
          
          const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
          
          await fetch(url, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${GITHUB_TOKEN}`,
              'Content-Type': 'application/json',
              'Accept': 'application/vnd.github+json'
            },
            body: JSON.stringify({
              message: `Add dress image ${filename} via Admin`,
              content: base64,
              branch: BRANCH
            })
          });
        }
      }
      
      currentData.dresses.push(newDress);
      await writeFile(DRESSES_PATH, JSON.stringify(currentData, null, 2), 'utf-8');
      
      return new Response(JSON.stringify({ success: true, id: newDress.id }), { headers: { 'Content-Type': 'application/json' } });
    }
    
    // Default: Edit existing dresses
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