import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
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
