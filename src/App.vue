<template>
  <div class="app">
    <router-view> </router-view>
  </div>
</template>
<style>
*{
  padding: 0;
  margin: 0;
}
</style>
<script>
import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue'


export default {
  data(){
  
  },
  components:{
    SignUp,Login
  }
}
</script>