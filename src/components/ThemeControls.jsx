import { useState, useEffect } from "preact/hooks";

export default function ThemeControls() {
	const [isDark, setIsDark] = useState(() => {
		if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
			return localStorage.getItem("theme") === "dark";
		}
		return false; // Default to light theme
	});

	useEffect(() => {
		const theme = isDark ? "dark" : "light";
		document.documentElement.className = theme;
		if (typeof localStorage !== "undefined") {
			localStorage.setItem("theme", theme);
		}
	}, [isDark]);

	const toggleTheme = () => {
		setIsDark(!isDark);
	};

	return (
		<div class="theme-toggle-wrapper">
			<button
				class="theme-toggle"
				onClick={toggleTheme}
				aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
			>
				⌃+T Theme
			</button>

			<style>{`
        .theme-toggle-wrapper {
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
      `}</style>
		</div>
	);
}
