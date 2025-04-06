import { c as createComponent, d as defineStyleVars, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server__5-nRXt4.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_CG-cMFWU.mjs';
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
  const skillColor = "navy";
  const fontWeight = "bold";
  const textCase = "uppercase";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight, textCase }]);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<h2 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>and the blog.</h2> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Here are some things about me:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My name is: ${redacted} but people call me ${identity.nickname}</li> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
I live in: ${identity.location} and I work as a: ${identity.occupation} </li> ${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
Some of my hobbies include: ${identity.hobbies[0]} and ${identity.hobbies[1]} </li>`} </ul> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Some of my skills are:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> ${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skill}</li>`)} </ul> ${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I am happy to be finally making progress with my blog!</p>`}${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I finished designing this blog!</p>`}${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My goal is to finish in 5 days.</p>` }` })}`;
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
