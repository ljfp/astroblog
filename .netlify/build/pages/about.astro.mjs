import { e as createComponent, f as createAstro, i as defineStyleVars, h as addAttribute, j as renderHead, r as renderTemplate } from '../chunks/astro/server_xKCjqi9t.mjs';
/* empty css                                 */
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const redacted = "REDACTED";
  const identity = {
    nickname: "Lauta",
    location: "Barcelona, Spain",
    occupation: "Software Engineer",
    hobbies: ["board games", "coding", "cooking", "traveling", "video games"]
  };
  const skills = ["C++", "CSS", "HTML", "JavaScript", "Linux", "Python"];
  const finished = false;
  const skillColor = "navy";
  const fontWeight = "bold";
  const textCase = "uppercase";
  const $$definedVars = defineStyleVars([{ skillColor, fontWeight, textCase }]);
  return renderTemplate`<html lang="en" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> <a href="/" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Home</a> <a href="/about/" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>About</a> <a href="/blog/" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Blog</a> <h1 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${pageTitle}</h1> <h2 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>and the blog.</h2> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Here are some things about me:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My name is: ${redacted} but people call me ${identity.nickname}</li> <li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I live in: ${identity.location} and I work as a: ${identity.occupation}</li> ${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Some of my hobbies include: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Some of my skills are:</p> <ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}> ${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skill}</li>`)} </ul> ${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I am happy to be finally making progress with my blog!</p>`} ${finished} ${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My goal is to finish in 5 days.</p>` } </body></html>`;
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
