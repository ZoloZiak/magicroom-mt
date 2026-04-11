import type { APIRoute } from 'astro';

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'ZoloZiak';
const REPO_NAME = 'magicroom-mt';
const BRANCH = 'main';

export const POST: APIRoute = async ({ request }) => {
  try {
    const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
    
    if (!GITHUB_TOKEN) {
      return new Response(JSON.stringify({ error: 'GitHub token not configured' }), { status: 500 });
    }
    
    const formData = await request.formData();
    const fileName = formData.get('file') as string;
    
    if (!fileName) {
      return new Response(JSON.stringify({ error: 'Missing file name' }), { status: 400 });
    }
    
    const filePath = `content/json/${fileName}.json`;
    const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}?ref=${BRANCH}`;
    
    // Get current file from GitHub
    const getResponse = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    });
    
    let sha = null;
    let data: any = {};
    
    if (getResponse.ok) {
      const fileData = await getResponse.json();
      sha = fileData.sha;
      data = JSON.parse(decodeURIComponent(escape(atob(fileData.content))));
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
    
    // Save to GitHub
    const newContent = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
    
    const updateResponse = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        message: `Update ${fileName}.json via Admin`,
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
    console.error('Save content error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};