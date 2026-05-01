import rss from '@astrojs/rss';
import { SITE_URL, SITE_NAME } from '@/data/site';
import { getBlogPosts } from '@/data/content';

export async function GET() {
  const blogPosts = await getBlogPosts('sk');
  
  return rss({
    title: SITE_NAME + ' - Blog',
    description: 'Svadobné tipy a inšpirácie z MagicRoom Martin',
    site: SITE_URL,
    items: blogPosts.map((post: any) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.excerpt,
      link: `/blog/${post.slug}/`,
      categories: post.tags,
    })),
    customData: `<language>sk-SK</language>`,
  });
}
