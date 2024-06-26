import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        isolate: true,
        coverage: {
            provider: "v8",
            include: ["src/*.test.ts"],
            exclude: ["scripts", "node_modules", "dist"]
        }
    },
});
