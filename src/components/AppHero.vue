<script>
export default{

    
 
}


</script>

<template>

<div class="">
    <div id="jumbo" class="container-fluid pb-5">
        <img class="img-fluid" src="/assets/cms_parallax.jpg" alt="hero img">
        <div id="info">
            <h5 class="text-uppercase">instrumental rock</h5>
            <h1 class="display-3 text-uppercase text-light fw-bold">Album out now</h1>
            <button>READ MORE</button>
        </div>
    </div>
</div>

    
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

#jumbo{
    position: relative;

    #info{
        position: absolute;
        top: 50%;
        left: 10%;
        transform: translate(-10%, -50%);

        h5{
            color: $thatOrange;
        }
    }
}



</style>
