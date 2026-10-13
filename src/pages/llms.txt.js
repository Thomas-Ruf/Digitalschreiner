import { getCollection } from 'astro:content';
import { SITE, AUTHOR } from '../site';

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const body = `# ${SITE.name}

> ${SITE.description}

Blog von ${AUTHOR.name} (${AUTHOR.jobTitle}, ehemaliger Spitzensportler) über Verbesserung, Lean und Digitalisierung im Schreinerhandwerk in der Schweiz. Leitsatz: ${SITE.claim}.

## Beiträge

${posts.map((p) => `- [${p.data.title}](${SITE.url}/blog/${p.id}/): ${p.data.description}`).join('\n')}

## Weitere Seiten

- [Über den Autor](${SITE.url}/ueber/)
- [RSS-Feed](${SITE.url}/rss.xml)
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
