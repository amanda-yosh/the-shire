<template>
  <div>
    <Advertiser
      v-for="listing in listings"
      :key="listing.account.id"
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
