import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, k as decodeKey } from './chunks/astro/server_BWBPl14s.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/ljfp/Repositories/astroblog/","cacheDir":"file:///home/ljfp/Repositories/astroblog/node_modules/.astro/","outDir":"file:///home/ljfp/Repositories/astroblog/dist/","srcDir":"file:///home/ljfp/Repositories/astroblog/src/","publicDir":"file:///home/ljfp/Repositories/astroblog/public/","buildClientDir":"file:///home/ljfp/Repositories/astroblog/dist/","buildServerDir":"file:///home/ljfp/Repositories/astroblog/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".skill[data-astro-cid-kh7btl4r]{color:var(--theme-text);border:1px solid var(--theme-border);padding:.3rem .6rem;margin-right:.5rem;display:inline-block;font-size:.9rem;background-color:var(--theme-background-modal)}.skill[data-astro-cid-kh7btl4r]:hover{border-color:var(--theme-focused-foreground)}ul[data-astro-cid-kh7btl4r].skills-list{display:flex;flex-wrap:wrap;gap:.5rem;list-style:none;padding:0}\n"},{"type":"external","src":"/_astro/_slug_.DY-9pGo9.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DY-9pGo9.css"}],"routeData":{"route":"/about-website","isIndex":false,"type":"page","pattern":"^\\/about-website\\/?$","segments":[[{"content":"about-website","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-website.astro","pathname":"/about-website","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_slug_.DY-9pGo9.css"}],"routeData":{"route":"/blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".projects-grid[data-astro-cid-aid3sr62]{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:2rem;margin-top:2rem}.project-card[data-astro-cid-aid3sr62]{border:1px solid var(--theme-border);border-radius:0;padding:1.5rem;background-color:var(--theme-background-modal);transition:transform .2s ease}.project-card[data-astro-cid-aid3sr62]:hover{transform:translateY(-5px)}.project-tags[data-astro-cid-aid3sr62]{margin:1rem 0}.tag[data-astro-cid-aid3sr62]{background-color:var(--theme-button-background);color:var(--theme-text);padding:.3rem .7rem;border-radius:0;font-size:.8rem;margin-right:.5rem;border:1px solid var(--theme-border)}.project-link[data-astro-cid-aid3sr62]{display:inline-block;margin-top:1rem;color:var(--theme-text);text-decoration:none;font-weight:400;padding:.4rem .6rem;border:1px solid var(--theme-text)}.project-link[data-astro-cid-aid3sr62]:hover{border-color:var(--theme-focused-foreground)}\n"},{"type":"external","src":"/_astro/_slug_.DY-9pGo9.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-os4i7owy]{color:var(--theme-text)}.tags[data-astro-cid-os4i7owy]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-os4i7owy]{margin:.25em;border:1px solid var(--theme-border);border-radius:0;padding:.5em 1em;font-size:.9em;background-color:var(--theme-background-modal)}.tag[data-astro-cid-os4i7owy]:hover{border-color:var(--theme-focused-foreground)}\n"},{"type":"external","src":"/_astro/_slug_.DY-9pGo9.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"section[data-astro-cid-j7pv25f6]{margin:2rem 0;padding:1rem;border-radius:8px;background-color:var(--theme-background-modal)}h3[data-astro-cid-j7pv25f6]{margin-top:0;border-bottom:1px solid var(--theme-border);padding-bottom:.5rem}.projects-preview[data-astro-cid-j7pv25f6] ul[data-astro-cid-j7pv25f6]{margin:1rem 0}.projects-preview[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{display:inline-block;margin-top:1rem;text-decoration:none;color:var(--theme-text);padding:.4rem .6rem;border:1px solid var(--theme-text);font-size:.9rem;font-weight:400}.projects-preview[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]:hover{border-color:var(--theme-focused-foreground)}\n"},{"type":"external","src":"/_astro/_slug_.DY-9pGo9.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://ljfp.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/ljfp/Repositories/astroblog/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/ljfp/Repositories/astroblog/src/pages/posts/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/posts/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ljfp/Repositories/astroblog/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["/home/ljfp/Repositories/astroblog/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ljfp/Repositories/astroblog/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/ljfp/Repositories/astroblog/src/pages/about-website.astro",{"propagation":"none","containsHead":true}],["/home/ljfp/Repositories/astroblog/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/ljfp/Repositories/astroblog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/ljfp/Repositories/astroblog/src/pages/projects.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/about-website@_@astro":"pages/about-website.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/posts/[...slug]@_@astro":"pages/posts/_---slug_.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_31QWpHJo.mjs","/home/ljfp/Repositories/astroblog/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BFOgDSlF.mjs","/home/ljfp/Repositories/astroblog/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/ljfp/Repositories/astroblog/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_B0Ce2pHs.mjs","/home/ljfp/Repositories/astroblog/src/components/Greeting":"_astro/Greeting.DsWvKhjU.js","/home/ljfp/Repositories/astroblog/src/components/TerminalBar":"_astro/TerminalBar.EtLWwyuo.js","@astrojs/preact/client.js":"_astro/client.D7hRK0Vg.js","/home/ljfp/Repositories/astroblog/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.5fDzMl7j.js","/home/ljfp/Repositories/astroblog/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.Cwz0Qm5R.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/ljfp/Repositories/astroblog/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","document.querySelector(\".hamburger\").addEventListener(\"click\",()=>{document.querySelector(\".nav-links\").classList.toggle(\"expanded\")});function t(){const o=localStorage.getItem(\"theme\");o&&(o===\"light\"||o===\"dark\"||o===\"blue\")&&(document.documentElement.className=o)}function n(){const o=localStorage.getItem(\"font\");if(o){document.body.classList.forEach(e=>{e.startsWith(\"font-\")&&document.body.classList.remove(e)}),o&&document.body.classList.add(`font-${o}`);const s={\"\":\"sans-serif\",\"jetbrains-mono\":'\"JetBrains Mono\", monospace',\"fira-code\":'\"Fira Code\", monospace',\"source-code-pro\":'\"Source Code Pro\", monospace',\"roboto-mono\":'\"Roboto Mono\", monospace'};document.documentElement.style.setProperty(\"--font-family-mono\",s[o]||\"sans-serif\")}}document.addEventListener(\"DOMContentLoaded\",()=>{t(),n()});t();n();"]],"assets":["/_astro/_slug_.DY-9pGo9.css","/favicon.svg","/_astro/Greeting.DsWvKhjU.js","/_astro/TerminalBar.EtLWwyuo.js","/_astro/client.D7hRK0Vg.js","/_astro/hooks.module.Bc2OOzVt.js","/_astro/jsxRuntime.module.BXRLK4zq.js","/_astro/preact.module.BkxX9n6Y.js","/_astro/signals.module.Cwz0Qm5R.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"xss6b467N0Sk5U3FIMl3HGVv22caNDGq2MTWMsnG0Z8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
