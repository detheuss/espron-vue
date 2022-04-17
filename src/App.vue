<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />

  </div>
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";
  export default {
    components: {
      Navbar,
      Footer,
    },
  };
</script>
<style>
  #app {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
    color: #595959;
    margin-bottom: 100px;
  }
  .content {
    margin-top: 70px;
  }
</style>
