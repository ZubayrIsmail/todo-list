import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/done",
    name: "Done",
    component: () =>
        import(/* webpackChunkName: "done" */ "../views/Done.vue"),
  },
  {
    path: "/details/:id",
    name: "TodoDetails",
    component: () =>
        import(/* webpackChunkName: "TodoDetails" */"../views/TodoDetails"),
  },
];

const router = new VueRouter({
  mode:'history',
  routes,
});

export default router;
