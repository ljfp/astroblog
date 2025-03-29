import { e as createComponent, f as createAstro, h as addAttribute, i as renderHead, r as renderTemplate } from '../chunks/astro/server_DP60LoG0.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>LJFP</title>${renderHead()}</head> <body> <a href="/">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a> <h1>About Me</h1> <h2>and the blog.</h2> <p>Placeholder for about me.</p> <p>Placeholder for second paragraph.</p> </body></html>`;
}, "/home/ljfp/Repositories/astroblog/src/pages/about.astro", void 0);

const $$file = "/home/ljfp/Repositories/astroblog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
