import { e as createComponent, j as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_BMKL8o1P.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_DnmiPxOS.mjs';

const html = () => "<p>Welcome to my <em>personal</em> blog. Here, I will share my thoughts, projects, and things I find interesting. It will be (mostly) written in english and I will (mostly) talk about things in tech.</p>\n<h2 id=\"stack\">Stack</h2>\n<ol>\n<li>\n<p><strong>Astro</strong>: This is a Javascript framework to create content-driven websites. Component rendering is done server-side. This may look like a bad idea for a website hosted on a Raspberry Pi, but since I’m not hosting a lot of things in it and the blog will consist of static content, the specs of the Raspberry Pi are more than enough.</p>\n</li>\n<li>\n<p><strong>Apache HTTP Server</strong>: Realiable, simple, and I already know how to use it. Nginx also checks those boxes, but I find it easier to set up virtual hosts on Apache HTTP than on Nginx.</p>\n</li>\n<li>\n<p><strong>Raspberry Pi 4 model B</strong>: I bought this one two years ago, when I was living in Buenos Aires. Since it’s small enough I decided to take it with me when I started travelling.</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will decide on a layout, then test some styles. Once I settle with the layout and style of the website, I’ll start adding new posts.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Initial post","pubDate":"2025-03-31T00:00:00.000Z","description":"This is the first post of my blog. I will be using it to test styles and layouts.","author":"Lauta","image":{"url":"https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA","alt":"A MacBook Air on a table. On its right, there's a coffee and an Iphone. On its left, there's a notebook and a pen."},"tags":["astro","blogging","digital nomad"]};
				const file = "/home/ljfp/Repositories/astroblog/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "   \n                                              \n                   \n                   \n                                                                                              \n             \n      \n                                                                                                           \n                                                                                                                             \n                                            \n   \nWelcome to my _personal_ blog. Here, I will share my thoughts, projects, and things I find interesting. It will be (mostly) written in english and I will (mostly) talk about things in tech.\n\n## Stack\n\n1. **Astro**: This is a Javascript framework to create content-driven websites. Component rendering is done server-side. This may look like a bad idea for a website hosted on a Raspberry Pi, but since I'm not hosting a lot of things in it and the blog will consist of static content, the specs of the Raspberry Pi are more than enough.\n\n2. **Apache HTTP Server**: Realiable, simple, and I already know how to use it. Nginx also checks those boxes, but I find it easier to set up virtual hosts on Apache HTTP than on Nginx. \n\n3. **Raspberry Pi 4 model B**: I bought this one two years ago, when I was living in Buenos Aires. Since it's small enough I decided to take it with me when I started travelling.\n\n## What's next\n\nI will decide on a layout, then test some styles. Once I settle with the layout and style of the website, I'll start adding new posts.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"stack","text":"Stack"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
