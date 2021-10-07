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

nav {
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}

nav ul {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

@media (min-width: 700px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
  }
  nav ul {
    width: 10%;
  }
}

nav ul li {
  display: inline-block;
  color: #202124;
}

nav ul li a {
  color: #202124;
}

.dark {
  background-color: #202124;
  color: #fff;
}

.dark nav ul li a {
  color: #fff;
}

.buttons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.btn {
  color: hsl(0 0% 96%);
  font-size: 20px;
  margin: 14px;
  font-family: inherit;
  padding: 14px 28px;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  box-shadow: 0 4px 6px -1px hsl(0 0% 0% / 0.07),
    0 2px 4px -1px hsl(0 0% 0% / 0.07);
}

.btn:active {
  transform: scale(0.96);
}

.btn--success {
  color: #155724;
  background-color: #d4edda;
  border-color: #c3e6cb;
}

.btn--danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
.btn--warning {
  color: #856404;
  background-color: #fff3cd;
  border-color: #ffeeba;
}
</style>
