import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ShowModal from "../views/ShowModal.vue";
import About from "../views/About.vue";
import Faq from "../components/Faq.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/modal",
    name: "ShowModal",
    component: ShowModal,
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
