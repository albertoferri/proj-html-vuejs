<script>
export default {
  data() {
    return {
      items: [
        { immagine: '/assets/man.svg', num: '163', titolo: 'Concert' },
        { immagine: '/assets/rocket.svg', num: '145', titolo: 'happy clients' },
        { immagine: '/assets/trophy.svg', num: '72', titolo: 'music awards' },
        { immagine: '/assets/music.svg', num: '182', titolo: 'total songs' },
      ]
    }
  }
}


</script>

<template>
  <div class="container-fluid my-5">
    <div class="row py-5">
      <div class="col align-items-center d-flex flex-column gap-3" v-for="(item, index) in items" :key="index">
        <img class="img-fluid" :src="item.immagine" alt="Immagine">
        <div id="info" class="text-light text-uppercase d-flex justify-content-center flex-column align-items-center">
          <h2 class="m-0">{{ item.num }}</h2>
          <h5>{{ item.titolo }}</h5>
        </div>
      </div>
    </div>

  </div>
  </template>

<style scoped lang="scss">
@use '../styles/variables' as *;


.container-fluid{
  background-image: url('/assets/counter_parallax.jpg');
  background-size: cover;
}

.col{

  img{
    filter: invert(1);
    height: 50px;
  }

  h2{
    max-width: 180px;
  }

}




</style>
