import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
  webExt: {
    binaries: {
      chrome: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe',
      edge: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    }
  },
  targetBrowsers: ['chrome', 'edge']
});
