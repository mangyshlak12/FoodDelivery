<template>
    <div class="container">
        <header class="header">
            <div>
                Restaurant View
                {{this.receivedData}}
            </div>
            <div>
                <img src="" alt="">
            </div>
        </header>
        <div>
            <img src="" alt="">
        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
    </div>
</template>
<style scoped>

</style>
<script>
export default {
    data(){
        return{
            receivedData: ''
        }
    },
   mounted() {
 
  this.receivedData = this.$route.params.data;
  console.log(this.receivedData);
}
}
</script>