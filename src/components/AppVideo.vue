<script>
export default {
  data() {
    return {
      isPlaying: false,
    };
  },
  methods: {
    playVideo() {
      this.isPlaying = true;
    },
  },
};

</script>

<template>
    <div class="container-fluid px-0">
      <img v-if="!isPlaying" class="w-100" src="/assets/Video-1536x541.jpg" alt="">
      <iframe v-else id="myVideo" class="w-100 h-100" src="https://www.youtube.com/embed/pYnLO7MVKno" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div v-if="!isPlaying" id="text" class="d-flex flex-column align-items-center gap-2">
        <i id="play-icon" class="fa-regular fa-circle-play" @click="playVideo"></i>
        <h2 class="text-uppercase text-light fw-bold display-3">new music video</h2>
      </div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;


.container-fluid{
    position: relative;
    height: 590px;

    #text{

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        
        .fa-circle-play{
            color: $thatOrange;
            font-size: 90px;
            cursor: pointer;
        }
    }
   
}



</style>
