import Vue from "vue";
import VueRouter from "vue-router";
import KerberosLogin from "../components/KerberosLogin.vue";
import Login from "../components/Login.vue";
import GmailLogin from "../components/GmailLogin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Login
  },
  {
    path: "/KerberosLogin",
    name: "KerberosLogin",
    component: KerberosLogin
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },

  {
    path: "/GmailLogin",
    name: "GmailLogin",
    component: GmailLogin
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
