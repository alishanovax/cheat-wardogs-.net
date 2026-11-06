import type { SitemapItem } from '@astrojs/sitemap';
import { EnumChangefreq } from 'sitemap';
import { blogPosts } from '../data/blog';
import { parseBlogDate } from '../utils/schema';

const buildDate = new Date().toISOString();

const blogLastmod = new Map<string, string>(
  blogPosts.map((post) => [`/blog/${post.slug}/`, parseBlogDate(post.date)]),
);

function pathnameFromUrl(url: string): string {
  const path = new URL(url).pathname;
  return path.endsWith('/') ? path : `${path}/`;
}

export function sitemapSerialize(item: SitemapItem): SitemapItem | undefined {
  const path = pathnameFromUrl(item.url);

  if (path.includes('/404') || path.startsWith('/go/') || path.includes('/rss.xml')) {
    return undefined;
  }

  item.lastmod = buildDate;

  if (path === '/') {
    item.priority = 1;
    item.changefreq = EnumChangefreq.WEEKLY;
    return item;
  }

  if (path === '/blog/') {
    item.priority = 0.9;
    item.changefreq = EnumChangefreq.WEEKLY;
    return item;
  }

  if (path === '/forum/') {
    item.priority = 0.8;
    item.changefreq = EnumChangefreq.DAILY;
    return item;
  }

  if (path.startsWith('/forum/')) {
    item.priority = 0.6;
    item.changefreq = EnumChangefreq.WEEKLY;
    return item;
  }

  if (path.startsWith('/blog/')) {
    item.priority = 0.7;
    item.changefreq = EnumChangefreq.MONTHLY;
    item.lastmod = blogLastmod.get(path) ?? buildDate;
    return item;
  }

  if (path.startsWith('/products/') || path.startsWith('/pd/')) {
    item.priority = 0.8;
    item.changefreq = EnumChangefreq.WEEKLY;
    return item;
  }

  if (
    path === '/about/' ||
    path === '/support/' ||
    path === '/privacy/' ||
    path === '/terms/' ||
    path === '/faq/'
  ) {
    item.priority = 0.5;
    item.changefreq = EnumChangefreq.YEARLY;
    return item;
  }

  item.priority = 0.6;
  item.changefreq = EnumChangefreq.MONTHLY;
  return item;
}
