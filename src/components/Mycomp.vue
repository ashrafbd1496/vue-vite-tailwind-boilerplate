<script>
export default {
  name: "Mycomp",
  data() {
    return {
      logoImg: "./src/assets/vue.svg",
    };
  },
};
</script>
<template>
  <div>
    <img :class="{ logoImg }" v-bind:src="logoImg" alt="logo" />
  </div>
</template>
<style>
.logoImg {
  width: 200px;
  height: auto;
}
</style>
