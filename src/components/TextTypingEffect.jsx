import { h } from "preact";
import { useState, useEffect } from "preact/hooks";

export default function TextTypingEffect({ text, typingSpeed = 50, startDelay = 500 }) {
	const [displayedText, setDisplayedText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isTyping, setIsTyping] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsTyping(true);
		}, startDelay);

		return () => clearTimeout(timer);
	}, [startDelay]);

	useEffect(() => {
		if (!isTyping) return;

		if (currentIndex < text.length) {
			const timer = setTimeout(() => {
				setDisplayedText((prevText) => prevText + text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, typingSpeed);

			return () => clearTimeout(timer);
		}
	}, [currentIndex, text, typingSpeed, isTyping]);

	const skip = () => {
		setDisplayedText(text);
		setCurrentIndex(text.length);
	};

	return (
		<div
			class="typing-effect"
			onClick={currentIndex < text.length ? skip : undefined}
			style={{ cursor: currentIndex < text.length ? "pointer" : "default" }}
		>
			<pre>
				<code>
					{displayedText}
					<span class={currentIndex < text.length ? "cursor" : ""}></span>
				</code>
			</pre>

			<style>{`
        .typing-effect {
          margin: 2rem 0;
          font-family: var(--font-family-mono, monospace);
        }
        
        .typing-effect pre {
          background: transparent;
          padding: 0;
          margin: 0;
          border: none;
          overflow: visible;
          white-space: pre-wrap;
        }
        
        .typing-effect code {
          background: transparent;
          padding: 0;
          border: none;
        }
        
        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .cursor::after {
          content: "▌";
          display: inline-block;
          animation: blink 1s infinite;
          color: var(--theme-text);
        }
      `}</style>
		</div>
	);
}
