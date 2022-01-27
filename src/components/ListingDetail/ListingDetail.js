import { getListing } from '../../api/glue-api'
import { mapGetters } from 'vuex'

export default ({
  name: 'ListingDetail',

  data() {
    return {
      isLoading: true,
      listing: {}
    }
  },

  computed: {
    ...mapGetters(['getHrefFromId']),

    imageURL() {
      let medias = this.listing.medias
      medias.forEach((obj) => {
        obj.url = obj.url.replace('/{action}/{width}x{height}/', '/crop/420x236/')
      })

      return medias
    }
  },

  methods: {
    getIdByPathname() {
      const id = window.location.pathname
      return id.replace('/listing/', '')
    },

    listingHref() {
      const id = this.getIdByPathname()

      return this.getHrefFromId(id)
    }
  },

  async created() {
    const href = this.listingHref()

    this.listing = await getListing(href)
    this.isLoading = false
  }
})