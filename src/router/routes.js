import Home from '../pages/Home/Home.vue'
import Detail from '../pages/Detail/Detail.vue'

export const routes = [
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
