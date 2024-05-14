<template>
    <div class="container">
        <div class="container__below">
            <img :src="Loc" alt="">
        </div>
        <div class="container__button" @click="doOper">
            ACCESS LOCATION
        </div>
        <div class="container__text">
            DFOOD WILL ACCESS YOUR LOCATION ONLY WHILE USING THE APP
        </div>
    </div>
</template>
<style scoped>
.container__below{
    margin-top: 70px;
    padding: 50px 0;
    display: flex;
    justify-content: center;
}
.container__button{
    width: 100%;
    background: #FF7622;
    text-align: center;
    color: white;
    padding: 20px 0px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 12px;
}
.container__text{
    color: #646982;
    margin-top: 30px ;
    text-align: center;
}
.container{
    padding: 34px;
}
</style>
<script>
import Loc from '../assets/images.png'
export default {
    data(){
        return{
            Loc, 
            location: null,
             errorMessage: ''
        }
    },
    methods:{
        getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.location = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            };
            console.log(position);  
          },
          error => {
            this.errorMessage = `Error retrieving location: ${error.message}`;
          }
        );
      } else {
        this.errorMessage = 'Geolocation is not supported by this browser.';
      }
    },
    doOper(){
        this.getLocation();
        this.$router.push('main');
    }
    }
}
</script>