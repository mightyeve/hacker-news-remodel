import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "hackerNews",
    component: () =>
      import(
        /*webpackChunkName: "hackerNews" */ "../views/NavigationBarLinks/HackerNewsPage.vue"
      ),
  },
  {
    path: "/new",
    name: "new",
    component: () =>
      import(
        /*webpackChunkName: "new" */ "../views/NavigationBarLinks/NewPage.vue"
      ),
  },
  {
    path: "/past",
    name: "past",
    component: () =>
      import(
        /*webpackChunkName: "past" */ "../views/NavigationBarLinks/PastPage.vue"
      ),
  },
  {
    path: "/comments",
    name: "comments",
    component: () =>
      import(
        /*webpackChunkName: "comments" */ "../views/NavigationBarLinks/CommentsPage.vue"
      ),
  },
  {
    path: "/ask",
    name: "ask",
    component: () =>
      import(
        /*webpackChunkName: "ask" */ "../views/NavigationBarLinks/AskPage.vue"
      ),
  },
  {
    path: "/show",
    name: "show",
    component: () =>
      import(
        /*webpackChunkName: "show" */ "../views/NavigationBarLinks/ShowPage.vue"
      ),
  },
  {
    path: "/jobs",
    name: "jobs",
    component: () =>
      import(
        /*webpackChunkName: "jobs" */ "../views/NavigationBarLinks/JobsPage.vue"
      ),
  },
  {
    path: "/submit",
    name: "submit",
    component: () =>
      import(
        /*webpackChunkName: "submit" */ "../views/NavigationBarLinks/SubmitPage.vue"
      ),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/*webpackChunkName: "login" */ "../views/LoginPage/LoginPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "active-link-style",
});

export default router;
