<script>
import {store} from '../store.js';

export default{
    data(){
        return{
            store,
        }
    }

  
}

</script>

<template>

    <img class="img-fluid position-absolute " src="/assets/jumbo1.png" alt="">
    <div class="title-box d-flex flex-column gap-3 text-uppercase align-items-center">
        <h5>instrumental rock</h5>
        <h1 class="display-1">Music in this Video</h1>
        <button>MORE</button>
    </div>


  
</template>

<style lang="scss">
@use '../styles/variables' as *;


.title-box{
    position: relative;
    top: 320px;

    h5{
        color: $thatOrange,
    }
    
    h1{
        font-weight: 500;
        color: white;
    }
}




</style>
