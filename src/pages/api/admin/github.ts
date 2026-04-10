import type { APIRoute } from 'astro';

export const prerender = false;

const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'ZoloZiak';
const REPO_NAME = 'magicroom-mt';
const BRANCH = 'main';

export const POST: APIRoute = async ({ request, cookies }) => {
  const session = cookies.get('admin-session');
  if (!session?.value) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  try {
    const body = await request.json();
    const { filePath, content, message, sha } = body;

    if (!filePath || !content) {
      return new Response(JSON.stringify({ error: 'Missing filePath or content' }), { status: 400 });
    }

    const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
    if (!GITHUB_TOKEN) {
      return new Response(JSON.stringify({ error: 'GitHub token not configured' }), { status: 500 });
    }

    // Convert content to base64
    const contentBase64 = btoa(unescape(encodeURIComponent(content)));

    // Prepare the request
    const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
    
    const requestBody: any = {
      message: message || `Update ${filePath} via Admin`,
      content: contentBase64,
      branch: BRANCH
    };

    // If we have SHA, we're updating an existing file
    if (sha) {
      requestBody.sha = sha;
    }

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('GitHub API error:', error);
      return new Response(JSON.stringify({ error: error.message || 'GitHub API error' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const result = await response.json();
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'File saved to GitHub',
      commit: result.commit?.sha
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('GitHub save error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní na GitHub' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

// GET - fetch current file SHA
export const GET: APIRoute = async ({ url, cookies }) => {
  const session = cookies.get('admin-session');
  if (!session?.value) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const filePath = url.searchParams.get('path');
  if (!filePath) {
    return new Response(JSON.stringify({ error: 'Missing path' }), { status: 400 });
  }

  const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
  if (!GITHUB_TOKEN) {
    return new Response(JSON.stringify({ error: 'GitHub token not configured' }), { status: 500 });
  }

  try {
    const apiUrl = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}?ref=${BRANCH}`;
    
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    });

    if (!response.ok) {
      if (response.status === 404) {
        return new Response(JSON.stringify({ exists: false }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      const error = await response.json();
      return new Response(JSON.stringify({ error: error.message }), { status: response.status });
    }

    const result = await response.json();
    return new Response(JSON.stringify({ 
      exists: true,
      sha: result.sha,
      content: result.content ? decodeURIComponent(escape(atob(result.content))) : null
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('GitHub fetch error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri načítaní z GitHub' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
