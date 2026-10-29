import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages custom domain; all internal URLs resolve from the domain root.
export default defineConfig({
  site: 'https://porterolson.xyz',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
