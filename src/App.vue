<template>
    <div id="app">
        <Navbar />
        <VueSlickCarousel v-bind="settings">
            <div class="carousel-item-1" />
            <div class="carousel-item-2" />
            <div class="carousel-item-3" />
            <div class="carousel-item-4" />
        </VueSlickCarousel>
        <div class="carousel-overlay">
            <b-container>
                <div class="carousel-overlay-motto">
                    <p class="h5">Time is ticking -</p>
                    <p class="h2">Our Design Stays.</p>
                </div>
            </b-container>
        </div>
        <div>
            <b-container>
                <div class="text-block">
                    <h3>About us -</h3>
                    <p>
                        We are a growing company operating in the construction
                        field mainly focusing on tailor-made interior designs.
                        We always look at the request from our client's
                        perspective and strive to surpass their expectations -
                        whether it is a smaller apartment, house or even a
                        commercial space. Since the beginning we have helped
                        many of our clients to change the space where they
                        merely existed, into a place where they were able to
                        relax and enjoy their free time. We took it as our duty
                        to offer our services globally, hence everyone has the
                        opportunity to enjoy our timeless designs.
                    </p>
                </div>
                <div class="text-block">
                    <h3>How It Works -</h3>
                    <div class="how-it-works-items">
                        <div class="how-it-works-item">
                            <div class="how-it-works-item-heading">
                                <p class="h4">1</p>
                            </div>
                            <p class="mt-3">
                                First step is to provide a floor plan sketch of
                                the area (apartment, house, commercial space) to
                                us. A preliminary quote will be created based on
                                your documents. After agreeing to the quotation
                                and paying the advance invoice, we will organize
                                an online meeting, where you can further define
                                your requirements. You will receive multiple
                                designs for approval (we offer a 2D layout
                                plan).
                            </p>
                        </div>
                        <div class="how-it-works-item">
                            <div class="how-it-works-item-heading">
                                <p class="h4">2</p>
                            </div>
                            <p class="mt-3">
                                Once the layout design has been agreed upon, we
                                start designing the visuals. We work solely with
                                the available elements in the designs. The
                                visualizations are made realistic and with high
                                attention to detail, so you are not only able to
                                imagine your future interior, but also
                                experience it.
                            </p>
                        </div>
                        <div class="how-it-works-item">
                            <div class="how-it-works-item-heading">
                                <p class="h4">3</p>
                            </div>
                            <p class="mt-3">
                                At this stage, we prepare documents for
                                implementation, so that the construction company
                                has all the instructions to make your dream
                                interior. Each customer will be offered
                                tailor-made drawings to choose from, therefore
                                you only pay for what you need.
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
import Navbar from "./components/Navbar.vue";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
    components: {
        VueSlickCarousel,
        Navbar,
    },
    data() {
        return {
            settings: {
                dots: true,
                arrows: false,
                draggable: true,
                autoplay: true,
                autoplaySpeed: 3000,
                fade: true,
                infinite: true,
            },
        };
    },
};
</script>
<style scoped>
#app {
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
.carousel-overlay {
    position: absolute;
    top: 0;
    margin: 0;
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    color: #595959;
}
.carousel-overlay-motto {
    background-color: rgba(255, 255, 255, 0.8);
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
    border: 1px solid #595959;
    padding: 30px;
    margin: 15px;
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
    height: 90vh;
    background-image: url("./assets/images/carousel-images/carousel-image-1.jpg");
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    background-size: cover;
    filter: brightness(0.6);
}
.carousel-item-2 {
    height: 90vh;
    background-image: url("./assets/images/carousel-images/carousel-image-2.jpg");
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    background-size: cover;
}
.carousel-item-3 {
    height: 90vh;
    background-image: url("./assets/images/carousel-images/carousel-image-3.jpg");
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    background-size: cover;
}
.carousel-item-4 {
    height: 90vh;
    background-image: url("./assets/images/carousel-images/carousel-image-4.jpg");
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    background-size: cover;
}
</style>
