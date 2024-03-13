<script>
import AppNav from './components/AppNav.vue';
import AppJumbo from './components/AppJumbo.vue';
import AppVideo from './components/AppVideo.vue';
import AppGrid from './components/AppGrid.vue';
import AppHero from './components/AppHero.vue';
import AppScore from './components/AppScore.vue';
import AppBlog from './components/AppBlog.vue';
import AppFooter from './components/AppFooter.vue';

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
    AppHero,
    AppScore,
    AppBlog,
    AppFooter,
  }

}
</script>

<template>
  <div class="container-lg container-sm-fluid">

    <AppNav></AppNav>

  </div>

  <AppJumbo></AppJumbo>
  <AppVideo></AppVideo>
  <AppGrid></AppGrid>
  <AppHero></AppHero>
  <AppScore></AppScore>
  <AppBlog></AppBlog>
  <AppFooter></AppFooter>
    



 
</template>

<style lang="scss">

</style>