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
      <template v-for="type in types" :key="type">
        <label :for="type">{{ type }}</label>
        <input type="radio" name="type" :id="type" @change="handleChange" />
      </template>
    </div>
    <div class="form-group">
      <label class="label">Position</label>
      <template v-for="position in positions" :key="position">
        <label :for="position">{{ position }}</label>
        <input
          type="radio"
          name="position"
          :id="position"
          @change="handleChange"
        />
      </template>
    </div>
    <div class="form-group">
      <label class="label">Transition</label>
      <template v-for="transition in transitions" :key="transition">
        <label :for="transition">{{ transition }}</label>
        <input
          type="radio"
          name="transition"
          :id="transition"
          @change="handleChange"
        />
      </template>
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
      generatedCode[key] = RADIO_INPUTS.includes(name) ? id : value;
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