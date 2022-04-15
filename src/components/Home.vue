<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div class="carousel-item-1" />
      <div class="carousel-item-2" />
      <div class="carousel-item-3" />
      <div class="carousel-item-4" />
      <div class="carousel-item-5" />
      <div class="carousel-item-6" />
    </VueSlickCarousel>
    <div class="carousel-overlay">
      <b-container>
        <div class="carousel-overlay-motto">
          <p class="h5 mt-3">Time is ticking -</p>
          <p class="h2">Our Design Stays.</p>
        </div>
      </b-container>
    </div>
    <div>
      <b-container>
        <div class="text-block">
          <h3>About us -</h3>
          <p>
            We are a growing company operating in the construction field mainly focusing on
            tailor-made interior designs. We always look at the request from our client's
            perspective and strive to surpass their expectations - whether it is a smaller
            apartment, house or even a commercial space. Since the beginning we have helped many of
            our clients to change the space where they merely existed, into a place where they were
            able to relax and enjoy their free time. We took it as our duty to offer our services
            globally, hence everyone has the opportunity to enjoy our timeless designs.
          </p>
        </div>
        <div class="text-block pb-0">
          <h5>Case Study Picks -</h5>
          <h2>Get Inspired</h2>
        </div>
        <carousel-3d :controls-visible="true" :perspective="20">
          <slide
            v-for="item in caseStudies"
            :key="item.id"
            :index="item.id"
            class="small-carousel-item"
          >
            <CaseStudy
              :imgSrc="item.imgSrc"
              :imgAlt="item.imgAlt"
              :title="item.title"
              :text="item.text"
            />
          </slide>
        </carousel-3d>
        <div class="text-block pb-0 mb-0 mt-5">
          <h5>Our 3 Step Process -</h5>
          <h3>How It Works</h3>
          <div class="how-it-works-items">
            <div class="how-it-works-item">
              <b-icon class="how-it-works-icon" icon="people-fill" scale="1" />
              <h4 :style="{ textAlign: 'left' }">First Meeting & Designs</h4>
              <p class="mt-3">
                First step is to provide a floor plan sketch of the area (apartment, house,
                commercial space) to us. A preliminary quote will be created based on your
                documents. After agreeing to the quotation and paying the advance invoice, we will
                organize an online meeting, where you can further define your requirements. You will
                receive multiple designs for approval (we offer a 2D layout plan).
              </p>
            </div>
            <div class="how-it-works-item">
              <b-icon class="how-it-works-icon" icon="eye-fill" scale="1" />
              <h4 :style="{ textAlign: 'left' }">Detailed Visuals</h4>
              <p class="mt-3">
                Once the layout design has been agreed upon, we start designing the visuals. We work
                solely with the available elements in the designs. The visualizations are made
                realistic and with high attention to detail, so you are not only able to imagine
                your future interior, but also experience it.
              </p>
            </div>
            <div class="how-it-works-item">
              <b-icon class="how-it-works-icon" icon="folder-fill" scale="1" />
              <h4 :style="{ textAlign: 'left' }">Drafting Documentation</h4>
              <p class="mt-3">
                At this stage, we prepare documents for implementation, so that the construction
                company has all the instructions to make your dream interior. Each customer will be
                offered tailor-made drawings to choose from, therefore you only pay for what you
                need.
              </p>
            </div>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import CaseStudy from "./SmallCarouselItem.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    VueSlickCarousel,
    CaseStudy,
    Carousel3d,
    Slide,
  },
  data() {
    return {
      settings: {
        dots: true,
        arrows: false,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        infinite: true,
      },
      caseStudies: [
        {
          id: 0,
          imgSrc: "https://i.imgur.com/AdzY13Q.jpg",
          imgAlt: "Family House",
          title: "Family House",
          subtitle: "#renovation",
          text: "An old thing becomes new if you detach it from what usually surrounds it.",
        },
        {
          id: 1,
          imgSrc: "https://i.imgur.com/LPOc4Ql.jpg",
          imgAlt: "Great Room",
          title: "Great Room",
          subtitle: "#open-spaces",
          text: "Nothing tops going home to family, eating good food and relaxing in an open space.",
        },
        {
          id: 2,
          imgSrc: "https://i.imgur.com/ymtJeb6.jpg",
          imgAlt: "Kitchen & Bathroom",
          title: "Kitchen & Bathroom",
          subtitle: "#egyptian-blue",
          text: "Color is the place where the mind meets the space.",
        },
        {
          id: 3,
          imgSrc: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
          imgAlt: "Demo Case Study",
          title: "Demo Case Study",
          subtitle: "#demo",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        },
        {
          id: 4,
          imgSrc: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
          imgAlt: "Demo Case Study",
          title: "Demo Case Study",
          subtitle: "#demo",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        },
        {
          id: 5,
          imgSrc: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_960_720.jpg",
          imgAlt: "Demo Case Study",
          title: "Demo Case Study",
          subtitle: "#demo",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.carousel-overlay {
  position: absolute;
  top: 0;
  margin: 0;
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
.carousel-overlay-explore {
  background-color: rgba(255, 255, 255, 0.8);
  /* border: 2px solid white; */
  padding: 15px;
  margin-bottom: 15px;
  /* border: 2px solid white; */
}
.carousel-overlay-explore-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.carousel-overlay-explore-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #595959;
  color: none;
  border-radius: 0;
  height: 30vh;
}
.carousel-overlay-motto {
  background-color: rgba(255, 255, 255, 1);
  /* border: 2px solid white; */
  padding: 15px;
  text-align: center;
  border: 2px solid white;
  border-bottom: none;
}
.text-block {
  display: flex;
  flex-direction: column;
  text-align: justify;
  padding: 30px;
  margin-top: 15px;
}
.how-it-works-items {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 15px;
}
@media (max-width: 990px) {
  .how-it-works-items {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
  }
}
.how-it-works-item {
  width: 300px;
  padding: 15px;
  /* margin: 15px; */
}
.how-it-works-icon {
  color: beige;
  margin-top: 15px;
  /* padding: px; */
  font-size: 70px;
}
@media (max-width: 990px) {
  .how-it-works-item {
    width: 70vw !important;
  }
}
.how-it-works-item-heading {
  text-align: center;
}
.carousel-item-1 {
  height: 70vh;
  background-image: url("../assets/Logo/logo-trans.png");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-size: 20vw auto;
}
@media (max-width: 990px) {
  .carousel-item-1 {
    background-size: 300px;
  }
}
.carousel-item-2 {
  height: 70vh;
  background-image: url("../assets/images/flat1.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-size: cover;
}
.carousel-item-3 {
  height: 70vh;
  background-image: url("../assets/images/flat2.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-size: cover;
}
.carousel-item-4 {
  height: 70vh;
  background-image: url("../assets/images/flat3.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-size: cover;
}
.carousel-item-5 {
  height: 70vh;
  background-image: url("../assets/images/flat4.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-size: cover;
}
.carousel-item-6 {
  height: 70vh;
  background-image: url("../assets/images/flat5.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center;
  background-size: cover;
  padding: 30px;
}
.small-carousel-item {
  border: none !important;
  background-color: white;
}
</style>
