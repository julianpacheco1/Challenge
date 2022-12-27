import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
/* import SingleProduct from "../components/SingleProduct.vue" */
// import GridComp from "../components/GridComp.vue";
// import VistaSimple from "../components/VistaSimple.vue";

import ProductListView from "../views/ProductListView";
import ProductDetailView from "../views/ProductDetailView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  /*   {
    path: '/product/:id',
    name: 'prod',
    component: SingleProduct
  }, */
  {
    path: "/allproducts",
    name: "all",
    component: ProductListView,
  },
  {
    path: "/vistasimple/product/:id",
    name: "vista",
    component: ProductDetailView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
