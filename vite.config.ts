// Shared Vite + TanStack Start config. Do NOT add these plugins manually or the
// app will break with duplicates: TanStack Start, React, Tailwind, tsconfig paths,
// Nitro (build), path aliases, and related tooling.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (SSR error wrapper).
    server: { entry: "server" },
  },
});
