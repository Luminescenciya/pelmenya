import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/paymentInfo",
    name: "PaymentInfo",
    component: () => import("../views/PaymentInfo.vue"),
  },
  {
    path: "/clearCache",
    name: "clearCache",
    beforeEnter: (to, from, next) => {
      store.commit("resetState");
      return next({ name: "Home" });
    },
  },
  {
    path: "/loyalty",
    name: "Loyalty",
    component: () => import("../views/loyaltyProgram.vue"),
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: () => import("../views/Privacy.vue"),
  },
  {
    path: "/menu/:groupId",
    name: "Menu",
    component: () => import("../views/Menu.vue"),
  },
  {
    path: "/howto/:groupId",
    name: "howTo",
    component: () => import("../views/HowToCook.vue"),
  },
  {
    path: "/post/:postId",
    name: "PostPage",
    component: () => import("../views/PostPage.vue"),
  },
  { path: "*", redirect: { name: "Home" } },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from) {
    if (from.path !== to.path) {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
