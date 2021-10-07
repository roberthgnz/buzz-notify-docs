<template>
  <button :class="['button', variant]"><slot /></button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style scoped>
.button {
  display: inline-block;
  font-weight: 400;
  padding-block: 0.5rem;
  padding-inline: 0.75rem;
  text-align: center;
  border: none;
  border-radius: 4px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.button.primary {
  color: #fff;
  background-color: var(--primary-color);
}
.button.primary:hover {
  background-color: var(--primary-color-dark);
}
</style>
