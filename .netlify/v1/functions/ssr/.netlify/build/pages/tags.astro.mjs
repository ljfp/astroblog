import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server__5-nRXt4.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DNW3XjSA.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CG-cMFWU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  const pageTitle = "Tag Index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a> </p>`)} </div> ` })} `;
}, "/home/ljfp/Repositories/astroblog/src/pages/tags/index.astro", void 0);

const $$file = "/home/ljfp/Repositories/astroblog/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
