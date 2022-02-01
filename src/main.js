import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { router } from './router/index.js'
import { initializeApp } from 'firebase/app'

Vue.config.productionTip = false // Preventing production start message

const firebaseConfig = {
  apiKey: 'AIzaSyBNI-LIKJgqqNETBXDGNXw5dcRoYBiY1Xw',
  authDomain: 'the-shire-eb558.firebaseapp.com',
  projectId: 'the-shire-eb558',
  storageBucket: 'the-shire-eb558.appspot.com',
  messagingSenderId: '891665356224',
  appId: '1:891665356224:web:edf45bac6411769b0a6425'
}

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    initializeApp(firebaseConfig)
  }
}).$mount('#app')
