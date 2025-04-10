import { h } from "preact";
import ThemeControls from "./ThemeControls";
import FontControls from "./FontControls";

export default function ControlBar() {
	return (
		<div class="control-bar">
			<div class="control-bar-left">
				<span class="site-title">LJFP's Website</span>
			</div>
			<div class="control-bar-controls">
				<FontControls />
				<ThemeControls />
			</div>

			<style>{`
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
      `}</style>
		</div>
	);
}
