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
                    <div v-for="(icon, iconIndex) in item.social" :key="iconIndex" v-html="icon" class="social-icon"></div>
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

    .card{
        border: 2px solid transparent;

        &:hover{
            border-color: $thatOrange;
        }

        img:hover{
            cursor: pointer;
        }




        .social-icon{
            width: 22px;
    
            &:hover{
                color: $thatOrange;
                cursor: pointer;
            }   
        }
    }
    

}

</style>
