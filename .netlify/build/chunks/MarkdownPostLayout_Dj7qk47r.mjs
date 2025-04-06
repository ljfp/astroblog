import { e as createAstro, f as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, o as renderSlot } from './astro/server_q8ZOQVc3.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './BaseLayout_DvNUqEW6.mjs';
/* empty css                          */

const $$Astro = createAstro("https://ljfp.netlify.app");
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "data-astro-cid-5grsw2hi": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p data-astro-cid-5grsw2hi>${frontmatter.pubDate.toString().slice(0, 10)}</p> <p data-astro-cid-5grsw2hi><em data-astro-cid-5grsw2hi>${frontmatter.description}</em></p> <p data-astro-cid-5grsw2hi>Written by: ${frontmatter.author}</p> <img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")} data-astro-cid-5grsw2hi> <div class="tags" data-astro-cid-5grsw2hi> ${frontmatter.tags.map((tag) => renderTemplate`<p class="tag" data-astro-cid-5grsw2hi><a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-5grsw2hi>${tag}</a></p>`)} </div> ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/home/ljfp/Repositories/astroblog/src/layouts/MarkdownPostLayout.astro", void 0);

export { $$MarkdownPostLayout as $ };
