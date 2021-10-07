<template>
  <div class="code-preview">
    <code v-html="preview"></code>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default {
  props: {
    code: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    preview() {
      const text = `Notify(${JSON.stringify(this.code, null, 2)})`;
      return hljs.highlight(text, { language: "json" }).value;
    },
  },
};
</script>

<style scoped>
.code-preview {
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #eaeaea;
}
.dark .code-preview {
  border-color: #222;
}
</style>
