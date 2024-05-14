<template>
    <div class="container">
        <header class="header">
            <div class="header__left">
                  <div  class="img">
                    <img :src="Menu" alt="">
                    </div>
                <div class="header__left__info">
                    <span>DELIVER TO</span>
                    <p>Name</p>
                </div>
                
            </div>
            <div class="header__right">
                    <div class="img1">
                        <img :src="Corz" alt="">
                        </div>
                    <span >0</span>
            </div>
        </header>
        <div class="greete">
            Hey Name, <span>Welcome!</span>
        </div>
        <div class="search">
            <img src="" alt="">
            <input type="text" placeholder="Search dishes, Restaurants">
        </div>
        <div class="head__texts">
                All Categories
        </div>
        <div class="categories">
            <div v-for="(el,index) in categories" :key="index" class="categories__items" >
                <span></span>
                <p>{{el}}</p>
            </div>
        </div>
        <div class="head__texts">
            Open Restaurants
        </div>
        <div class="restaurants">
            <div class="rest" v-for="(el,index) in rests" :key="index">
                <div>
                    <img :src="el.img" alt="">
                </div>
                <div class="head__texts" id="rest__name" @click="this.$router.push({path: '/rest', params: {data: 'String'} });">
                    {{el.name}}
                </div>
                <div class="catalogs">
                    <p v-for="(j, ins) in el.catalog" :key="ins">
                        {{j}}
                    </p>
                </div>
                <div class="rest__info">
                        <div class="info">
                            <img :src="Star" alt="">
                            <div>
                                <p class="rate">{{el.rate}}</p>
                                </div>
                        </div>
                          <div class="info">
                            <img :src="Del" alt="">
                            <p>{{el.deliveryCost}}</p>
                        </div>
                          <div class="info">
                            <img :src="Time" alt="">
                            <p>{{el.time}}</p>
                        </div>

                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.container{
    padding: 40px 30px;
}
.header{
    display: flex;
    justify-content: space-between;
}
.header__left{
    display: flex;
    gap: 20px;
}
.header__left__info span{
    font-size: 11px;
    color: #FC6E2A;
}
.header__left__info p{
    color: #676767
}
.img{
    background: #ECF0F4;
    border-radius: 50%;
    padding: 8px 8px;
}
.img1{
    background: #181C2E;
  
     display: flex;
    align-items: center;
    padding: 0 8px;
    border-radius: 50% ;
}

.img1 img{
    width: 27px;
}
   
.header__right{
    display: flex;
}
.header__right span{
    position: absolute;
    background: #FF7622;
    color: white;
    padding: 2px 7px;
    border-radius: 50%;
    right: 28px;;
}
.greete{
    margin-top: 15px;
}
.greete span{
    color: #1E1D1D;
    font-weight: bold;
}
.search input{
    margin-top: 10px;
    outline: none;
    border: none;
    background: #F6F6F6;
    padding: 15px 25px;
    width: 80%;
    border-radius: 10px;
    
}
.head__texts{
    margin-top: 20px;
    font-size: 20px;
    color: #32343E;
}
.categories{
    display: flex;
    gap: 20px;
    margin-top: 15px ;
}
.categories span{
    content: '';
    background: #98A8B8;
    padding: 18px 18px;
    border-radius: 50%;
}
.categories__items{
    padding: 4px 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px #d9e1cc solid;
    border-radius: 36px;
}
.restaurants{
    margin-top: 20px;
    width: 100%;
}
.restaurants img{
    width: 100%;
    height: 180px;
}
#rest__name{
    margin-top: 10px;
}
.catalogs{
    display: flex;
    margin-top: 7px;
    font-size: 14px;
    color: #A0A5BA;
}
.rest__info{
    display: flex;
    margin-top: 15px;
    gap: 15px;
}
.info{
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    color: #181C2E;
}
.info img{
    width: 24px;
    height: 24px;

}
.rate{
    font-weight: bold;
    font-size: 16px;
}
</style>
<script>
import Menu from '../assets/menu.svg'
import Corz from '../assets/corz.png'
import Rest1 from '../assets/rest1.jpg'
import Star from '../assets/star.svg'
import Time from '../assets/time.svg'
import Del from '../assets/delivery.svg'
export default {
    data(){
        return{
            categories: [
                "All","Hot dog", "Burger","Chicken","Drink"
            ],
            Menu,Corz,Rest1,Star,Time,Del,
            rests: [
                {   img: Rest1,
                    name: 'Rose Garden Restaurant',
                    catalog: ['Burger - ','Chicken - ','Riche - ','Wings'],
                    rate: '4.7',
                    deliveryCost: 'Free',
                    time: '20 min'
                }
            ]
        }
    }
}
</script>