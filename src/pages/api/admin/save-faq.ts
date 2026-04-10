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
    const formData = await request.formData();
    const questionSk = formData.get('questionSk') as string;
    const answerSk = formData.get('answerSk') as string;
    const questionEn = formData.get('questionEn') as string;
    const answerEn = formData.get('answerEn') as string;

    if (!questionSk || !answerSk || !questionEn || !answerEn) {
      return new Response(JSON.stringify({ error: 'Chýbajú povinné polia' }), { status: 400 });
    }

    const GITHUB_TOKEN = import.meta.env.GITHUB_TOKEN;
    if (!GITHUB_TOKEN) {
      return new Response(JSON.stringify({ error: 'GitHub token not configured' }), { status: 500 });
    }

    // Get current faqs.json
    const faqsPath = 'content/json/faqs.json';
    const url = `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/${faqsPath}?ref=${BRANCH}`;
    
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github+json'
      }
    });

    let sha = null;
    let currentFaqs = { sk: [], en: [] };
    
    if (response.ok) {
      const data = await response.json();
      sha = data.sha;
      currentFaqs = JSON.parse(decodeURIComponent(escape(atob(data.content))));
    }

    // Add new FAQ
    currentFaqs.sk.push({ question: questionSk, answer: answerSk });
    currentFaqs.en.push({ question: questionEn, answer: answerEn });

    // Save to GitHub
    const newContent = btoa(unescape(encodeURIComponent(JSON.stringify(currentFaqs, null, 2))));
    
    const updateResponse = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github+json'
      },
      body: JSON.stringify({
        message: `Add FAQ via Admin`,
        content: newContent,
        branch: BRANCH,
        sha: sha
      })
    });

    if (!updateResponse.ok) {
      const error = await updateResponse.json();
      return new Response(JSON.stringify({ error: error.message }), { status: updateResponse.status });
    }

    return new Response(JSON.stringify({ success: true, message: 'FAQ pridaná!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Save FAQ error:', error);
    return new Response(JSON.stringify({ error: 'Chyba pri ukladaní' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
