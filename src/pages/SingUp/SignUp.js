import LoginHeader from '../../components/LoginHeader/LoginHeader.vue'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { goToPage } from '../../helpers/utils'

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
        goToPage('profile')
      } catch (error) {
        alert(error.message)
      }
    },
  },
})
