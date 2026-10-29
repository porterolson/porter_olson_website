import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// For a custom domain, change site to your domain and base to '/'.
export default defineConfig({
  site: 'https://porterolson.github.io',
  base: '/porter_olson_website',
  output: 'static',
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
});
