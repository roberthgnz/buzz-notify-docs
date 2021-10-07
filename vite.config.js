import vue from "@vitejs/plugin-vue";
import eslintPlugin from "vite-plugin-eslint";

export default {
  plugins: [vue(), eslintPlugin()],
};
