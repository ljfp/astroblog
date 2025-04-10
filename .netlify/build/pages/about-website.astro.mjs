import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BWBPl14s.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DDo26H2U.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://ljfp.netlify.app");
const $$AboutWebsite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutWebsite;
  const pageTitle = "About This Website";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>About This Website</h2> <p>This website was built with modern web technologies:</p> <ul> <li><strong>Astro</strong>: A modern static site builder</li> <li><strong>Preact</strong>: A fast 3kB alternative to React</li> <li><strong>JavaScript</strong>: For interactivity and dynamic content</li> <li><strong>CSS</strong>: For styling and responsive design</li> </ul> <p>
The website features a "hacker terminal" aesthetic combined with modern, interactive elements. It's designed to
		showcase my work in programming and video game development.
</p> <p>
You can switch between dark and light modes using the theme toggle in the header. The website is also fully
		responsive, adapting to different screen sizes for an optimal viewing experience.
</p> ` })}`;
}, "/home/ljfp/Repositories/astroblog/src/pages/about-website.astro", void 0);

const $$file = "/home/ljfp/Repositories/astroblog/src/pages/about-website.astro";
const $$url = "/about-website";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AboutWebsite,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
