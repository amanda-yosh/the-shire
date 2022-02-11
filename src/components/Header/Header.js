import utils from '../../helpers/utils'

export default ({
  name: 'Header',

  methods: {
    goToLoginPage() {
      utils.goToPage('login')
    }
  }
})