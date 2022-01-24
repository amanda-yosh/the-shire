import { mapMutations } from 'vuex';
import { router } from '../../main.js'

export default {
  name: "Listing",

  props: {
    listing: Object,
  },

  methods: {
    ...mapMutations(['setHref']),

    goToDetailPage() {
      const { listing: { id }, link: { href } } = this.listing
      const keyLocalStorage = `${id}_href`

      window.localStorage.setItem(keyLocalStorage, href) // save href in localStorage
      this.$store.commit('setHref', { id, href }) // save href in storage

      router.push({ name: 'listing', params: { id } }) // router for Detail page passing id
    },
  },

  computed: {
    getFirstMediasElementURL() {
      let { url } = this.listing.medias[0]

      url = url.replace('/{action}/{width}x{height}/', '/crop/420x236/')

      return url
    }
  },
};