// Static SPA build config used for Vercel deployments.
// The default vite.config.ts (via @lovable.dev/vite-tanstack-config) builds a
// Cloudflare Worker, which Vercel cannot serve. This config builds a plain
// client-side SPA (entry: index.html -> src/main.tsx) into `dist-vercel`,
// which Vercel serves as a static site with an SPA fallback (see vercel.json).
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "use-sync-external-store/shim/with-selector.js": path.resolve(
        __dirname,
        "src/vite-compat/use-sync-external-store-with-selector.mjs",
      ),
    },
  },
  optimizeDeps: {
    include: ["use-sync-external-store/shim/with-selector"],
  },
  build: {
    outDir: "dist-vercel",
    emptyOutDir: true,
  },
});
