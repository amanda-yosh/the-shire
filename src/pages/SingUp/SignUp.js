import LoginHeader from '../../components/LoginHeader/LoginHeader.vue'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import utils from '../../helpers/utils'

export default ({
  name: 'SignUp',

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
    register() {
      try {
        createUserWithEmailAndPassword(auth, this.email, this.password)
        utils.goToPage('profile')
      } catch (error) {
        alert(error.message)
      }
    },
  },
})