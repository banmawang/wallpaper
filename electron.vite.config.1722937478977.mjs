// electron.vite.config.ts
import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import vue from "@vitejs/plugin-vue";

// package.json
var package_default = {
  name: "banmashou-wallpaper",
  version: "1.0.1",
  description: "\u6591\u9A6C\u517D\u684C\u9762\u58C1\u7EB8\u8F6F\u4EF6",
  main: "./out/main/index.js",
  author: "https://www.banmashou.com",
  homepage: "https://www.banmashou.com",
  scripts: {
    format: "prettier --write .",
    lint: "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts,.vue --fix",
    "typecheck:node": "tsc --noEmit -p tsconfig.node.json --composite false",
    "typecheck:web": "vue-tsc --noEmit -p tsconfig.web.json --composite false",
    typecheck: "npm run typecheck:node && npm run typecheck:web",
    start: "electron-vite preview",
    dev: "electron-vite dev",
    build: "npm run typecheck && electron-vite build",
    postinstall: "electron-builder install-app-deps",
    "build:unpack": "npm run build && electron-builder --dir",
    "build:win": "npm run build && electron-builder --win",
    "build:mac": "npm run build && electron-builder --mac",
    "build:linux": "npm run build && electron-builder --linux"
  },
  dependencies: {
    "@electron-toolkit/preload": "^3.0.0",
    "@electron-toolkit/utils": "^3.0.0",
    "@icon-park/vue-next": "^1.4.2",
    axios: "^1.7.3",
    "electron-updater": "^6.1.7",
    "element-plus": "^2.7.8",
    lodash: "^4.17.21",
    "node-fetch": "2",
    pinia: "^2.2.0",
    "pinia-plugin-persistedstate": "^3.2.1",
    sass: "^1.77.8",
    "vue-router": "4",
    wallpaper: "v5.0.1"
  },
  devDependencies: {
    "@electron-toolkit/eslint-config": "^1.0.2",
    "@electron-toolkit/eslint-config-ts": "^2.0.0",
    "@electron-toolkit/tsconfig": "^1.0.1",
    "@rushstack/eslint-patch": "^1.10.3",
    "@types/node": "^20.14.8",
    "@types/node-fetch": "^2.6.11",
    "@vitejs/plugin-vue": "^5.0.5",
    "@vue/eslint-config-prettier": "^9.0.0",
    "@vue/eslint-config-typescript": "^13.0.0",
    autoprefixer: "^10.4.20",
    electron: "^31.0.2",
    "electron-builder": "^24.13.3",
    "electron-vite": "^2.3.0",
    eslint: "^8.57.0",
    "eslint-plugin-vue": "^9.26.0",
    postcss: "^8.4.40",
    prettier: "^3.3.2",
    tailwindcss: "^3.4.7",
    typescript: "^5.5.2",
    vite: "^5.3.1",
    vue: "^3.4.30",
    "vue-tsc": "^2.0.22"
  }
};

// electron.vite.config.ts
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src")
      }
    },
    plugins: [vue()],
    define: {
      "process.env": {
        VITE_SNIPPETS_VERSION: JSON.stringify(package_default.version).replace(/"/g, "")
        // Define other variables as needed
      }
    }
  }
});
export {
  electron_vite_config_default as default
};
