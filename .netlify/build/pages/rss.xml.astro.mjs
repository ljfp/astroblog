import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_XIwoEkDa.mjs';
export { renderers } from '../renderers.mjs';

async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "LJFP | Blog",
    description: "A personal blog about tech, life, and everything in between.",
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`
    })),
    customData: `<language>en-us</language>`
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
