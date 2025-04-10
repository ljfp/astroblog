import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BWBPl14s.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DDo26H2U.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "Projects";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-aid3sr62": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 data-astro-cid-aid3sr62>My Projects</h2> <p data-astro-cid-aid3sr62>Here you'll find some of my programming and game development projects.</p> <div class="projects-grid" data-astro-cid-aid3sr62> <div class="project-card" data-astro-cid-aid3sr62> <h3 data-astro-cid-aid3sr62>Project 1</h3> <p data-astro-cid-aid3sr62>A description of project 1. This could be a game or an open-source application.</p> <div class="project-tags" data-astro-cid-aid3sr62> <span class="tag" data-astro-cid-aid3sr62>JavaScript</span> <span class="tag" data-astro-cid-aid3sr62>WebAssembly</span> </div> <a href="#" class="project-link" data-astro-cid-aid3sr62>View Project →</a> </div> <div class="project-card" data-astro-cid-aid3sr62> <h3 data-astro-cid-aid3sr62>Project 2</h3> <p data-astro-cid-aid3sr62>A description of project 2. This could be a game or an open-source application.</p> <div class="project-tags" data-astro-cid-aid3sr62> <span class="tag" data-astro-cid-aid3sr62>C++</span> <span class="tag" data-astro-cid-aid3sr62>Game Development</span> </div> <a href="#" class="project-link" data-astro-cid-aid3sr62>View Project →</a> </div> </div> ` })} `;
}, "/home/ljfp/Repositories/astroblog/src/pages/projects.astro", void 0);

const $$file = "/home/ljfp/Repositories/astroblog/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
