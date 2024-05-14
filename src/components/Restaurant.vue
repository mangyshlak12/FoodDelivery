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
            receivedData: null
        }
    },
   mounted() {
 
  this.receivedData = this.$route.params.query;
  console.log(this.receivedData);
}
}
</script>