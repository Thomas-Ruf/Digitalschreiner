import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, AUTHOR } from '../site';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    customData: '<language>de-ch</language>',
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      author: AUTHOR.name,
      categories: p.data.tags,
      link: `/blog/${p.id}/`,
    })),
  });
}
