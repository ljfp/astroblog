import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_31QWpHJo.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/about-website.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page5 = () => import('./pages/projects.astro.mjs');
const _page6 = () => import('./pages/rss.xml.astro.mjs');
const _page7 = () => import('./pages/tags/_tag_.astro.mjs');
const _page8 = () => import('./pages/tags.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/about-website.astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/posts/[...slug].astro", _page4],
    ["src/pages/projects.astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/tags/[tag].astro", _page7],
    ["src/pages/tags/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0722179a-4518-4c07-8182-4f740befbd06"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
