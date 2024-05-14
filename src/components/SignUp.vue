<template>
    <div class="container">
        <div class="container__top">
            <div class="top__inf">
                <h2 class="tag">Sign Up</h2>
                <p class="perm">Please sign up to get started</p>
            </div>
             </div>
        <div class="container__below">
                <div class="below__userinfo">
                    <div class="userinfo">
                        <p class="userinfo__text">NAME</p>
                        <input type="text" v-model="name" @click="press" placeholder="John Doe"  class="userinfo__input">
                    </div>
                      <div class="userinfo" id="us2">
                        <p class="userinfo__text">EMAIL</p>
                        <input type="email" v-model="email" @click="press" placeholder="example@gmail.com" class="userinfo__input">
                    </div>
                    <div class="userinfo" id="us2">
                        <p class="userinfo__text">PASSWORD</p>
                        <input type="password" v-model="password" @click="press"  placeholder="* * * * * * * * * * * * * * * *" class="userinfo__input">
                    </div>
                    <div class="userinfo" id="us2">
                        <p class="userinfo__text">RE-TYPE PASSWORD</p>
                        <input type="password" v-model="repassword" @click="press"  placeholder="* * * * * * * * * * * * * * * *" class="userinfo__input">
                    </div>
                     
                     <div class="Error">
                           {{this.error}} 
                     </div>
                     <div class="button">
                        <button @click="login">LOG IN</button>
                     </div>
                     <div class="signup">
                            <p class="signup__t">Already have an account</p>
                            <router-link to="/" class="signup__b">LOG IN</router-link>
                            
                     </div>
                     
                     <div>

                     </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#us2{
    margin-top: 22px;
}
.below_userinfo{
    width: 100%;
}
.container{
    height: 100%;
}
.userinfo__text{
    font-size: 11px;
    letter-spacing: 1px;
    font-weight: 500;
    color: #32343E;
    padding-left: 5px;
}
.container__top{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
      border-bottom: 1px solid black;
    background-color:  #121223;
;
}
.top__inf{
    color: white;
    padding: 60px 0px;
    margin-top: 20px ;
   
}
.tag{
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1px;
}
.perm{
    letter-spacing: 1px;
    margin-top: 5px;
    font-weight: 100;
}
.container__below{
    padding: 24px 35px;
    border-radius: 5%;
    position: absolute;
    background-color: white ;
    top: 180px;
    
    
    width: 100%;
  
}
.userinfo__input{
    color: #A0A5BA;
    margin-top: 5px;
    padding: 20px 10px;
    border: none;
    width: 100%;
    border-radius: 8px;
    background: #F0F5FA;
}
.functions{
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.functions__left{
    display: flex;
    gap: 7px;
    color: #7E8A97;
    font-size: 13px;
    align-items: center;
}
.functions__right{
    font-size: 14px;
    color:#FF7622;

}
.button{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    margin-top:31px;
    color: white;
    width:100%;
    background: #FF7622;
    border-radius: 10px;
}
.button button{
    background: #FF7622;
    border: none;
    color: white;

}
.signup{
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 31px auto;
    align-items: center;

}
.signup__t{
    color: #646982;

}.signup__b{
    color: #FF7622;
    font-size: 14px;
    font-weight: bold;
     text-decoration: none;

}
.Error{
    color: red;
    font-size: 12px;
    font-weight: bold;
    padding-top: 10px ;
}

</style>
<script>
export default {
    data(){
        return{
            name: '',
            email: '',
            password: '',
            repassword: '',
            error: ''
        };
    },
    methods:{
       login(){
        if (!this.email || !this.password || !this.name || !this.repassword) {
        this.error = 'Name,Email and password are required.';
        return;
      }
      if (this.password.length < 8 || this.password.length > 25) {
        this.error = 'Password must be between 8 and 25 characters.';
        return;
      }
      if(this.password != this.repassword){
        this.error = "Error";
        return;
      }
      console.log("Success");
       },
       press(){
        this.error = '';
       }
    }
}
</script>