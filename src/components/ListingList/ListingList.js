import Listing from '../Listing/Listing.vue'
import { mapGetters } from 'vuex'

export default ({
  name: 'ListingList',

  components: {
    Listing
  },

  computed: {
    ...mapGetters(['getListings']),

    getListingLength() {
      return this.getListings.length
    }
  },
})
