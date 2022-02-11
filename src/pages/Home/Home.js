import { getListings } from '../../api/glue-api'
import ListingList from '../../components/ListingList/ListingList.vue'
import SearchBar from '../../components/SearchBar/SearchBar.vue'

export default {
  name: 'Home',

  components: {
    SearchBar,
    ListingList
  },

  data() {
    return {
      advertsList: []
    }
  },

  methods: {
    onTermChange: async function (searchTerm) {
      this.advertsList = await getListings(searchTerm)
    },
  }
}