import { defineConfig } from "windicss/helpers";

export default defineConfig({
  /* configurations... */
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
});
