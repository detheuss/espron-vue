<template>
  <div>
    <router-link :to="{path: `/case-study/${item.id}` }">
      <img
        :src="item.thumbImgSrc"
        :alt="item.title"
      />
      <div class="case-study-overlay">
        <p class="mb-3 mr-3">"{{ item.quote }}"</p>
        <h1>{{ item.title }}</h1>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true,
        default() {
          return {};
        },
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
    width: 100%;
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
