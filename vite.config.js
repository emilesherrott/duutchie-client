import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  if (command === "build") {
    return {
      plugins: [react()],
      base: "./",
      optimizeDeps: {
        treeshake: false
      },
      sourcemap: true,
      build: {
        minify: false
      }
    };
  } else {
    return {
      plugins: [react()],
    };
  }
});
