import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      coverage: {
        all: true,
        enabled: true,
        provider: "v8",
        reporter: ["text", "json", "html"],
      },
      environment: "jsdom",
      cache: false,
      mockReset: true,
      isolate: true,
      clearMocks: true,
    },
  }),
);
