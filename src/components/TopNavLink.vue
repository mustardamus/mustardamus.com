<template>
  <g-link :to="to">{{ title }}</g-link>
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
