// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';
import typescriptParser from '@typescript-eslint/parser';

/** @type {import("eslint").Linter.FlatConfig[]} */
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
		rules: {
			// Add any custom rules here
		}
	}
]; 