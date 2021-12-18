import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventList from "../views/EventList.vue";
import EventShow from "../views/EventShow.vue";
import User from "../views/User.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList,
  },
  {
    path: "/create",
    name: "event-create",
    component: EventCreate,
  },
  {
    path: "/show",
    name: "event-show",
    component: EventShow,
  },
  {
    path: "/user/:username",
    name: "user",
    component: User,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
