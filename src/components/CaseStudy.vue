<template>
  <div class="content">
    <b-container>
      <div
        v-if="caseStudy"
        class="case-study-content"
      >
        <p>{{caseStudy.quote}}</p>
        <h1>{{caseStudy.title}}</h1>
        <p>{{caseStudy.text}}</p>
        <ImageGallery :images="caseStudy.gallery" />

      </div>
      <div v-else>
        <h5>We are sorry -</h5>
        <h1>This Case Study was Not Found</h1>
        <p>Browse other <router-link to="/case-studies">Case Studies</router-link> or
          return to <router-link to="/">Home Page</router-link>.
        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
  import caseStudies from "../data/caseStudies.js";
  import ImageGallery from "./ImageGallery.vue";
  export default {
    components: {
      ImageGallery,
    },
    data() {
      return {
        caseStudies: caseStudies,
      };
    },
    computed: {
      caseStudy() {
        let caseStudy = this.caseStudies.find(
          (item) => item.id == this.$route.params.id
        );
        return caseStudy;
      },
    },
  };
</script>

<style scoped>
  .title-image {
    width: 100%;
  }
</style>