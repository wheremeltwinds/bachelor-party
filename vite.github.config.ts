import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative asset paths work both at /bachelor-party/ and on a custom domain.
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist-gh",
    emptyOutDir: true,
  },
});
