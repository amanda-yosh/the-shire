import MoreFiltersModal from '../MoreFiltersModal/MoreFiltersModal.vue'

export default {
  name: 'SearchBar',

  data () {
    return {
      modalOpen: false,
    }
  },
  
  methods: {
    onInput: function (event) {
      this.$emit('termChange', event.target.value)
    },

    openMoreFilters () {
      this.modalOpen = !this.modalOpen
    }
  },

  components: {
    MoreFiltersModal,
  }
}