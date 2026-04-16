import type { APIRoute } from 'astro';

export const prerender = false;

import { methodNotAllowed } from '@/lib/api';
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
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'gallery';

    if (!file) {
      return new Response(JSON.stringify({ error: 'No file provided' }), { status: 400 });
    }

    const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
    if (!GITHUB_TOKEN) {
      return new Response(JSON.stringify({ error: 'GitHub token not configured' }), { status: 500 });
    }

    // Convert file to base64
    const arrayBuffer = await file.arrayBuffer();
    const base64 = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

    // Generate filename
    const timestamp = Date.now();
    const originalName = file.name.replace(/\s+/g, '-').toLowerCase();
    const filename = `${timestamp}-${originalName}`;
    const filePath = `public/images/${folder}/${filename}`;

    // Check if file exists (to get SHA)
    let sha = null;
    try {
      const checkUrl = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}?ref=${BRANCH}`;
      const checkResponse = await fetch(checkUrl, {
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github+json'
        }
      });
      if (checkResponse.ok) {
        const checkResult = await checkResponse.json();
        sha = checkResult.sha;
      }
    } catch (e) {
      // File doesn't exist
    }

    // Upload to GitHub
    const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
    
    const requestBody: any = {
      message: `Upload ${folder}/${filename} via Admin`,
      content: base64,
      branch: BRANCH
    };

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
      console.error('GitHub upload error:', error);
      return new Response(JSON.stringify({ error: error.message || 'Upload failed' }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const result = await response.json();
    
    // Return the public URL path
    const publicPath = `/${filePath.replace('public/', '')}`;
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'File uploaded',
      path: publicPath,
      filename: filename,
      sha: result.content?.sha
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Upload error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri nahrávaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const GET: APIRoute = async () => methodNotAllowed();
