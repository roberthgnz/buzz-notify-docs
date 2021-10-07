<template>
  <pre>{{code}}</pre>
</template>

<script>
export default {
  props: {
    code: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>