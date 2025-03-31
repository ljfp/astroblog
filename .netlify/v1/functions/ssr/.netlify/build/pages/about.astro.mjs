import { e as createComponent, f as createAstro, h as addAttribute, i as renderHead, r as renderTemplate } from '../chunks/astro/server_DcZ_c4t4.mjs';
import 'kleur/colors';
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
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head> <body> <a href="/">Home</a> <a href="/about/">About</a> <a href="/blog/">Blog</a> <h1>${pageTitle}</h1> <h2>and the blog.</h2> <p>Here are some things about me:</p> <ul> <li>My name is: ${redacted} but people call me ${identity.nickname}</li> <li>I live in: ${identity.location} and I work as a: ${identity.occupation}</li> ${identity.hobbies.length >= 2 && renderTemplate`<li>Some of my hobbies include: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p>Some of my skills are:</p> <ul> ${skills.map((skill) => renderTemplate`<li>${skill}</li>`)} </ul> ${renderTemplate`<p>I am happy to be finally making progress with my blog!</p>`} ${finished} ${renderTemplate`<p>My goal is to finish in 5 days.</p>` } </body></html>`;
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
