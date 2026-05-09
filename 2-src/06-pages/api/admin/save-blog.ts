import type { APIRoute } from 'astro';

import { methodNotAllowed } from '@/05-lib/api';
const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'ZoloZiak';
const REPO_NAME = 'magicroom-mt';
const BRANCH = 'main';
const BLOG_PATH = '1-content/02-json/blog.json';

export const POST: APIRoute = async ({ request }) => {
  try {
    const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
    
    if (!GITHUB_TOKEN) {
      return new Response(JSON.stringify({ error: 'GitHub token not configured' }), { status: 500 });
    }
    
    const body = await request.json();
    const posts = body.posts || [];
    
    // Get current blog.json from GitHub
    const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${BLOG_PATH}?ref=${BRANCH}`;
    
    const getResponse = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    });
    
    let sha = null;
    
    if (getResponse.ok) {
      const data = await getResponse.json();
      sha = data.sha;
    }
    
    // Save to GitHub
    const newContent = btoa(unescape(encodeURIComponent(JSON.stringify({ posts }, null, 2))));
    
    const updateResponse = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        message: 'Update blog.json via Admin',
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
    console.error('Save blog error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const GET: APIRoute = async () => methodNotAllowed();