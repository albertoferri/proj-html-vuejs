<script>
import AppNav from './components/AppNav.vue';
import AppJumbo from './components/AppJumbo.vue';

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
  }

}
</script>

<template>
  <div class="container">

    <AppNav></AppNav>

  </div>
  <AppJumbo></AppJumbo>
    



 
</template>

<style lang="scss">

</style>