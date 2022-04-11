<template>
  <div>
    <b-card
      v-if="isLargeViewport"
      text-variant="black"
      :img-src="imgSrc"
      :img-alt="imgAlt"
      :title="title"
      class="case-study"
    >
      <b-card-text>
        {{ text }}
      </b-card-text>
      <b-button href="#" class="case-study-button">Read more...</b-button>
    </b-card>
    <b-card
      v-if="!isLargeViewport"
      overlay
      text-variant="black"
      :img-src="imgSrc"
      :img-alt="imgAlt"
      :title="title"
      :sub-title="subtitle"
      class="case-study-mobile"
    >
      <b-card-text class="case-study-text mt-auto">
        "{{ text }}"
      </b-card-text>
    </b-card>
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
.case-study {
  border: none;
  margin-right: 15px;

}
.case-study img {
  width: 330px;
  height: 220px;
}
.card-body {
  max-width: 290px;
  padding: 5px;
  margin-top: 15px;
}
.case-study-button {
  border: 0.5px gray;
  color: #393939;
  background-color: white;
  padding: 0;
}
.case-study-button:hover {
  border: none;
  color: #8f8052;
  background-color: white;
  padding: 0;
}

.case-study-mobile {
  border: none;
  padding: 15px;
}
.case-study-mobile .card-body {
  padding: 15px;
  margin-top: 15px;
}
.case-study-mobile img {
  filter:opacity(0.5) contrast(0.5) brightness(1.2);
  width: 330px;
  height: 220px;
}
.case-study-mobile .card-title {
    /* color: white; */
    margin-bottom: 30px;
    text-align: right;
}
.case-study-mobile .card-text {
    /* color: black; */
    font-style: italic;
    font-family: 'Times New Roman', Times, serif;
    /* font-weight: bold; */
    font-size: 1.1em;
    text-align: right;
}
</style>
