<script>
import Types from './Types.vue';
import jazz from './jazz.vue';

import {store} from '../store.js';

export default{
    data(){
        return{
            store,
            isPlaying: false,
            volume: 0.1
        }
    },
    components:{
        Types,
        jazz,
    },
    methods: {
        toggleAudio() {
            if (this.isPlaying) {
                this.$refs.myAudio.pause();
            } else {
                this.$refs.myAudio.play();
            }
            this.isPlaying = !this.isPlaying;
        },
    },
  
}

</script>

<template>

<div class="container-fluid" >

    <div id="audio-box" class="d-flex align-items-center justify-content-start flex-row-reverse gap-3">

        <i @click="toggleAudio" :class="isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play'" class="p-1 fs-4"></i>
        <input type="range" v-model="volume" min="0.0" max="1.0" step="0.1">
        <audio ref="myAudio" src="/public/assets/sigla.mp4" :volume="volume"></audio>
        
    </div>

    <div class="title-box d-flex flex-column gap-3 text-uppercase align-items-center">
        
        <h5>instrumental rock</h5>
        <h1 class="display-1">Music in this Video</h1>
        <button>READ MORE</button>

    </div>

</div>

<div class="types-container">
    <Types></Types>
</div>

<jazz></jazz>

    


  
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;


.container-fluid{

    background-image: url('/assets/jumbo1.png');
    background-size: cover;
    height: 800px;

    #audio-box i, input{
        cursor: pointer;
    }

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
  bottom: -120px;
  left: 50%;
  transform: translate(-50%);
  
  @media (max-width: 1200px) {
    position: static;
    transform: none;
    left: auto;
    bottom: 0;
  }
}





</style>
