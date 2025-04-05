import { e as createComponent, j as renderComponent, r as renderTemplate, u as unescapeHTML } from './astro/server_BMKL8o1P.mjs';
import 'kleur/colors';
import { $ as $$MarkdownPostLayout } from './MarkdownPostLayout_DnmiPxOS.mjs';

const html = () => "<p>I think that three posts are enough for testing purposes. Let’s stop here with the Markdown files and start doing some HTML and CSS! (said no one ever).</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"Third time's a charm","author":"Lauta","description":"I need more than ~one~ two blog posts to test the layout of the website.","image":{"url":"https://fastly.picsum.photos/id/8/5000/3333.jpg?hmac=OeG5ufhPYQBd6Rx1TAldAuF92lhCzAhKQKttGfawWuA","alt":"A MacBook Air on a table. On its right, there's a coffee and an Iphone. On its left, there's a notebook and a pen."},"pubDate":"2025-03-31T00:00:00.000Z","tags":["astro","blogging","digital nomad","series"]};
				const file = "/home/ljfp/Repositories/astroblog/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "   \n                                              \n                           \n             \n                                                                                       \n      \n                                                                                                           \n                                                                                                                             \n                   \n                                                      \n   \nI think that three posts are enough for testing purposes. Let's stop here with the Markdown files and start doing some HTML and CSS! (said no one ever).";
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
