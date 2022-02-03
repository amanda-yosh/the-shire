import { router } from '../../router'

export default ({
  name: 'Header',

  methods: {
    goToLoginPage() {
      router.push({name: 'login'})
    }
  }
})