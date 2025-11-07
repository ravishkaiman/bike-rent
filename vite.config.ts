import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Use /bike-rent/ for GitHub Pages, / for Vercel and local dev
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_PAGES === "true" ? "/bike-rent/" : "/"),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
