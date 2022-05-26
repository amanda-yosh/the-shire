import { goToPage } from '../../helpers/utils'

export default ({
  name: 'Header',

  methods: {
    goToLoginPage() {
      goToPage('login')
    }
  }
})
