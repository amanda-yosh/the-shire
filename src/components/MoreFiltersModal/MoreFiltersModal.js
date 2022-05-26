import bathAndBed from './bath-and-bed/bath-and-bed.vue'

export default {
  name: 'MoreFiltersModal',

  data () {
    return {
      labels: ['1', '2', '3', '+4'],
      security:[
        'Circuito de segurança',
        'Condomínio fechado',
        'Portão eletrônico',
        'Portaria 24h',
        'Sistema de alarme',
        'Vigia'
      ],
      leisure: [
        'Academia',
        'Churrasqueira',
        'Cinema',
        'Espaço gourmet',
        'Espaço verde/Parque',
        'Jardim',
        'Piscina',
        'Pista de cooper',
        'Playground',
        'Quadra de squash',
        'Quadra de tênis',
        'Quadra poliesportiva',
        'Salão de festas',
        'Salão de jogos'
      ],
      condominium: [
        'Acessibilidade no condomínio',
        'Bicicletário',
        'Coworking',
        'Elevador',
        'Gerador elétrico',
        'Gramado',
        'Lavanderia',
        'Recepção',
        'Sauna',
        'SPA'
      ],
      checkedSecurity: [],
      checkedLeisure: [],
      checkedCondominium: []
    }
  },
  
  methods: {
  },

  components: {
    bathAndBed
  }
}