<template>
  <div class="box">
    Box Test
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Lee DUCKHEE",
      age: 2
    };
  },
  computed: {
    koreanAge() {
      return this.age + 1;
    }
  }
};
</script>

<style lang="scss" scoped></style>
