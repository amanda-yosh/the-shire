<template>
  <div>
    <Header />
    <ListingDetail />
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import ListingDetail from '../../components/ListingDetail/ListingDetail.vue'

export default ({
  name: 'Detail',

  components: {
    Header,
    ListingDetail
  }
})
</script>
