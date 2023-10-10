<template>
  <div class="code-preview">
    <pre v-html="preview"></pre>
    <button @click="copyToClipboard" :disabled="isCopied">
      <span v-if="!isCopied" class="far fa-copy"> Copy code</span>
      <i v-else>Copied!</i>
    </button>
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

export default {
  data() {
    return {
      isCopied: false,
    };
  },
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
  methods: {
    copyToClipboard() {
      const el = document.createElement("textarea");
      el.value = `Notify(${JSON.stringify(this.code, null, 2)})`;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      // Update the state to show "Copied"
      this.isCopied = true;
      // Reset after a short delay (e.g., 2 seconds)
      setTimeout(() => {
        this.isCopied = false;
      }, 2000);
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

button {
  background-color: #4a4a4a; /* Dark background color */
  color: #ffffff; /* Text color */
  padding: 6px 12px; /* Adjusted padding for a smaller button */
  font-size: 14px; /* Adjusted font size */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition on hover */
}

button:hover {
  background-color: #333; /* Darker background color on hover */
}
</style>
