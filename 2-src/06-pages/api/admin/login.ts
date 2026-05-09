import type { APIRoute } from 'astro';

export const prerender = false;

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
    
    // Heslo z environmentálnej premennej
    const adminPassword = import.meta.env.ADMIN_PASSWORD || process.env.ADMIN_PASSWORD;
    
    if (password === adminPassword) {
      cookies.set('admin-session', 'authenticated', {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 24 hours
        sameSite: 'lax', // Zmenené zo strict na lax pre lepšiu kompatibilitu pri redirectoch
      });
      
      return redirect('/admin/dashboard');
    }
    
    return redirect('/admin/login?error=Nesprávne heslo');
  } catch (error) {
    console.error('Login error:', error);
    return redirect('/admin/login?error=Chyba pri prihlasovaní');
  }
};
