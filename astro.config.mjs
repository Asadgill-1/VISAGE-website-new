import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vesage.studio',
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
