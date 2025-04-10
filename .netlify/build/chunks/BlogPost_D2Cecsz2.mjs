import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate } from './astro/server_BWBPl14s.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://ljfp.netlify.app");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "/home/ljfp/Repositories/astroblog/src/components/BlogPost.astro", void 0);

export { $$BlogPost as $ };
