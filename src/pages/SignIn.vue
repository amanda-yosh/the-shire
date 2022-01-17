<template>
  <div class="container">
    <div class="img">
      <h2 class="phrase">O retiro que você busca<br>a um condado de distância</h2>
    </div>
    <div class="context">
      <h1 class="title">Sign In</h1>

      <form class="form" @submit.prevent="onSignUp">
        <label class="label-title" for="user">Nome de usuário</label>
        <i class="fas fa-user icon"></i>
        <input
          class="label-input"
          type="text"
          name="user"
          id="user"
          v-model="user"
          placeholder="Digite seu nome de usuário aqui..."
          required
        />

        <label class="label-title" for="email">E-mail de usuário</label>
        <i class="far fa-envelope icon"></i>
        <input
          class="label-input"
          type="email"
          name="email"
          id="email"
          v-model="email"
          placeholder="Digite seu e-mail de usuário aqui..."
          required
        />

        <label class="label-title" for="password">Senha</label>
        <i class="fas fa-lock icon"></i>
        <input
          class="label-input"
          type="password"
          name="password"
          id="password"
          v-model="password"
          placeholder="Digite sua senha aqui..."
          required
        />

        <button class="button" type="submit">Login</button>
      </form>

      <small class="small">Ou acesse com</small>

      <button class="button">Gmail</button>
    </div>
  </div>
</template>

<script>
export default ({
  name: 'SignIn',
  data() {
    return {
      user: '',
      email: '',
      password: ''
    }
  },
  methods: {
    onSignUp: () => {
      // vuex
      console.log({
        user: this.user,
        email: this.email,
        password: this.password,
      })
    }
  }
})
</script>

<style scoped>
.container {
  display: flex;
}

.img {
  width: 50vw;
  height: 100vh;
  background-image: url('../assets/the-shire-1.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.phrase {
  color: #e2e2e2;
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  line-height: 2rem;
  letter-spacing: 0.1em;
}

.context {
  width: 30vw;
  align-self: center; /* alinha ao centro da página no eixo y, é filho de container que é um display flex */

  display: flex;
  flex-direction: column;
  margin: 0 auto; /* alinha ao centro no eixo x */
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}

.form {
  display: flex;
  flex-direction: column;
}

.icon {
  position: absolute;
  min-width: 40px;
  color: #e2e2e2;
}

.icon:first-of-type {
  padding: 37px 10px;
}

.icon:nth-of-type(2) {
  padding: 118px 10px;
}

.icon:last-of-type {
  padding: 200px 10px;
}

.label-title {
  margin-bottom: .5rem;
}

.label-input {
  margin-bottom: 1rem;
  padding: 10px 0 10px 30px;
  border: 2px solid;
  border-radius: 6px;
}

.small {
  text-align: center;
}

.button {
  padding: 10px 10px;
  margin: 5px 0;

  background-color: teal;
  border: none;
  border-radius: 6px;

  color: #fff;
  cursor: pointer;
}

.button:hover {
  background-color: #e2e2e2;
}
</style>