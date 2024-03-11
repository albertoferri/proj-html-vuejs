<script>
import Types from './Types.vue';

import {store} from '../store.js';

export default{
    data(){
        return{
            store,
        }
    },
    components:{
        Types,
    }

  
}

</script>

<template>

<div class="container-fluid position-absolute ">
    
    <div class="title-box d-flex flex-column gap-3 text-uppercase align-items-center">
        <h5>instrumental rock</h5>
        <h1 class="display-1">Music in this Video</h1>
        <button>MORE</button>
    </div>

</div>

    <div>

        <Types></Types>

    </div>

    <div class="container">
        <div class="row flex-column text-white text-uppercase">
            <div class="col text-center fs-3">Who we are</div>
            <div class="col text-center fs-3">sense the jazz</div>
            <div class="col text-center fs-3">The Story Of Jazz And Blues Society Is The Story Of Determinationr Passion, Idealism, Community, And Of Course, Music. Founded In 1985 And Incorporated In 1986, As A Community Based, Not-For-Profit, Charitable Arts Organization Located In Vancouver, British Columbia, The Society, From The Very Beginning, Has Worked Diligently To Establish Vancouver As A Centre For The Creation And Exchange Of Sounds And Ideas Between The Local, National And International Music Communities.</div>
            <div class="col text-center fs-3"><button>read more</button></div>
        </div>
    </div>


  
</template>

<style lang="scss">
@use '../styles/variables' as *;


.container-fluid{

    background-image: url('/public/assets/jumbo1.png');
    background-size: cover;
    height: 800px;



    .title-box{
        position: relative;
        top: 100px;
    
        h5{
            color: $thatOrange,
        }
        
        h1{
            font-weight: 500;
            color: white;
        }
    }
}





</style>
