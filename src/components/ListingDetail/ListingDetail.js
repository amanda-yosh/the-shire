import { getListing } from '../../api/glue-api'
import { mapGetters } from 'vuex'

export default ({
  name: 'ListingDetail',

  data() {
    return {
      isLoading: false,
      listing: {}
    }
  },
  
  computed: {
    ...mapGetters(['getHrefFromId']),
  },

  methods: {
    getIdByPathname() {
      const id = window.location.pathname
      return id.replace('/listing/', '')
    },

    listingHref() {
      const id = this.getIdByPathname()
      const href = this.getHrefFromId(id)

      return href
    }
  },

  async created() {
    const href = this.listingHref()

    this.listing = await getListing(href)
    console.log('this.listing', this.listing)
  }
})