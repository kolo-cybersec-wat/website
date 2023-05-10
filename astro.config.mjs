import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // TODO(micorix): Either base on env vars or remove
  site: 'https://micorix.github.io',
  base: '/cyber-security-club-website-prototype',
  integrations: [tailwind()]
});