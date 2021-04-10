import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import router from "./router";
import { auth } from "@/firebase/init";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

var app = null;
auth.onAuthStateChanged(async () => {
  if (!app) {
    await store.dispatch("getUser");
    new Vue({
      store,
      router,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
