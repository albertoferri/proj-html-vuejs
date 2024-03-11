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

    <ul class="row justify-content-center gap-4">
        <li id="item" class="col-4 bg-dark px-2 py-5 d-flex flex-column justify-content-between align-items-center " v-for="(item, index) in comp" :key="index">
            <img class="img-fluid" :src="item.src" alt="Image">
            <div id="info" class="text-light">
                <h4>{{ item.titolo }}</h4>
                <p>{{ item.text }}</p>
            </div>
        </li>
    </ul>
    

</template>

<style lang="scss">
@use '../styles/variables' as *;

.row{
    width: 1500px;

    margin: 0 auto;


    #item{
        width: calc(100% / 3 - 40px);
        height: 380px;
        text-align: center;

        img{
            width: 100px;
        }
    }
}





</style>
