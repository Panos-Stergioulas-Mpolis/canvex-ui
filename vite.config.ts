import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import { coverageConfigDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    css: true,
    globals: true,
    setupFiles: "./src/test-setup.tsx",
    server: { deps: { inline: ["@mui/x-data-grid"] } },
    coverage: {
      reporter: ["text", "lcov"],
      reportsDirectory: "./coverage",
      thresholds: {
        lines: 80,
      },

      exclude: [
        ...coverageConfigDefaults.exclude,
        "**/node_modules/**",
        "**/dist/**",
        "**/.{git,cache,temp}/**",
        "**/.config.*",
        "/coverage",
        "src/types/**/*",
        "src/assets/**/*",
        "src/App.tsx",
        "src/main.tsx",
      ],
    },
  },
});
