<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return {
        "input-group": true,
        "input-group--inline": this.inline,
      };
    },
  },
};
</script>

<style>
.input-group {
  display: flex;
  flex-direction: column;
}
.input-group--inline {
  flex-direction: row;
}
.input-group--inline .field {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}
</style>
