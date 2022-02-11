import LoginHeader from '../../components/LoginHeader/LoginHeader.vue'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import utils from '../../helpers/utils'

export default ({
  name: 'Login',

  components: {
    LoginHeader
  },

  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    login() {
      try {
        signInWithEmailAndPassword(auth, this.email, this.password)
        utils.goToPage('profile')
      } catch (error) {
        alert(error.message)
      }
    },
  }, 
})