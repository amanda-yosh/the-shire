<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
    <ListingList :listings="advertsList"></ListingList>
  </div>
</template>

<script>
import { getListings } from './api/glue-api'
import ListingList from './components/ListingList/ListingList.vue'
import SearchBar from './components/SearchBar/SearchBar.vue'

export default {
  name: 'App',

  components: {
    SearchBar,
    ListingList
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
