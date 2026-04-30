import { defineMiddleware } from 'astro:middleware';
import { SLUG_MAP } from './lib/i18n';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;
  const { pathname } = url;

  // 1. Protect all /admin routes except /admin/login
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const sessionId = cookies.get('admin-session')?.value;

    if (!sessionId) {
      return redirect('/admin/login');
    }
  }

  // 2. SEO Redirects: /sk/o-nas -> /o-nas
  if (pathname.startsWith('/sk/')) {
     const newPath = pathname.substring(3);
     return redirect(`${newPath}${url.search}${url.hash}`);
  }

  if (pathname === '/sk') {
     return redirect(`/${url.search}${url.hash}`);
  }

  return next();
});
