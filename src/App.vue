<script>
import AppNav from './components/AppNav.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppVideo from './components/AppVideo.vue';

import {store} from './store.js';

export default{
  
  data(){
    return{
      store,
    }
  },

  components:{
    AppNav,
    AppJumbo,
    AppVideo,
  }

}
</script>

<template>
  <div class="container">

    <AppNav></AppNav>

  </div>
  <AppJumbo></AppJumbo>
  <AppVideo></AppVideo>
    



 
</template>

<style lang="scss">

</style>