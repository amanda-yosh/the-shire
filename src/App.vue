<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <AdvertiserList :listings="advertsList"></AdvertiserList>
  </div>
</template>

<script>
import { getListings } from './api/glue-api'
import AdvertiserList from './components/AdvertiserList.vue'
import SearchBar from './components/SearchBar/SearchBar.vue'

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
      this.advertsList = await getListings(searchTerm)
    },
  }
}
</script>

<style>
</style>
