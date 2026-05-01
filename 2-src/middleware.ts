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

  // 2. I18n Redirects for root-level slugs (e.g., /o-nas -> /sk/o-nas)
  // This ensures E2E tests and legacy links work
  const rootSlugs = Object.keys(SLUG_MAP);
  const pathPart = pathname.split('/').filter(Boolean)[0];

  if (rootSlugs.includes(pathPart) && !pathname.startsWith('/sk/') && !pathname.startsWith('/en/')) {
     return redirect(`/sk${pathname}${url.search}${url.hash}`);
  }

  // Special case for root /blog
  if (pathPart === 'blog' && !pathname.startsWith('/sk/') && !pathname.startsWith('/en/')) {
     return redirect(`/sk${pathname}${url.search}${url.hash}`);
  }

  return next();
});
