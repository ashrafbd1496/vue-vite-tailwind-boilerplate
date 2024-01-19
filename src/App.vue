<script>

import Mycomp from "./components/Mycomp.vue";

export default {
  name: "App",
  components: {
    Mycomp,
  },
};
</script>

<template>
  <div class="header">
    <h2>Web development with real vue js projects</h2>
  </div>
  <Mycomp />
</template>

<style>
.header {
  background-color: teal;
  padding: 1px 20px;
  color: #fff;
  border-radius: 10px;
}
</style>
