import type { APIRoute } from 'astro';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const prerender = false;

const CONFIG_PATH = join(process.cwd(), 'content/json/admin-config.json');

export const GET: APIRoute = async ({ cookies, redirect }) => {
  const session = cookies.get('admin-session');
  
  if (session?.value) {
    return redirect('/admin/dashboard');
  }
  
  return redirect('/admin/login');
};

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  try {
    const formData = await request.formData();
    const password = formData.get('password') as string;
    
    if (!password) {
      return redirect('/admin/login?error=Chýba heslo');
    }
    
    const configPath = join(process.cwd(), 'content/json/admin-config.json');
    const configContent = await readFile(configPath, 'utf-8');
    const config = JSON.parse(configContent);
    
    if (password === config.admin?.password) {
      cookies.set('admin-session', 'authenticated', {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 24 hours
        sameSite: 'strict',
      });
      
      return redirect('/admin/dashboard');
    }
    
    return redirect('/admin/login?error=Nesprávne heslo');
  } catch (error) {
    console.error('Login error:', error);
    return redirect('/admin/login?error=Chyba pri prihlasovaní');
  }
};
