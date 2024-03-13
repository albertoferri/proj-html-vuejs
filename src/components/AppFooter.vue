<script>
import {store} from '../store.js';

export default{

data(){
    return{
        store,

        // importati da store.js
        comp_one: store.bookings,
        comp_two: store.informations,
        comp_three: store.support,
    }
}

}

</script>


<template>

<footer>

  <div class="container">

    <div class="row row-cols-4  py-5">
    
      <!-- booking info -->
      <ul class="col"> 
        <h4 class="fw-bold text-light">BOOKINGS</h4>
        <li v-for="(item, index) in comp_one" :key="'one' + index"  class="text-capitalize">
          <p class="hover" v-if="item.text">{{ item.text }}</p>
          <div v-else class="d-flex gap-3">
              <div v-for="(icon, iconIndex) in item.social" :key="'icon' + iconIndex" v-html="icon" class="social-icon"></div>
          </div>
        </li>
      </ul>

    
      <!-- information -->
      <ul class="col"> <h4 class="fw-bold text-light">INFORMATION</h4>
        <li v-for="(item, index) in comp_two" :key="'two' + index" class="text-capitalize hover">
          {{ item.text }}
        </li>
      </ul>
    
      <!-- support info -->
      <ul class="col"> <h4 class="fw-bold text-light">SUPPORT</h4>
        <li v-for="(item, index) in comp_three" :key="'three' + index" class="text-capitalize hover">
          {{ item.text }}
        </li>
      </ul>
    
      <!-- form newsletter -->
      <form class="d-flex flex-column container">
          <h4 class="fw-bold text-light">NEWSLETTER</h4>
          <input class="bg-transparent border-1 p-1 w-75" type="email" id="email" placeholder="Email" name="email"><br>
          <textarea class="bg-transparent border-1 p-1 w-75" placeholder="Message" id="message" name="message"></textarea><br>
          <button class="fw-bold w-50" type="submit">Send Message</button>
      </form>
    
    </div>
  </div>

  <hr class="text-light">
  
  <!-- footer bottom -->
  <div class="container">
    <div class="row justify-content-center">
  
        <div class="col-6">
            <p class="text-center text-light"><i class="fa-regular fa-copyright"></i> 2024 All Rights Reserved, Developed By Alberto Ferri</p>
        </div>
  
    </div>
  </div>


</footer>

  
</template>
<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixin.scss' as *;

.row{

  span, li,h4{
      cursor: pointer;
  }

  .social-icon{
    color: inherit;

    &:hover{
      color: $thatOrange;
    }
  }

}


</style>
