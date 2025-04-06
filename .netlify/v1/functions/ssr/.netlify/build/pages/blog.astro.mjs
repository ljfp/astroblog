import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server__5-nRXt4.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_XIwoEkDa.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CG-cMFWU.mjs';
import { $ as $$BlogPost } from '../chunks/BlogPost_BlmSKuY5.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Blog";
  const allPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<p>This is where the first post will go.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": `/posts/${post.id}/`, "title": post.data.title })}`)} </ul> ` })}`;
}, "/home/ljfp/Repositories/astroblog/src/pages/blog.astro", void 0);

const $$file = "/home/ljfp/Repositories/astroblog/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Blog,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
