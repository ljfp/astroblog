import { _ as _page$1 } from '../chunks/post-1_B38ouMG4.mjs';
import { _ as _page$2 } from '../chunks/post-2_B1EX8Fhn.mjs';
import { _ as _page$3 } from '../chunks/post-3_DKCvUOG0.mjs';
import { _ as _page$4 } from '../chunks/post-4_B67V83Vq.mjs';
import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, j as renderComponent } from '../chunks/astro/server_BMKL8o1P.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CHxQZ16-.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "/home/ljfp/Repositories/astroblog/src/components/BlogPost.astro", void 0);

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const allPosts = Object.values(
    [_page$1,_page$2,_page$3,_page$4]
  );
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
