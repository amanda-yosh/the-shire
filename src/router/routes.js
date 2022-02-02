import Home from '../pages/Home/Home.vue'
import Detail from '../pages/Detail/Detail.vue'
import Login from '../pages/Login/Login.vue'
import SignUp from '../pages/SingUp/SignUp.vue'

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
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  }
]
