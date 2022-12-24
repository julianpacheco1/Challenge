import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "../views/HomeView.vue"
import SingleProduct from "../components/SingleProduct.vue"
import GridComp from "../components/GridComp.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/id',
    name: 'prod',
    component: SingleProduct
  },
  {
    path: '/allproducts',
    name: 'all',
    component: GridComp
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
