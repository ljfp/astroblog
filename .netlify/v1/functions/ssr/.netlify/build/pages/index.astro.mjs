import { e as createComponent, f as createAstro, h as addAttribute, j as renderHead, r as renderTemplate } from '../chunks/astro/server_xKCjqi9t.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Home";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> <a href="/">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a> <h1>${pageTitle}</h1> </body></html>`;
}, "/home/ljfp/Repositories/astroblog/src/pages/index.astro", void 0);

const $$file = "/home/ljfp/Repositories/astroblog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
