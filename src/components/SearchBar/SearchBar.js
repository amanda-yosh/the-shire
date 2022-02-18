import { mapActions } from 'vuex'

export default {
  name: 'SearchBar',

  data() {
    return {
      businessSearch: 'SALE',
      citySearch: '',
      isSaleActive: true,
    }
  },
  
  methods: {
    ...mapActions(['setListings']),

    changeBusinnes: function (event) {
      this.businessSearch = event.target.value
      this.isSaleActive = !this.isSaleActive
    },

    onInputCity: function (event) {
      this.citySearch = event.target.value
    },

    onSubmit: function () {
      let city = this.citySearch
      city = city.replaceAll(' ', '+')
      const searchTerm = `&business=${this.businessSearch}&addressCity=${city}`

      this.setListings(searchTerm)
    }
  },
}
