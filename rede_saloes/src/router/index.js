import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/unhas',
    name: 'unhas',
    component: () => import(/* webpackChunkName: "about" */ '../views/UnhasView.vue')
  },
  {
    path: '/cabelo',
    name: 'cabelo',
    component: () => import(/* webpackChunkName: "about" */ '../views/CabeloView.vue')
  },
  {
    path: '/homen',
    name: 'homen',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomenView.vue')
  },
  {
    path: '/mulher',
    name: 'mulher',
    component: () => import(/* webpackChunkName: "about" */ '../views/MulherView.vue')
  },
  {
    path: '/massagem',
    name: 'massagem',
    component: () => import(/* webpackChunkName: "about" */ '../views/MassagemView.vue')
  },
  {
    path: '/tratamentoFacial',
    name: 'tratamentoFacial',
    component: () => import(/* webpackChunkName: "about" */ '../views/TratamentoFacialView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
