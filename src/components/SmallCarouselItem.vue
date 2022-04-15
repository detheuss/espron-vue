<template>
  <div>
    <img :src="imgSrc" :alt="imgAlt" />
    <div class="case-study-overlay">
      <p class="mb-3 mr-3">"{{ text }}"</p>
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    isLargeViewport() {
      if (window.innerWidth >= 767) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
img {
  filter: opacity(1) contrast(0.5);
  width: 360px;
  height: 270px;
  border: none;
}
.case-study-overlay {
  position: absolute;
  top: 32px;
  left: 16px;
  padding: 16px;
  color: white;
}
p {
  font-size: 18px;
  font-style: italic;
}
</style>
