import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import VeeValidate from "vee-validate";
import VueTheMask from "vue-the-mask";

Vue.use(VueTheMask);
// Vue.use(VeeValidate);
Vue.use(require("vue-moment"));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
