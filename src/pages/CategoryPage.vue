<template>
  <div>{{ categoryName }}</div>
</template>

<script>
export default {
  computed: {
    categoryName() {
      return this.$route.params.name;
    },
  },
};
</script>