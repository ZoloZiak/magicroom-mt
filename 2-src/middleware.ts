import { defineMiddleware } from 'astro:middleware';
import { SLUG_MAP } from './05-lib/i18n';

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

  // 2. I18n Legacy Redirects (if any are still needed, but remove the /sk prefixing)
  // We want to avoid redirecting /o-nas to /sk/o-nas as /o-nas is the primary URL
  const pathPart = pathname.split('/').filter(Boolean)[0];

  // Special case: if someone visits /sk/..., redirect them to root or let it be?
  // Let's redirect /sk/slug to /slug for clean SEO
  if (pathname.startsWith('/sk/')) {
     const newPath = pathname.replace('/sk/', '/');
     return redirect(`${newPath}${url.search}${url.hash}`);
  }
  if (pathname === '/sk') {
     return redirect(`/${url.search}${url.hash}`);
  }

  return next();
});
