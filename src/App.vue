

<template>
  <img on.click="https://www.bu.edu/spark/" alt="Spark logo" src="./assets/spark-project-engage.web.png" height="200" width="200" align="top">
  <HelloWorld msg="Welcome to Your Vue.js App"/>


  
    
</template>



<script>
import HelloWorld from './components/HelloWorld.vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

export default {
  name: 'App',
  components: {
    HelloWorld
  }

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  ;

  
}

#img {
  height: 100px;
 
}
</style>
