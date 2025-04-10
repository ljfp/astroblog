import { useState, useEffect } from "preact/hooks";

// Font options with Google Fonts
const FONTS = [
	{ name: "Default", value: "", cssFamily: "sans-serif" },
	{ name: "JetBrains Mono", value: "jetbrains-mono", cssFamily: '"JetBrains Mono", monospace' },
	{ name: "Fira Code", value: "fira-code", cssFamily: '"Fira Code", monospace' },
	{ name: "Source Code Pro", value: "source-code-pro", cssFamily: '"Source Code Pro", monospace' },
	{ name: "Roboto Mono", value: "roboto-mono", cssFamily: '"Roboto Mono", monospace' },
];

export default function FontControls() {
	const [font, setFont] = useState(() => {
		if (typeof localStorage !== "undefined" && localStorage.getItem("font")) {
			return localStorage.getItem("font");
		}
		return "";
	});

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (typeof document !== "undefined") {
			// Update CSS variable for font-family
			const selectedFont = FONTS.find((f) => f.value === font) || FONTS[0];
			document.documentElement.style.setProperty("--font-family-mono", selectedFont.cssFamily);

			// Remove any existing font classes
			document.body.classList.forEach((existingClass) => {
				if (existingClass.startsWith("font-")) {
					document.body.classList.remove(existingClass);
				}
			});

			// Add the selected font class
			if (font) {
				document.body.classList.add(`font-${font}`);
			}

			// Store in localStorage
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

	return (
		<div class="font-controls">
			<button class="font-toggle" onClick={toggleDropdown} aria-label="Toggle Font Selection">
				⌃+O Fonts
			</button>
			{isOpen && (
				<div class="font-dropdown">
					{FONTS.map((fontOption) => (
						<div key={fontOption.value} class="font-option" onClick={() => changeFont(fontOption.value)}>
							<span class="font-icon">⊹</span> {fontOption.name}
						</div>
					))}
				</div>
			)}

			<style>{`
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
      `}</style>
		</div>
	);
}
