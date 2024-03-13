<script>
import {store} from '../store.js';

export default{

    
    data(){
        return{
            store,
            comp: store.jumbo
        }
    }
 
}


</script>

<template>

    <ul class="row justify-content-around justify-content-md-between gap-0 gap-xl-5">
        <li id="item" class="col bg-dark px-2 py-5 d-flex flex-column justify-content-between align-items-center " v-for="(item, index) in comp" :key="index">
            <div class="img-wrapper p-4">
                <img class="img-fluid" :src="item.src" alt="Image">
            </div>
            <div id="info" class="text-light">
                <h4 class="text-uppercase">{{ item.titolo }}</h4>
                <p class="fw-light">{{ item.text }}</p>
            </div>
        </li>
    </ul>
    

</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

.row {
  margin: 0 auto;
  flex-wrap: nowrap;
  

  #item {
    min-width: 350px;
    height: 380px;
    text-align: center;
    
    @media (max-width: 1100px) {
      
      max-width: calc(100% / 3 - 40px);
      
    }

    .img-wrapper{

        border: 2px solid transparent;
        border-radius: 50%;

        &:hover{
          border-color: $thatOrange;
          transition: .3s linear;
          cursor: pointer;
        }

        &:not(:hover){
          transition: .3s linear;
        }

        img {
          width: 100px;
          filter: invert(1);
          aspect-ratio: 1 / 1;
        }
    }
  }
}

</style>