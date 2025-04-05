import { e as createComponent, f as createAstro, j as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, k as renderSlot } from './astro/server_BMKL8o1P.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_CHxQZ16-.mjs';

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>${frontmatter.pubDate.toString().slice(0, 10)}</p> <p><em>${frontmatter.description}</em></p> <p>Written by: ${frontmatter.author}</p> <img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")}> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/home/ljfp/Repositories/astroblog/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
