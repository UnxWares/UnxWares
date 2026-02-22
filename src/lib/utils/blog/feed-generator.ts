import type { LoadedPost } from './content-loader';

const SITE_URL = 'https://unxwares.com';
const SITE_TITLE = 'UnxWares Blog';
const SITE_DESCRIPTION = 'Latest articles from UnxWares';

/**
 * Escape XML special characters
 */
function escapeXml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

/**
 * Format date to RFC-822 format (for RSS 2.0)
 */
function formatRFC822Date(date: Date): string {
	return date.toUTCString();
}

/**
 * Format date to ISO 8601 format (for Atom)
 */
function formatISO8601Date(date: Date): string {
	return date.toISOString();
}

/**
 * Generate RSS 2.0 feed
 */
export function generateRSSFeed(posts: LoadedPost[], locale: string = 'fr'): string {
	const now = new Date();
	const langCode = locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-US' : locale;

	const items = posts
		.map((post) => {
			const postUrl = `${SITE_URL}/blog/${post.slug}`;
			const pubDate = formatRFC822Date(new Date(post.frontmatter.date));

			return `
    <item>
      <title>${escapeXml(post.frontmatter.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${escapeXml(post.frontmatter.description)}</description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(post.frontmatter.authorEmail || 'contact@unxwares.com')} (${escapeXml(post.frontmatter.author)})</author>
      <category>${escapeXml(post.frontmatter.category)}</category>
      ${post.frontmatter.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
      ${post.frontmatter.image ? `<enclosure url="${SITE_URL}${post.frontmatter.image}" type="image/jpeg" />` : ''}
    </item>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>${langCode}</language>
    <lastBuildDate>${formatRFC822Date(now)}</lastBuildDate>
    <atom:link href="${SITE_URL}/blog/rss.xml?lang=${locale}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}

/**
 * Generate Atom 1.0 feed
 */
export function generateAtomFeed(posts: LoadedPost[], locale: string = 'fr'): string {
	const now = new Date();
	const feedId = `${SITE_URL}/blog`;
	const langCode = locale === 'fr' ? 'fr-FR' : locale === 'en' ? 'en-US' : locale;

	const entries = posts
		.map((post) => {
			const postUrl = `${SITE_URL}/blog/${post.slug}`;
			const updated = formatISO8601Date(new Date(post.frontmatter.date));

			return `
  <entry>
    <title>${escapeXml(post.frontmatter.title)}</title>
    <link href="${postUrl}" />
    <id>${postUrl}</id>
    <updated>${updated}</updated>
    <summary>${escapeXml(post.frontmatter.description)}</summary>
    <content type="html"><![CDATA[${post.content}]]></content>
    <author>
      <name>${escapeXml(post.frontmatter.author)}</name>
      ${post.frontmatter.authorEmail ? `<email>${escapeXml(post.frontmatter.authorEmail)}</email>` : ''}
    </author>
    <category term="${escapeXml(post.frontmatter.category)}" />
    ${post.frontmatter.tags.map((tag) => `<category term="${escapeXml(tag)}" />`).join('\n    ')}
  </entry>`;
		})
		.join('\n');

	return `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="${langCode}">
  <title>${escapeXml(SITE_TITLE)}</title>
  <link href="${SITE_URL}/blog" />
  <link href="${SITE_URL}/blog/atom.xml?lang=${locale}" rel="self" type="application/atom+xml" />
  <id>${feedId}</id>
  <updated>${formatISO8601Date(now)}</updated>
  <subtitle>${escapeXml(SITE_DESCRIPTION)}</subtitle>
  ${entries}
</feed>`;
}
