<script>
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
    
            <div id="info" class="col-6 d-flex flex-column gap-3 text-white text-uppercase pb-5">
                <h5 class="text-center fw-bold">Who we are</h5>
                <h2 class="text-center display-2 fw-bold">sense the jazz</h2>
                <p class="text-center text-capitalize">
                    The Story Of Jazz And Blues Society Is The Story Of Determinationr Passion, Idealism, Community, And Of Course, Music. Founded In 1985 And Incorporated In 1986, As A Community Based, Not-For-Profit, Charitable Arts Organization Located In Vancouver, British Columbia, The Society, From The Very Beginning, Has Worked Diligently To Establish Vancouver As A Centre For The Creation And Exchange Of Sounds And Ideas Between The Local, National And International Music Communities.
                </p>
                <div class="text-center fs-3"><button>read more</button></div>
            </div>
        </div>
    </div>

    
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;
@use '../styles/mixin.scss' as *;

.row{

    #info{
        margin: 200px 0 0 0;

        @media (max-width: 1200px) {
            margin-top: 50px;
        }
    }

    h5{
        color: $thatOrange;
    }
}


</style>
