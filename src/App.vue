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
    onTermChange: function (searchTerm) {
      getAdvertisers(searchTerm)
    },
  }
}
</script>

<style>
</style>
