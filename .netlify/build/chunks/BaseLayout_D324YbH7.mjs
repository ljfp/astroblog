import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, i as renderHead, e as renderSlot, j as renderScript } from './astro/server_BWBPl14s.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import 'preact';
import { useState, useEffect } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';

const $$Astro$1 = createAstro("https://ljfp.netlify.app");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  function getUrl(platform2, username2) {
    if (platform2 === "email") {
      return `mailto:${username2}`;
    } else if (platform2 === "linkedin") {
      return `https://www.linkedin.com/in/${username2}`;
    } else if (platform2 === "github") {
      return `https://github.com/${username2}`;
    } else {
      return `https://www.${platform2}.com/${username2}`;
    }
  }
  function getDisplayText(platform2) {
    return platform2.charAt(0).toUpperCase() + platform2.slice(1);
  }
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(getUrl(platform, username), "href")} class="social-link" data-astro-cid-yxtifmrq>
⊹ ${getDisplayText(platform)} </a> `;
}, "/home/ljfp/Repositories/astroblog/src/components/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> ${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "ljfp", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "linkedin", "username": "ljfp", "data-astro-cid-sz7xmlte": true })} ${renderComponent($$result, "Social", $$Social, { "platform": "email", "username": "ljfp@ljfp.xyz", "data-astro-cid-sz7xmlte": true })} </footer>`;
}, "/home/ljfp/Repositories/astroblog/src/components/Footer.astro", void 0);

const $$Hamburger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"> <span class="line"></span> <span class="line"></span> <span class="line"></span> </div>`;
}, "/home/ljfp/Repositories/astroblog/src/components/Hamburger.astro", void 0);

const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"> <a href="/">Home</a> <a href="/about/">About Me</a> <a href="/about-website/">About Website</a> <a href="/blog/">Blog</a> <a href="/projects/">Projects</a> </div>`;
}, "/home/ljfp/Repositories/astroblog/src/components/Navigation.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav data-astro-cid-3ef6ksr2> <div class="nav-left" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Hamburger", $$Hamburger, { "data-astro-cid-3ef6ksr2": true })} </div> ${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-3ef6ksr2": true })} </nav> </header> `;
}, "/home/ljfp/Repositories/astroblog/src/components/Header.astro", void 0);

const THEMES = [{
  name: "Refined White",
  value: "light",
  icon: "☀"
}, {
  name: "Black Midnight Vapor",
  value: "dark",
  icon: "☾"
}, {
  name: "Operation Safe Blue",
  value: "blue",
  icon: "⊹"
}];
function ThemeControls() {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("light", "dark", "blue");
      document.documentElement.classList.add(theme);
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("theme", theme);
      }
    }
  }, [theme]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };
  THEMES.find((t) => t.value === theme) || THEMES[0];
  return jsxs("div", {
    class: "theme-controls",
    children: [jsx("button", {
      class: "theme-toggle",
      onClick: toggleDropdown,
      "aria-label": "Toggle Theme Selection",
      children: "⌃+T Theme"
    }), isOpen && jsx("div", {
      class: "theme-dropdown",
      children: THEMES.map((themeOption) => jsxs("div", {
        class: `theme-option ${theme === themeOption.value ? "selected" : ""}`,
        onClick: () => changeTheme(themeOption.value),
        children: [jsx("span", {
          class: "theme-icon",
          children: themeOption.icon
        }), " ", themeOption.name]
      }, themeOption.value))
    }), jsx("style", {
      children: `
        .theme-controls {
          position: relative;
          display: inline-block;
        }
        
        .theme-toggle {
          background: transparent;
          color: inherit;
          border: 1px solid var(--theme-text, currentColor);
          padding: 0.4rem 0.6rem;
          font-family: var(--font-family-mono, monospace);
          cursor: pointer;
          font-size: 0.9rem;
        }
        
        .theme-toggle:hover {
          border-color: var(--theme-focused-foreground, #eee);
        }
        
        .theme-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 0.5rem;
          background: var(--theme-background-modal, white);
          border: 1px solid var(--theme-border, #ccc);
          padding: 0.5rem 0;
          min-width: 200px;
          z-index: 10;
        }
        
        .theme-option {
          padding: 0.4rem 1rem;
          cursor: pointer;
          white-space: nowrap;
        }
        
        .theme-option:hover, .theme-option.selected {
          background: var(--theme-focused-foreground, #eee);
        }
        
        .theme-icon {
          display: inline-block;
          margin-right: 0.5rem;
        }
      `
    })]
  });
}

