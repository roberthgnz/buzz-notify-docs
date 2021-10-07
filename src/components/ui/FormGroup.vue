<template>
  <div class="form-group">
    <label class="form-group__label">{{ label }}</label>
    <div class="form-group__input">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
.form-group {
  margin-block-end: 1rem;
}
.form-group__label {
  font-weight: bold;
  display: inline-block;
  margin-block-end: 0.75rem;
  color: var(--primary-color);
}
</style>
