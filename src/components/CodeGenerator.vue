<template>
  <form>
    <FormGroup label="Title">
      <input
        id="title"
        v-model="generatedCode.title"
        type="text"
        name="title"
        placeholder="Toast notification title"
        required
      />
    </FormGroup>
    <FormGroup label="HTML">
      <textarea
        id="html"
        v-model="generatedCode.html"
        placeholder="<span>Hello!!</span>"
        name="html"
        cols="30"
        rows="10"
      ></textarea>
    </FormGroup>
    <FormGroup label="Type">
      <InputGroup :inline="true">
        <div v-for="type in types" :key="type" class="field">
          <input
            :id="type"
            v-model="generatedCode.type"
            :value="type"
            type="radio"
            name="type"
          />
          <label :for="type">{{ type }}</label>
        </div>
      </InputGroup>
    </FormGroup>
    <FormGroup label="Position">
      <InputGroup :inline="true">
        <div v-for="position in positions" :key="position" class="field">
          <input
            :id="position"
            v-model="generatedCode.position"
            :value="position"
            type="radio"
            name="position"
          />
          <label :for="position">{{ position }}</label>
        </div>
      </InputGroup>
    </FormGroup>
    <FormGroup label="Transition">
      <InputGroup :inline="true">
        <div v-for="transition in transitions" :key="transition" class="field">
          <input
            :id="transition"
            v-model="generatedCode.transition"
            :value="transition"
            type="radio"
            name="transition"
          />
          <label :for="transition">{{ transition }}</label>
        </div>
      </InputGroup>
    </FormGroup>
    <FormGroup label="Duration">
      <input
        id="duration"
        v-model="generatedCode.duration"
        type="range"
        name="duration"
        minlength="-1"
        max="60000"
        step="1000"
      />
    </FormGroup>
  </form>
</template>

<script>
import FormGroup from "./ui/FormGroup.vue";
import InputGroup from "./ui/InputGroup.vue";

export default {
  components: {
    FormGroup,
    InputGroup,
  },
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
      "top-left",
      "top-center",
      "top-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
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
