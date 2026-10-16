import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    globals: true,
    css: true,
    coverage: {
      exclude: [
        "src/main.jsx",
        "src/App.jsx",
        "vite.config.js",
        "**/*.spec.jsx",
        "**/*.spec.js",
        "src/components/Cabecera.jsx",
        "src/components/PiePagina.jsx"
      ]
    }
  }
});