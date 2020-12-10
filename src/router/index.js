import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Statistics from '../views/statistics.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: Statistics
  }
]

const router = new VueRouter({
  mode: "history",
  routes
});


export default router
