import rss from '@astrojs/rss';
import { SITE_URL, SITE_NAME, EMAIL } from '@/data/site';

const BLOG_POSTS = [
  {
    slug: 'svadobne-trendy-2026',
    title: 'Svadobne trendy 2026',
    excerpt: 'Najnovsie trendy v svadobnej mode pre rok 2026.',
    date: '2026-04-01',
  },
  {
    slug: 'ako-zvolit-svadobne-saty',
    title: 'Ako si vybrat svadobne saty',
    excerpt: 'Krok za krokom vas prevedieme vyberom ideálnych svadobnych šiat.',
    date: '2026-03-15',
  },
  {
    slug: 'svadobne-dekoracie-na-male-oslavy',
    title: 'Svadobne dekoracie pre male oslavy',
    excerpt: 'Inspiracie a tipy na dekoracie pre intimne svadby.',
    date: '2026-03-01',
  },
];

export async function GET() {
  return rss({
    title: SITE_NAME + ' - Blog',
    description: 'Svadobne tipy a inspiracie z MagicRoom Martin',
    site: SITE_URL,
    items: BLOG_POSTS.map((post) => ({
      title: post.title,
      pubDate: new Date(post.date),
      description: post.excerpt,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>sk-SK</language>`,
  });
}