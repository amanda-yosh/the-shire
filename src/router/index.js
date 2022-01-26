import VueRouter from 'vue-router'
import Vue from 'vue'
import { routes } from './routes.js'

Vue.use(VueRouter) // tells Vue that VouRouter exists

export const router = new VueRouter({
  mode: 'history',
  routes
})
