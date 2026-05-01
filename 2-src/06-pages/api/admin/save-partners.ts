import type { APIRoute } from 'astro';

import { methodNotAllowed } from '@/05-lib/api';
const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'ZoloZiak';
const REPO_NAME = 'magicroom-mt';
const BRANCH = 'main';
const PARTNERS_PATH = 'content/json/partners.json';

export const POST: APIRoute = async ({ request }) => {
  try {
    const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
    
    if (!GITHUB_TOKEN) {
      return new Response(JSON.stringify({ error: 'GitHub token not configured' }), { status: 500 });
    }
    
    const formData = await request.formData();
    
    // Get current partners.json from GitHub
    const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${PARTNERS_PATH}?ref=${BRANCH}`;
    
    const getResponse = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    });
    
    let sha = null;
    let currentData: any = { categories: { sk: [], en: [] } };
    
    if (getResponse.ok) {
      const data = await getResponse.json();
      sha = data.sha;
      currentData = JSON.parse(decodeURIComponent(escape(atob(data.content))));
    }
    
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
        message: 'Update partners.json via Admin',
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
    console.error('Save partners error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const GET: APIRoute = async () => methodNotAllowed();