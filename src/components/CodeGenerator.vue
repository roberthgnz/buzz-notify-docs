<template>
  <form>
    <o-field label="Title">
      <o-input
        id="title"
        v-model="generatedCode.title"
        placeholder="Toast notification title"
        required
      />
    </o-field>

    <o-field label="HTML">
      <textarea id="html" v-model="generatedCode.html" rows="10"></textarea>
    </o-field>

    <!-- <o-field label="Type">
      <div v-for="type in types" :key="type" class="input-group">
        <label :for="type">{{ type }}</label>
        <o-radio :id="type" type="radio" name="type" @change="handleChange" />
      </div>
    </o-field> -->

    <o-field label="Position">
      <template v-for="position in positions" :key="position">
        <label :for="position"></label>
        <o-radio
          :id="position"
          v-model="generatedCode.position"
          :native-value="position"
          name="position"
          >{{ position }}</o-radio
        >
      </template>
    </o-field>
    <!-- 
    <o-field label="Transition">
      <div
        v-for="transition in transitions"
        :key="transition"
        class="input-group"
      >
        <label :for="transition">{{ transition }}</label>
        <o-radio
          :id="transition"
          v-model="generatedCode.transition"
          name="transition"
        />
      </div>
    </o-field> -->

    <o-field label="Duration (sec)">
      <o-input
        id="duration"
        v-model="generatedCode.duration"
        type="range"
        value="3"
        minlength="-1"
        max="60"
        step="1"
      />
    </o-field>
  </form>
</template>

<script>
import { reactive } from "vue";
// import sanitizeHtml from "sanitize-html";

export default {
  emits: ["update:code"],
  setup() {
    const generatedCode = reactive({});

    const types = ["success", "warning", "danger"];

    const positions = [
      "top left",
      "top center",
      "top right",
      "bottom left",
      "bottom center",
      "bottom right",
    ];

    const transitions = ["fade", "bounce", "slide-blurred"];

    return {
      types,
      positions,
      transitions,
      generatedCode,
    };
  },
  watch: {
    generatedCode: {
      handler(value) {
        this.$emit("update:code", value);
      },
      deep: true,
    },
  },
};
</script>
