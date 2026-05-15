import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  srcDir: 'src',
  modules: ['@wxt-dev/module-svelte'],
  webExt: {
    binaries: {
      chrome: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
    }
  },
  targetBrowsers: ['chrome']
});
