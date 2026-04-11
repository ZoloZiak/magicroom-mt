import type { APIRoute } from 'astro';

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'ZoloZiak';
const REPO_NAME = 'magicroom-mt';
const BRANCH = 'main';
const DRESSES_PATH = 'content/json/dresses.json';

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
    
    if (!GITHUB_TOKEN) {
      return new Response(JSON.stringify({ error: 'GitHub token not configured' }), { status: 500 });
    }
    
    // Get current dresses.json from GitHub
    const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${DRESSES_PATH}?ref=${BRANCH}`;
    
    const getResponse = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    });
    
    let sha = null;
    let currentData = { dresses: [] };
    
    if (getResponse.ok) {
      const data = await getResponse.json();
      sha = data.sha;
      currentData = JSON.parse(decodeURIComponent(escape(atob(data.content))));
    }
    
    // Handle JSON request (delete/add actions)
    if (contentType.includes('application/json')) {
      const body = await request.json();
      
      if (body.action === 'delete') {
        currentData.dresses = body.dresses || [];
      } else if (body.action === 'add') {
        const newDress = body.dress;
        newDress.images = [newDress.id];
        currentData.dresses.push(newDress);
      }
    } else {
      // Handle FormData request
      const formData = await request.formData();
      const action = formData.get('action') as string;
      
      if (action === 'add') {
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
          const arrayBuffer = await file.arrayBuffer();
          const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
          const filename = `${newDress.id}.jpg`;
          const filePath = `content/images/dresses/${filename}`;
          
          const imageUrl = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
          
          await fetch(imageUrl, {
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
        
        currentData.dresses.push(newDress);
      } else {
        // Edit existing dresses
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
        currentData.dresses = dresses;
      }
    }
    
    // Save to GitHub
    const newContent = btoa(unescape(encodeURIComponent(JSON.stringify(currentData, null, 2))));
    
    const updateResponse = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        message: 'Update dresses.json via Admin',
        content: newContent,
        branch: BRANCH,
        sha: sha
      })
    });
    
    if (!updateResponse.ok) {
      const error = await updateResponse.json();
      return new Response(JSON.stringify({ error: error.message }), { status: updateResponse.status });
    }
    
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