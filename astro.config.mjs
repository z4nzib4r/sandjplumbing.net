// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages at https://z4nzib4r.github.io/sandjplumbing.net/
// When the custom domain (www.sandjplumbing.net) is pointed at GitHub Pages,
// set `site` to 'https://www.sandjplumbing.net', remove `base`, and add public/CNAME.
// https://astro.build/config
export default defineConfig({
  site: 'https://z4nzib4r.github.io',
  base: '/sandjplumbing.net',
  trailingSlash: 'ignore',
});
