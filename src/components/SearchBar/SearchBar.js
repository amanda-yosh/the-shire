export default {
  name: "SearchBar",
  
  methods: {
    onInput: function (event) {
      this.$emit("termChange", event.target.value);
    },
  },
};