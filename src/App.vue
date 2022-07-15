<template>
  <nav>
    <router-link to="/add-task">Add Task</router-link> |
    <router-link to="/about">About</router-link>  |
    <router-link to="/">Login</router-link> |
    <router-link to="/signup">Sign up</router-link><span v-if="isLogin"> | </span>
    <router-link to="/tasks" v-if="isLogin">Tasks</router-link>
  </nav>
  <router-view/>
  <footer>
    <div>I'm am footer</div>    
  </footer>
</template>

<script>
export default{
  data(){
    return {
      isLogin : true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 95vw;
  margin: 0 auto;
}

nav {
  padding: 3rem;
  background: #495c83;
  font-size: 1.6rem;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #fff;
}

nav a.router-link-exact-active {
  color: #42b983;
}

footer{
 background: #495c83;
 font-size: 1.6rem;
 color: #fff;
 padding: 3rem;
}
</style>

<!-- #495C83 -->
<!-- #7A86B6 -->
<!-- #A8A4CE -->
<!-- #C8B6E2 -->