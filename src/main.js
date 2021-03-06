import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Carousel3d from "vue-carousel-3d";
import VuePictureSwipe from "vue-picture-swipe";
import VueRouter from "vue-router";
import routes from "./routes.js";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Carousel3d);
Vue.use(VueRouter);
Vue.component("vue-picture-swipe", VuePictureSwipe);

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth"
      };
    }
  },
});

// eslint-disable-next-line no-unused-vars

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
