<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style scoped>
#app {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: #595959;
}
</style>
