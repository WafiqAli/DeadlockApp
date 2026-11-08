import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
  input: "https://localhost:7123/openapi/v1.json",
  output: "src/api/generated",
  plugins: ["@hey-api/typescript"],
});
