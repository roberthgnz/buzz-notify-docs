<template>
  <form>
    <div class="form-group">
      <label for="title" class="label">Title</label>
      <input
        id="title"
        v-model="generatedCode.title"
        type="text"
        name="title"
        placeholder="Toast notification title"
        required
      />
    </div>
    <div class="form-group">
      <label for="html" class="label">HTML</label>
      <textarea
        id="html"
        v-model="generatedCode.html"
        name="html"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="form-group">
      <label class="label">Type</label>
      <div v-for="type in types" :key="type" class="input-group">
        <label :for="type">{{ type }}</label>
        <input
          :id="type"
          v-model="generatedCode.type"
          :value="type"
          type="radio"
          name="type"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="label">Position</label>
      <div v-for="position in positions" :key="position" class="input-group">
        <label :for="position">{{ position }}</label>
        <input
          :id="position"
          v-model="generatedCode.position"
          :value="position"
          type="radio"
          name="position"
        />
      </div>
    </div>
    <div class="form-group">
      <label class="label">Transition</label>
      <div
        v-for="transition in transitions"
        :key="transition"
        class="input-group"
      >
        <label :for="transition">{{ transition }}</label>
        <input
          :id="transition"
          v-model="generatedCode.transition"
          :value="transition"
          type="radio"
          name="transition"
        />
      </div>
    </div>
    <div class="form-group">
      <label for="duration">Duration (sec)</label>
      <input
        id="duration"
        v-model="generatedCode.duration"
        type="range"
        name="duration"
        minlength="-1"
        max="60000"
        step="1000"
      />
    </div>
  </form>
</template>

<script>
export default {
  model: {
    prop: "code",
    event: "change",
  },
  props: {
    code: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
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
      generatedCode: props.code,
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
