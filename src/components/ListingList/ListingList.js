import Listing from '../Listing/Listing.vue'

export default ({
  name: 'ListingList',

  components: {
    Listing
  },

  props: {
    listings: []
  }
})