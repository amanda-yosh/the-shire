import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home/Home.vue'
import Detail from './pages/Detail/Detail.vue'
import store from './store';

Vue.use(VueRouter) // tells Vue that VouRouter exists

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/listing/:id',
    name: 'listing',
    component: Detail
  }
]

// create the router instance and pass the `routes` option
export const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
