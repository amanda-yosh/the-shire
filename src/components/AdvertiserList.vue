<template>
  <div>
    <Advertiser
      v-for="(listing, index) in listings"
      :key="index"
      :listing="listing"
    >
    </Advertiser>
  </div>
</template>

<script>
import Advertiser from './Advertiser.vue'

export default ({
  name: 'AdvertiserList',

  components: {
    Advertiser
  },

  props: {
    listings: []
  }
})
</script>

<style scoped>

</style>
