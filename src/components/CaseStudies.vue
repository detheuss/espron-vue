<template>
  <b-container class="content">
    <h5>Get inspired by our latest</h5>
    <h1>Case Studies</h1>
    <div class="case-studies-grid">
      <b-card-group deck>
        <router-link
          v-for="item in caseStudies"
          :key="item.id"
          :to="{name: 'CaseStudy', params: {id: item.id}}"
        >
          <b-card
            :key="item.id"
            overlay
            :title="item.title"
            :img-src="item.thumbImgSrc"
            :img-alt="item.title"
            img-top
            class="case-study-card"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </router-link>
      </b-card-group>
    </div>
  </b-container>
</template>

<script>
  import caseStudies from "../data/caseStudies.js";
  export default {
    data() {
      return {
        caseStudies: caseStudies,
      };
    },
  };
</script>

<style scoped>
  .case-studies-grid {
    display: grid;
  }
  .case-study-card {
    width: 340px;
    height: auto;
    color: white;
    margin: 0 !important;
    padding: 15px;
    border: none;
    font-size: 120%;
  }
  .case-study-card:hover {
    color: white;
  }
  .case-study-card img {
    filter: contrast(0.7) opacity(0.8);;
  }
  .case-study-card:hover img {
    filter: contrast(0.7) opacity(1);
  }
  .card-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
</style>
