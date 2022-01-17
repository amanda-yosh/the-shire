<template>
  <div id="app">
    <SignIn></SignIn>
  </div>
</template>

<script>
import SignIn from './pages/SignIn.vue'

export default {
  name: 'App',
  components: {
    SignIn
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
