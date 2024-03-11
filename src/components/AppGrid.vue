<script>
import {store} from '../store.js';

export default{

    
    data(){
        return{
            store,
            comp: store.song
        }
    }
 
}


</script>

<template>

<div class="row justify-content-center pt-5 row-gap-3 w">
    <div class="col-12">
        <h5 class="text-center fw-bold text-uppercase">Who we are</h5>
        <h2 class="text-center display-3 fw-bold text-uppercase text-white">sense the jazz</h2>
    </div>
    <div class="col-4" v-for="(item, index) in comp" :key="index">
        <div class="card bg-dark text-light">
            <img :src="item.srcImmagine" class="card-img-top" alt="Image">
            <div class="card-body d-flex flex-column justify-content-between align-items-center">
                <h4 class="card-title text-uppercase">{{ item.titolo }}</h4>
                <p class="card-text fw-light">{{ item.social }}</p>
            </div>
        </div>
    </div>
</div>


    
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;


.col-12{

    h5{
        color: $thatOrange;
    }
}




</style>
