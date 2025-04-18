// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: "https://ljfp.netlify.app",
  integrations: [preact()]
});