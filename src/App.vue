<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import { getListings } from './api/glue-api'
import SearchBar from './components/SearchBar/SearchBar.vue'

export default {
  name: 'App',

  components: {
    SearchBar,
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
