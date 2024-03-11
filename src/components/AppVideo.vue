<script>
export default{


 
}


</script>

<template>

<div class="container-fluid px-0">

    <img class="w-100" src="../../public/assets/Video-1536x541.jpg" alt="">
    <div id="text" class="d-flex flex-column align-items-center gap-2">
        <i class="fa-regular fa-circle-play"></i>
        <h2 class="text-uppercase text-light fw-bold display-3">new music video</h2>
    </div>
</div>
    
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;


.container-fluid{
    position: relative;

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
