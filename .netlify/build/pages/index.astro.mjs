import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BWBPl14s.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_D324YbH7.mjs';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

function Greeting({
  messages
}) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);
  return jsxs("div", {
    children: [jsxs("h3", {
      children: [greeting, "! Thank you for visiting!"]
    }), jsx("button", {
      onClick: () => setGreeting(randomMessage()),
      children: "New Greeting"
    })]
  });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "LJFP's Personal Website";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 data-astro-cid-j7pv25f6>Welcome to my website</h2> ${renderComponent($$result2, "Greeting", Greeting, { "client:load": true, "messages": ["Hej", "Hallo", "Hola", "Habari"], "client:component-hydration": "load", "client:component-path": "/home/ljfp/Repositories/astroblog/src/components/Greeting", "client:component-export": "default", "data-astro-cid-j7pv25f6": true })} <section class="about-section" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>About Me</h3> <p data-astro-cid-j7pv25f6>
Hi, I'm LJFP! This is my personal website where you can learn about me and my work. Feel free to explore my
			blog posts, projects, and more. Try switching themes and fonts using the controls in the top bar!
</p> </section> <section class="projects-preview" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Featured Projects</h3> <ul data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Game Development</strong> - Creating games with modern technologies</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Open Source Project 1</strong> - A collaborative tool for developers</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Open Source Project 2</strong> - A library for efficient data processing</li> </ul> <a href="/projects/" data-astro-cid-j7pv25f6>View all projects →</a> </section>  ` })}`;
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
