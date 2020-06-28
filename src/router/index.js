import Vue from 'vue'
import VueRouter from 'vue-router'
import MapPage from '../views/MapPage'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'MapPage',
    component: MapPage
  },
  {
    path: '/*',
    redirect: { name: 'MapPage' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
