import { e as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BMKL8o1P.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_BkXrZsyD.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Blog";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>This is where the first post will go.</p> <ul> <li><a href="/posts/post-1/">Post 1</a></li> <li><a href="/posts/post-2/">Post 2</a></li> <li><a href="/posts/post-3/">Post 3</a></li> </ul> ` })}`;
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
