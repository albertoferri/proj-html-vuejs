<script>
import {store} from '../store.js';

export default{

    
    data(){
        return{
            store,

            // importati da store.js
            comp: store.song
        }
    }
 
}


</script>

<template>

<div class="row justify-content-center py-5 row-gap-3 ">
    <div class="col-12">
        <h5 class="text-center fw-bold text-uppercase">Who we are</h5>
        <h2 class="text-center display-3 fw-bold text-uppercase text-white">sense the jazz</h2>
    </div>
    <div class="col-4" v-for="(item, index) in comp" :key="index">
        <div class="card bg-dark text-light">
            <img :src="item.srcImmagine" class="card-img-top" alt="Image">
            <div class="card-body d-flex flex-column justify-content-between align-items-center">
                <h4 class="card-title text-uppercase">{{ item.titolo }}</h4>
                <div class="d-flex gap-2"> Stream on: 
                    <img v-for="(imgPath, imgIndex) in item.social" :key="imgIndex" :src="imgPath" class="social-icon" alt="Social Icon">
                </div>
            </div>
        </div>
    </div>
</div>


    
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

.row{

    .col-12{
    
        h5{
            color: $thatOrange;
        }
    }
    
    .social-icon{
        width: 22px;
    }

}

</style>
