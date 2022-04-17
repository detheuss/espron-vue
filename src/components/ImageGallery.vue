<template>
  <div>
    <h3>Gallery</h3>
    <VuePictureSwipe :items="images" />
  </div>
</template>

<script>
  import VuePictureSwipe from "vue-picture-swipe";

  export default {
    components: { VuePictureSwipe },
    props: {
      images: {
        type: Array,
        required: true,
        default() {
          return [];
        },
      },
    },
  };
</script>

<style scoped>
[itemprop='thumbnail'] {
    width: 160px !important;
    height: 120px;
    border: 1px solid tomato;
}
</style>