import { f as createComponent, j as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_q8ZOQVc3.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DvNUqEW6.mjs';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
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
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2>My awesome blog subtitle</h2> ${renderComponent($$result2, "Greeting", Greeting, { "client:load": true, "messages": ["Hej", "Hallo", "Hola", "Habari"], "client:component-hydration": "load", "client:component-path": "/home/ljfp/Repositories/astroblog/src/components/Greeting", "client:component-export": "default" })} ` })}`;
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
