<template>
  <Nav />

  <div class="row">
    <div class="col">
      <CodeGenerator v-model:code="generatedCode" />
    </div>
    <div class="col">
      <CodePreview :code="generatedCode" />
    </div>
  </div>

  <div id="notify"></div>
</template>

<script>
import Notify from "@reliutg/buzz-notify";
import "@reliutg/buzz-notify/dist/buzz-notify.css";

import Nav from "./components/Nav.vue";
import CodeGenerator from "./components/CodeGenerator.vue";
import CodePreview from "./components/CodePreview.vue";

export default {
  components: {
    Nav,
    CodeGenerator,
    CodePreview,
  },
  name: "App",
  data() {
    return {
      count: 0,
      generatedCode: {},
    };
  },
  methods: {
    createNotification({ currentTarget }) {
      const options = Object.assign({}, currentTarget.dataset);
      Notify({
        ...options,
        title: `Notification ${this.count}`,
      });
      this.count++;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:400,400i,700");

*,
*::before,
*::after {
  box-sizing: border-box;
}

.row {
  width: 80%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding: 1rem;
}

body {
  margin: 0;
  font-family: Roboto, sans-serif;
}

.dark body {
  background-color: #333;
  color: #fff;
}
</style>
