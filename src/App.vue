<template>
  <Nav />

  <div class="row">
    <div class="col">
      <CodeGenerator :code="generatedCode" />
      <BButton @click="createNotification">Create Notification</BButton>
    </div>
    <div class="col">
      <CodePreview :code="generatedCode" />
    </div>
  </div>

  <div id="notify"></div>
</template>

<script>
import { Notify } from "@reliutg/buzz-notify";
import "@reliutg/buzz-notify/dist/buzz-notify.css";

import Nav from "./components/Nav.vue";
import CodeGenerator from "./components/CodeGenerator.vue";
import CodePreview from "./components/CodePreview.vue";

import BButton from "./components/ui/BButton.vue";

export default {
  components: {
    Nav,
    CodeGenerator,
    CodePreview,
    BButton,
  },
  data() {
    return {
      count: 0,
      generatedCode: {
        title: "My awesome site",
        type: "success",
        position: "top-right",
        transition: "fade",
        duration: 3000,
      },
    };
  },
  methods: {
    createNotification() {
      Notify(this.generatedCode);
      this.count++;
    },
  },
};
</script>

<style>
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
</style>