const FONTS = [{
  name: "Default",
  value: "",
  cssFamily: "sans-serif"
}, {
  name: "JetBrains Mono",
  value: "jetbrains-mono",
  cssFamily: '"JetBrains Mono", monospace'
}, {
  name: "Fira Code",
  value: "fira-code",
  cssFamily: '"Fira Code", monospace'
}, {
  name: "Source Code Pro",
  value: "source-code-pro",
  cssFamily: '"Source Code Pro", monospace'
}, {
  name: "Roboto Mono",
  value: "roboto-mono",
  cssFamily: '"Roboto Mono", monospace'
}];
function FontControls() {
  const [font, setFont] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("font")) {
      return localStorage.getItem("font");
    }
    return "";
  });
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (typeof document !== "undefined") {
      const selectedFont = FONTS.find((f) => f.value === font) || FONTS[0];
      document.documentElement.style.setProperty("--font-family-mono", selectedFont.cssFamily);
      document.body.classList.forEach((existingClass) => {
        if (existingClass.startsWith("font-")) {
          document.body.classList.remove(existingClass);
        }
      });
      if (font) {
        document.body.classList.add(`font-${font}`);
      }
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("font", font);
      }
    }
  }, [font]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const changeFont = (newFont) => {
    setFont(newFont);
    setIsOpen(false);
  };
  return jsxs("div", {
    class: "font-controls",
    children: [jsx("button", {
      class: "font-toggle",
      onClick: toggleDropdown,
      "aria-label": "Toggle Font Selection",
      children: "⌃+O Fonts"
    }), isOpen && jsx("div", {
      class: "font-dropdown",
      children: FONTS.map((fontOption) => jsxs("div", {
        class: "font-option",
        onClick: () => changeFont(fontOption.value),
        children: [jsx("span", {
          class: "font-icon",
          children: "⊹"
        }), " ", fontOption.name]
      }, fontOption.value))
    }), jsx("style", {
      children: `
        .font-controls {
          position: relative;
          display: inline-block;
        }
        
        .font-toggle {
          background: transparent;
          color: inherit;
          border: 1px solid var(--theme-text, currentColor);
          padding: 0.4rem 0.6rem;
          font-family: var(--font-family-mono, monospace);
          cursor: pointer;
          font-size: 0.9rem;
        }
        
        .font-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 0.5rem;
          background: var(--theme-background-modal, white);
          border: 1px solid var(--theme-border, #ccc);
          padding: 0.5rem 0;
          min-width: 150px;
          z-index: 10;
        }
        
        .font-option {
          padding: 0.4rem 1rem;
          cursor: pointer;
          white-space: nowrap;
        }
        
        .font-option:hover {
          background: var(--theme-focused-foreground, #eee);
        }
        
        .font-icon {
          display: inline-block;
          margin-right: 0.5rem;
        }
      `
    })]
  });
}

function ControlBar() {
  return jsxs("div", {
    class: "control-bar",
    children: [jsx("div", {
      class: "control-bar-left",
      children: jsx("span", {
        class: "site-title",
        children: "LJFP's Website"
      })
    }), jsxs("div", {
      class: "control-bar-controls",
      children: [jsx(FontControls, {}), jsx(ThemeControls, {})]
    }), jsx("style", {
      children: `
        .control-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
          background: var(--theme-background-modal, #f0f0f0);
          border-bottom: 1px solid var(--theme-border, #ccc);
          font-family: var(--font-family-mono, monospace);
          margin-bottom: 1rem;
        }
        
        .site-title {
          font-weight: bold;
          color: var(--theme-text, inherit);
        }
        
        .control-bar-controls {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        
        @media (max-width: 636px) {
          .control-bar {
            flex-direction: column;
            gap: 0.5rem;
          }
          
          .control-bar-controls {
            width: 100%;
            justify-content: center;
          }
        }
      `
    })]
  });
}

const $$Astro = createAstro("https://ljfp.netlify.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title><!-- Terminal fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Roboto+Mono:wght@400;500&family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet">${renderHead()}</head> <body data-astro-cid-37fxchfa> ${renderComponent($$result, "ControlBar", ControlBar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/ljfp/Repositories/astroblog/src/components/TerminalBar", "client:component-export": "default", "data-astro-cid-37fxchfa": true })} ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true })} <h1 data-astro-cid-37fxchfa>${pageTitle}</h1> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true })} ${renderScript($$result, "/home/ljfp/Repositories/astroblog/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/home/ljfp/Repositories/astroblog/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
