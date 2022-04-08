<template>
  <VueSlickCarousel v-bind="settings">
    <div class="carousel-item" />
    <div>HELLO WORLD</div>
    <div>HELLO WORLD</div>
    <div>HELLO WORLD</div>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      settings: {
        dots: true,
        draggable: true,
      },
    };
  },
};
</script>
<style scoped>
/* .carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid tomato;
} */
.carousel-item {
  height: 90vh;
  background-image: url("./assets/images/carousel-images/carousel-image-1.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-size: cover
}
</style>
