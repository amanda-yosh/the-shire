<template>
  <div id="app">
    <SearchBar @termChange="onTermChange"></SearchBar>
  </div>
</template>

<script>
import { getAdvertisers } from './api/glue-api'
import SearchBar from './components/SearchBar.vue'

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
    onTermChange: function (searchTerm) {
      getAdvertisers(searchTerm)
    },
  }
}
</script>

<style>
</style>
