
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Safely import lovable-tagger if available
let componentTagger;
try {
  const lovableTagger = require("lovable-tagger");
  componentTagger = lovableTagger.componentTagger;
} catch (error) {
  // If package is not available, provide a no-op function
  componentTagger = () => ({
    name: 'dummy-tagger',
    // Empty hooks to avoid errors
    configureServer: () => {},
    transform: () => null
  });
  console.warn("lovable-tagger package not available. Component tagging disabled.");
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
