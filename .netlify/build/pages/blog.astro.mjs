import { _ as __vite_glob_0_0 } from '../chunks/post-1_Bp5G-mZ_.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/post-2_DKlYYUou.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/post-3_V_oJBA50.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/post-4_CtnVeDWh.mjs';
import { e as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BMKL8o1P.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DOSxJEkB.mjs';
import { $ as $$BlogPost } from '../chunks/BlogPost_BUdr5-8b.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const allPosts = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3]);
  const pageTitle = "Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>This is where the first post will go.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)} </ul> ` })}`;
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
