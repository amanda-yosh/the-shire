export default {
  name: 'bath-and-bed',

  data () {
    return {
      labels: ['1', '2', '3', '+4'],
    }
  },

  props: {
    context: '',
  },

  computed: {
    title () {
      if (this.context === 'bedroom') return 'Quartos'
      return 'Banheiros'
    }
  },
  
  methods: {
  },
}