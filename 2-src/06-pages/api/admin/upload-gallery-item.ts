import type { APIRoute } from 'astro';

import { methodNotAllowed } from '@/lib/api';
const GITHUB_API = 'https://api.github.com';
const REPO_OWNER = 'ZoloZiak';
const REPO_NAME = 'magicroom-mt';
const BRANCH = 'main';

export const POST: APIRoute = async ({ request }) => {

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string || 'gallery';
    const titleSk = formData.get('titleSk') as string;
    const titleEn = formData.get('titleEn') as string;
    const altSk = formData.get('altSk') as string;
    const altEn = formData.get('altEn') as string;

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

    // Upload image to GitHub
    const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${filePath}`;
    
    const imageResponse = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        message: `Upload ${folder}/${filename} via Admin`,
        content: base64,
        branch: BRANCH
      })
    });

    if (!imageResponse.ok) {
      const error = await imageResponse.json();
      return new Response(JSON.stringify({ error: error.message || 'Upload failed' }), {
        status: imageResponse.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Now update gallery.json
    const galleryPath = 'content/json/gallery.json';
    const galleryUrl = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${galleryPath}?ref=${BRANCH}`;
    
    // Get current gallery.json
    const galleryResponse = await fetch(galleryUrl, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    });

    let sha = null;
    let currentGallery: any = { gallery: [] };

    if (galleryResponse.ok) {
      const galleryData = await galleryResponse.json();
      sha = galleryData.sha;
      currentGallery = JSON.parse(decodeURIComponent(escape(atob(galleryData.content))));
    }
    // Add new item
    const newItem = {
      filename: filename,
      title: titleSk,
      titleEn: titleEn || titleSk,
      alt: altSk,
      altEn: altEn || altSk
    };

    currentGallery.gallery.push(newItem);

    // Update gallery.json
    const newContent = btoa(unescape(encodeURIComponent(JSON.stringify(currentGallery, null, 2))));
    
    const updateResponse = await fetch(galleryUrl, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        message: `Update gallery.json - add ${filename}`,
        content: newContent,
        branch: BRANCH,
        sha: sha
      })
    });

    if (!updateResponse.ok) {
      const error = await updateResponse.json();
      return new Response(JSON.stringify({ error: error.message || 'Failed to update gallery' }), {
        status: updateResponse.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const publicPath = `/${filePath.replace('public/', '')}`;
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Image uploaded and added to gallery',
      path: publicPath,
      filename: filename
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Gallery upload error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri nahrávaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

export const GET: APIRoute = async () => methodNotAllowed();
