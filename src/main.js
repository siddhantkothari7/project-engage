import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
// import * as firebase from "firebase/app";
import store from "./store";

Vue.config.productionTip = false;
// let app = null;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// firebase.auth().onAuthStateChanged(async () => {
//   if (!app) {
//     await store.dispatch("getUser");
//     new Vue({
//       router,
//       store,
//       render: h => h(App)
//     }).$mount("#app");
//   }
// });
