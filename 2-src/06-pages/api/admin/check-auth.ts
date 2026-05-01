import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ cookies, redirect }) => {
  const session = cookies.get('admin-session');
  
  if (!session?.value) {
    return redirect('/admin/login');
  }
  
  return new Response(null, { status: 200 });
};
