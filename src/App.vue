<script>
import AppNav from './components/AppNav.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppVideo from './components/AppVideo.vue';
import AppGrid from './components/AppGrid.vue';
import AppHero from './components/AppHero.vue';

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
    AppGrid,
    AppHero
  }

}
</script>

<template>
  <div class="container">

    <AppNav></AppNav>

  </div>

  <AppJumbo></AppJumbo>
  <AppVideo></AppVideo>
  <AppGrid></AppGrid>
  <AppHero></AppHero>
    



 
</template>

<style lang="scss">

</style>