<script>
import Types from './Types.vue';
import jazz from './jazz.vue';

import {store} from '../store.js';

export default{
    data(){
        return{
            store,
        }
    },
    components:{
        Types,
        jazz,
    }

  
}

</script>

<template>

<div class="container-fluid">
    
    <div class="title-box d-flex flex-column gap-3 text-uppercase align-items-center">
        <h5>instrumental rock</h5>
        <h1 class="display-1">Music in this Video</h1>
        <button>MORE</button>
    </div>

</div>

<div class="types-container">
    <Types></Types>
</div>

<jazz></jazz>

    


  
</template>

<style lang="scss">
@use '../styles/variables' as *;


.container-fluid{

    background-image: url('/public/assets/jumbo1.png');
    background-size: cover;
    height: 800px;



    .title-box{
        position: relative;
        top: 200px;
    
        h5{
            color: $thatOrange,
        }
        
        h1{
            font-weight: 500;
            color: white;
        }
    }
}

.types-container {
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translate(-50%);
}





</style>
