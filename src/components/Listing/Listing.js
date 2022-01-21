import { router } from '../../main.js'

export default {
  name: "Listing",

  props: {
    listing: Object,
  },

  methods: {
    goToDetailPage() {
      const { listing: { id }, link: { href } } = this.listing
      router.push({ name: 'listing', params: { id } }) // router para tela de detail passando o id
      const keyLocalStorage = `${id}_href`

      window.localStorage.setItem(keyLocalStorage, href)
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