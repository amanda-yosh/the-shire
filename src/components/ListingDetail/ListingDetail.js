import { getListing } from '../../api/glue-api'
import { mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default ({
  name: 'ListingDetail',

  components: {
    VueSlickCarousel,
  },

  data() {
    return {
      isLoading: true,
      listing: {},
      settings: {
        arrows: true,
        // dots:true,
        // dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
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