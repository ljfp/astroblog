import { e as createComponent, f as createAstro, h as addAttribute, j as renderHead, k as renderComponent, l as renderScript, r as renderTemplate } from '../chunks/astro/server_DotJoNmw.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer } from '../chunks/Header_Do0Plug1.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Home";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <h1>${pageTitle}</h1> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/home/ljfp/Repositories/astroblog/src/pages/index.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
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
