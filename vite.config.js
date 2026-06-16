import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This repo is a USER SITE (kairavkkp.github.io), so it serves from the root.
// base stays "/". (Only project repos like github.com/you/portfolio need "/portfolio/".)
export default defineConfig({
  plugins: [react()],
  base: "/",
});
