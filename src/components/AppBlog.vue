<script>
import {store} from '../store.js';

export default {
  data() {
    return {
      store,
      comp: store.blog,
      image: [
        "/assets/instagram_img1.jpg",
        "/assets/instagram_img2.jpg",
        "/assets/instagram_img3.jpg",
        "/assets/instagram_img4.jpg",
        "/assets/instagram_img5.jpg",
        "/assets/instagram_img6.jpg",
        "/assets/instagram_img7.jpg",
        "/assets/instagram_img8.jpg",
        "/assets/instagram_img9.jpg",
        "/assets/instagram_img10.jpg",
        "/assets/instagram_img1.jpg",
        "/assets/instagram_img2.jpg",
        "/assets/instagram_img3.jpg",
        "/assets/instagram_img4.jpg",
        "/assets/instagram_img5.jpg",
        "/assets/instagram_img6.jpg",
        "/assets/instagram_img7.jpg",
        "/assets/instagram_img8.jpg",
        "/assets/instagram_img9.jpg",
        "/assets/instagram_img10.jpg"
      ],
      visibleImages: [],
      currentIndex: 0,
    };
  }
};

</script>

<template>

<div class="row row-cols-3 justify-content-center py-5 ">
    
    <div class="event col-4 d-flex flex-column text-light bg-black gap-3" v-for="(item, index) in comp" :key="index">
        <img class="img-fluid" :src="item.src" alt="Image">
        <h4 class="text-uppercase m-0">{{ item.titolo }}</h4>
        <span><i class="fa-solid fa-calendar-days"></i> {{ item.data }}</span>
        <p>{{ item.descrizione }}</p>
    </div>

</div>

<div class="py-5 container-fluid">
    <div class="row show">
      <div class="slide-container">
        <div class="slide col px-0" v-for="(imgUrl, index) in image" :key="index">
          <img class="img-fluid" :src="imgUrl" alt="Immagine">
        </div>
      </div>
    </div>
</div>

    
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixin.scss' as *;

.event {
  span {
    color: $thatOrange;
  }
}
.show{
    overflow: hidden;
    white-space: nowrap;
    position: relative;
}

.show:before,
.show:after {
  position: absolute;
  top: 0;
  width: 250px;
  height: 100%;
  content: "";
  z-index: 2;
}

.show:before {
  left: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), black);
}

.show:after {
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), black);
}

.slide-container {
    display: flex;
    animation: slide 35s linear infinite;
}

.slide {
  flex: 0 0 auto;
}

@keyframes slide {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}
</style>