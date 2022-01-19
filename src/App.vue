<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <AdvertiserList :listings="advertsList"></AdvertiserList>
  </div>
</template>

<script>
import { getAdvertisers } from './api/glue-api'
import SearchBar from './components/SearchBar.vue'
import AdvertiserList from './components/AdvertiserList.vue'

export default {
  name: 'App',

  components: {
    SearchBar,
    AdvertiserList
  },

  data() {
    return {
      advertsList: []
    }
  },

  methods: {
    onTermChange: async function (searchTerm) {
      this.advertsList = await getAdvertisers(searchTerm)
      console.log('depois', this.advertsList)
    },
  }
}
</script>

<style>
</style>
