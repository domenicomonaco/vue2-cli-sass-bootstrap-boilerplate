import Vue from "vue";
import App from "./App.vue";
import "bootstrap"; //IMPORTA JS, non il CSS

// import 'bootstrap/dist/css/bootstrap.min.css'; SE DA GIA COMPILATO

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
