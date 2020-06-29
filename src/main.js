import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store/";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import VueResource from "vue-resource";

Vue.config.productionTip = false;
Vue.use(Vuesax);
Vue.use(VueResource);

Vue.http.options.root = "https://vue-stock-trader-92db3.firebaseio.com/";
Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
