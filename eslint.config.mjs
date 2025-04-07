// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';
import typescriptParser from '@typescript-eslint/parser';

/** @type {import("eslint").Linter.Config[]} */
export default [
	// Base configurations
	...eslintPluginAstro.configs.recommended,

	// Additional rules for specific file types
	{
		// Define rules for TypeScript files
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: typescriptParser
		}
	},

	// Preact/JSX configuration
	{
		files: ["**/*.jsx"],
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				},
				jsxPragma: "h", // For Preact
				ecmaVersion: "latest",
				sourceType: "module"
			}
		},
		settings: {
			jsx: {
				pragma: "h" // For Preact
			},
			react: {
				pragma: "h", // Use Preact's h() function instead of React's createElement
				version: "detect"
			}
		}
	},

	// Global ignores
	{
		ignores: [
			".netlify/**",
			"dist/**",
			"node_modules/**"
		]
	},

	// Add custom rules if needed
	{
		files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx", "**/*.astro"],
		rules: {
			"no-console": "warn" // Add a rule to flag console.log statements
		}
	}
]; 