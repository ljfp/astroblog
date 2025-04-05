import { e as createComponent, j as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_BMKL8o1P.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_DnmiPxOS.mjs';

const html = () => "<p>I’m forcing myself to write more so there will be no Lorem Ipsums here. Deal with it.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Second Blog Post","author":"Lauta","description":"I need more than one blog post to test the layout of the website.","image":{"url":"https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA","alt":"A MacBook Air on a table. On its right, there's a coffee and an Iphone. On its left, there's a notebook and a pen."},"pubDate":"2025-03-31T00:00:00.000Z","tags":["astro","blogging","digital nomad","series"]};
				const file = "/home/ljfp/Repositories/astroblog/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "   \n                                              \n                       \n             \n                                                                                \n      \n                                                                                                           \n                                                                                                                             \n                   \n                                                      \n   \nI'm forcing myself to write more so there will be no Lorem Ipsums here. Deal with it.";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
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
