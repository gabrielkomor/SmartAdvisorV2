import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ["lightweight-charts"],
  },
  resolve: {
    dedupe: ["lightweight-charts"],
  },
  server: {
    host: true,
    allowedHosts: ["elective-clerk-moaner.ngrok-free.dev"],
  },
});
