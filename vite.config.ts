import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    allowedHosts: [
      "2qsx7k-5175.csb.app", // Votre host CodeSandbox
      "localhost", // Pour le développement local
    ],
  },
});
