import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

import EcommerceApi from "./services/ecommerce-api";

Vue.config.productionTip = false;

Vue.prototype.$service = EcommerceApi;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
