<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
    Hello, Amanda here!
  </div>
</template>

<script>
import axios from 'axios'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',

  components: {
    SearchBar,
  },

  data() {
    return {
      advertsList: Array
    }
  },

  methods: {
    // https://glue-api.zapimoveis.com.br/v2/listings?business=SALE&listingType=USED&portal=ZAP&categoryPage=RESULT&unitSubTypes=VILLAGE_HOUSE&unitTypes=HOME&usageTypes=RESIDENTIAL&unitTypesV3=VILLAGE_HOUSE&text=Casa+de+Vila&addressCountry=&addressState=&addressCity=&addressZone=&addressNeighborhood=&addressStreet=&addressAccounts=&addressType=&addressLocationId=&addressPointLat=&addressPointLon=&addressUrl=&size=24&from=0
    onTermChange: function (searchTerm) {
      axios
        .get('https://glue-api.zapimoveis.com.br/v2/listings?', {
          headers: {
            'x-domain': 'www.zapimoveis.com.br',
            'access-control-allow-origin': 'https://www.zapimoveis.com.br',
            q: searchTerm
          }
        }) // return a promise
        .then(response => {
          console.log(response)
          // this.advertsList = response.data
        })
    },
  }
}
</script>

<style>
</style>
