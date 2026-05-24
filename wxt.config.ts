import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  webExt: {
    binaries: {
      chrome: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
      edge: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    }
  },
  targetBrowsers: ['chrome', 'edge']
});
