import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, r as renderTemplate, j as renderComponent, p as renderHead, o as renderSlot, q as renderScript } from './astro/server_q8ZOQVc3.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro("https://ljfp.netlify.app");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${platform}</a> `;
}, "/home/ljfp/Repositories/astroblog/src/components/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "ljfp", "data-astro-cid-sz7xmlte": true })} </footer>`;
}, "/home/ljfp/Repositories/astroblog/src/components/Footer.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "/home/ljfp/Repositories/astroblog/src/components/Hamburger.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a> <a href="/tags/">Tags</a> </div>`;
}, "/home/ljfp/Repositories/astroblog/src/components/Navigation.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<button id="themeToggle" data-astro-cid-oemx5le4> <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-oemx5le4> <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-oemx5le4></path> <path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-oemx5le4></path> </svg> </button>  <script>
	const theme = (() => {
		const localStorageTheme = localStorage?.getItem("theme") ?? '';
		if (['dark', 'light'].includes(localStorageTheme)) {
			return localStorageTheme;
		}
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}
		return 'light';
	})();

	if (theme === 'light') {
		document.documentElement.classList.remove('dark');
	} else {
		document.documentElement.classList.add('dark');
	}

	window.localStorage.setItem('theme', theme);

	const handleToggleClick = () => {
		const element = document.documentElement;
		element.classList.toggle("dark");

		const isDark = element.classList.contains("dark");
		localStorage.setItem("theme", isDark ? "dark" : "light");
	}

	document.getElementById("themeToggle")?.addEventListener("click", handleToggleClick);
<\/script>`])), maybeRenderHead());
}, "/home/ljfp/Repositories/astroblog/src/components/ThemeIcon.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header> <nav> ${renderComponent($$result, "Hamburger", $$Hamburger, {})} ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})} ${renderComponent($$result, "Navigation", $$Navigation, {})} </nav> </header>`;
}, "/home/ljfp/Repositories/astroblog/src/components/Header.astro", void 0);

const $$Astro = createAstro("https://ljfp.netlify.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-37fxchfa> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true })} <h1 data-astro-cid-37fxchfa>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} ${renderScript($$result, "/home/ljfp/Repositories/astroblog/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/ljfp/Repositories/astroblog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
