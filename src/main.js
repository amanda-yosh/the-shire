import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home/Home.vue'
import Detail from './pages/Detail/Detail.vue'
import store from './store'

Vue.config.productionTip = false // Preventing production start message

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
