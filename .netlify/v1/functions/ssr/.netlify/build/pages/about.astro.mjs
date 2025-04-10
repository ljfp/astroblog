import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BWBPl14s.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DDo26H2U.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "About Me";
  const redacted = "REDACTED";
  const identity = {
    nickname: "Lauta",
    location: "Barcelona, Spain",
    occupation: "Software Engineer",
    hobbies: ["board games", "coding", "cooking", "traveling", "video games"]
  };
  const skills = ["C++", "CSS", "HTML", "JavaScript", "Linux", "Python"];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<h2 data-astro-cid-kh7btl4r>and the blog.</h2> <p data-astro-cid-kh7btl4r>Here are some things about me:</p> <ul data-astro-cid-kh7btl4r> <li data-astro-cid-kh7btl4r>My name is: ${redacted} but people call me ${identity.nickname}</li> <li data-astro-cid-kh7btl4r>
I live in: ${identity.location} and I work as a: ${identity.occupation} </li> ${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r>
Some of my hobbies include: ${identity.hobbies[0]} and ${identity.hobbies[1]} </li>`} </ul> <p data-astro-cid-kh7btl4r>Some of my skills are:</p> <ul class="skills-list" data-astro-cid-kh7btl4r> ${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r>${skill}</li>`)} </ul> ${renderTemplate`<p data-astro-cid-kh7btl4r>I am happy to be finally making progress with my blog!</p>`}${renderTemplate`<p data-astro-cid-kh7btl4r>I finished designing this blog!</p>`}${renderTemplate`<p data-astro-cid-kh7btl4r>My goal is to finish in 5 days.</p>` }` })}`;
}, "/home/ljfp/Repositories/astroblog/src/pages/about.astro", void 0);

const $$file = "/home/ljfp/Repositories/astroblog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
