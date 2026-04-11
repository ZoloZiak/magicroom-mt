import type { APIRoute } from 'astro';

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'ZoloZiak';
const REPO_NAME = 'magicroom-mt';
const BRANCH = 'main';
const GALLERY_PATH = 'content/json/gallery.json';

export const POST: APIRoute = async ({ request }) => {
  try {
    const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
    
    if (!GITHUB_TOKEN) {
      return new Response(JSON.stringify({ error: 'GitHub token not configured' }), { status: 500 });
    }
    
    const contentType = request.headers.get('content-type') || '';
    
    // Get current gallery.json from GitHub
    const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${GALLERY_PATH}?ref=${BRANCH}`;
    
    const getResponse = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    });
    
    let sha = null;
    let currentGallery = { gallery: [] };
    
    if (getResponse.ok) {
      const data = await getResponse.json();
      sha = data.sha;
      currentGallery = JSON.parse(decodeURIComponent(escape(atob(data.content))));
    }
    
    if (contentType.includes('application/json')) {
      const body = await request.json();
      currentGallery.gallery = body.items || [];
    } else {
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
      currentGallery.gallery = items;
    }
    
    // Save to GitHub
    const newContent = btoa(unescape(encodeURIComponent(JSON.stringify(currentGallery, null, 2))));
    
    const updateResponse = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        message: 'Update gallery.json via Admin',
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
    console.error('Save gallery error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};