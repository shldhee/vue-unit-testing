<template>
  <div class="icon">
    Icon Test Hi
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Icon Lee DUCKHEE",
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
