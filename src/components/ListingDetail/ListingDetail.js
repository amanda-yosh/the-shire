import { getListing } from '../../api/glue-api'
import { mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { normalizeImageUrl } from '../../helpers/utils'

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

    advertiserLogoUrl() {
      const url = this.listing.account.logoUrl
      return normalizeImageUrl(url, '/fit-in/136x94/')
    },

    businessType() {
      const businessType = this.listing.listing.pricingInfos[0].businessType

      if (businessType === 'SALE') return 'VENDA'
      if (businessType === 'RENTAL') return 'ALUGUEL'
    },

    price() {
      let price = this.listing.listing.pricingInfos[0].price

      return `R$ ${price}`
    },
  },

  methods: {
    getIdByPathname() {
      const id = window.location.pathname
      
      return id.replace('/listing/', '')
    },

    listingHref() {
      const id = this.getIdByPathname()

      return this.getHrefFromId(id)
    },

    imageURL() {
      const medias = this.listing.medias
      medias.forEach(media => {
        media.url = normalizeImageUrl(media.url, '/fit-in/800x360/')
      })

      this.listing.medias = medias
    }
  },

  async created() {
    const href = this.listingHref()

    this.listing = await getListing(href)
    this.isLoading = false
    this.imageURL()
  }
})
