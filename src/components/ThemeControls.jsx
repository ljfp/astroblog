import { useState, useEffect } from "preact/hooks";

// Theme options
const THEMES = [
	{ name: "Refined White", value: "light", icon: "☀" },
	{ name: "Black Midnight Vapor", value: "dark", icon: "☾" },
	{ name: "Operation Safe Blue", value: "blue", icon: "⊹" },
];

export default function ThemeControls() {
	const [theme, setTheme] = useState(() => {
		if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
			return localStorage.getItem("theme");
		}
		// Default to light theme or use system preference
		if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			return "dark";
		}
		return "light";
	});

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (typeof document !== "undefined") {
			// Remove any existing theme classes
			document.documentElement.classList.remove("light", "dark", "blue");

			// Add the selected theme class
			document.documentElement.classList.add(theme);

			// Store in localStorage
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

	// Get the current theme object
	const currentTheme = THEMES.find((t) => t.value === theme) || THEMES[0];

	return (
		<div class="theme-controls">
			<button class="theme-toggle" onClick={toggleDropdown} aria-label="Toggle Theme Selection">
				⌃+T Theme
			</button>
			{isOpen && (
				<div class="theme-dropdown">
					{THEMES.map((themeOption) => (
						<div
							key={themeOption.value}
							class={`theme-option ${theme === themeOption.value ? "selected" : ""}`}
							onClick={() => changeTheme(themeOption.value)}
						>
							<span class="theme-icon">{themeOption.icon}</span> {themeOption.name}
						</div>
					))}
				</div>
			)}

			<style>{`
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
      `}</style>
		</div>
	);
}
