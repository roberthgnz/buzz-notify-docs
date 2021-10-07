<template>
  <form>
    <div class="form-group">
      <label for="title" class="label">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Toast notification title"
        @change="handleChange"
        required
      />
    </div>
    <div class="form-group">
      <label for="html" class="label">HTML</label>
      <textarea
        name="html"
        id="html"
        cols="30"
        rows="10"
        @change="handleChange"
      ></textarea>
    </div>
    <div class="form-group">
      <label class="label">Type</label>
      <div v-for="type in types" :key="type" class="input-group">
        <label :for="type">{{ type }}</label>
        <input type="radio" name="type" :id="type" @change="handleChange" />
      </div>
    </div>
    <div class="form-group">
      <label class="label">Position</label>
      <div class="input-group" v-for="position in positions" :key="position">
        <label :for="position">{{ position }}</label>
        <input
          type="radio"
          name="position"
          :id="position"
          @change="handleChange"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="label">Transition</label>
      <div
        class="input-group"
        v-for="transition in transitions"
        :key="transition"
      >
        <label :for="transition">{{ transition }}</label>
        <input
          type="radio"
          name="transition"
          :id="transition"
          @change="handleChange"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="duration">Duration (sec)</label>
      <input
        type="range"
        name="duration"
        id="duration"
        value="3"
        minlength="-1"
        max="60"
        step="1"
        @change="handleChange"
      />
    </div>
  </form>
</template>

<script>
import { reactive } from "vue";
import sanitizeHtml from "sanitize-html";

export default {
  emits: ["update:code"],
  setup(_, { emit }) {
    const generatedCode = reactive({});

    const types = ["success", "info", "warning", "error"];

    const positions = [
      "top left",
      "top center",
      "top right",
      "bottom left",
      "bottom center",
      "bottom right",
    ];

    const transitions = ["fade", "bounce", "slide-blurred"];

    const RADIO_INPUTS = ["type", "position", "transition"];

    const handleChange = ({ target }) => {
      const { id, name, value } = target;
      const key = RADIO_INPUTS.includes(name) ? name : id;
      if (name === "html") {
        generatedCode[key] = sanitizeHtml(value);
      } else if (name === "duration") {
        // convert to milliseconds
        generatedCode[key] = value * 1000;
      } else generatedCode[key] = RADIO_INPUTS.includes(name) ? id : value;
      emit("update:code", generatedCode);
    };

    return {
      types,
      positions,
      transitions,
      handleChange,
    };
  },
};
</script>

<style scoped>
.form-group {
  display: flex;
  margin-bottom: 1rem;
}
.form-group .label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  margin-right: 1rem;
}
.form-group input {
  flex: 1;
  margin-left: 1rem;
}
.input-group {
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  text-align: center;
}
</style>