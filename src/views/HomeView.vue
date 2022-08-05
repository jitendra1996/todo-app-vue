<template>
  <div class="home">
    <h1>Login</h1>
    <form @submit.prevent="loginHandler">
      <div class="row">
        <label for="email">Email</label>
        <input type="email" v-model="email" placeholder="email">
      </div>
      <div class="row">
        <label for="password">Password</label>
        <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="password">
      </div>
      <div class="row" v-show="password">
        <input type="checkbox" v-model="showPassword">
        <label for="show-password">Show Password</label>
      </div>
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: { },
  data(){
    return {
      email : '',
      password : '',
      showPassword : ''
    }
  },
  methods:{
    loginHandler(){
      console.log(this.email,this.password,this.showPassword);
    }
  }
}
</script>

<style>
h1{
  margin-bottom: 2rem;
}

input[type=checkbox]{
  width:4rem;
}

.home{
  height: 80vh;
  width: 80vw;
  margin:0 auto;
  padding: 2rem;
  font-size: 1.6rem;
}
</style>