<template>
  <g-link :to="to" class="block text-center p-3">{{ title }}</g-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: "/",
    },

    title: {
      type: String,
      default: "Home",
    },
  },
};
</script>
