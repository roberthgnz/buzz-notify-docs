<template>
  <code v-html="preview"></code>
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