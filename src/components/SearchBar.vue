<template>
  <div class="container">
    <label for="city">Onde ?</label>
    <input @input="onInput" id="city" placeholder="Cidade..."/>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  
  methods: {
    onInput: function (event) {
      this.$emit("termChange", event.target.value);
    },
  },
};
</script>

<style scoped>
  .container {
    width: 70vw;
    align-self: center; /* alinha ao centro da página no eixo y, é filho de container que é um display flex */

    display: flex;
    flex-direction: column;
    margin: 1.2rem auto; /* alinha ao centro no eixo x */
  }

  input {
    width: 100%;
    margin: .5rem 0 .5rem 0;
    padding: 10px 0 10px 30px;
    border: 2px solid;
    border-radius: 6px;
  }
</style>
