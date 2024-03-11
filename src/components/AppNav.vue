<script>

export default{

  
}

</script>

<template>

<nav class="d-flex justify-content-between py-3">
  <img class="img-fluid" src="../../public/assets/Logo.png" alt="">


  <ul class="d-flex align-items-center gap-4 text-uppercase text-light ">
    <li>home</li>
    <li>blog</li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">events</a>
      <ul class="dropdown-menu dropdown-menu-dark rounded-0 ">
        <li><a class="dropdown-item" href="#">choral music</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">concert brand</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">opera concerts</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">symphony orchestra</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">family concerts</a></li>
      </ul>
    </li>
    <li>gallery</li>
    <li>about us</li>
    <li>contact us</li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">shop</a>
      <ul class="dropdown-menu dropdown-menu-dark rounded-0">
        <li><a class="dropdown-item" href="#">vynil</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">cd</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">merchandising</a></li>
      </ul>
    </li>
    <li><img src="../../public/assets/lens-bold.svg" alt="search"></li>
  </ul>

</nav>
  
  
</template>

<style lang="scss">
@use '../styles/variables' as *;

li img{
  filter: invert(1);
}


li{
  position: relative;

  font-weight: 500;

  &:hover,
  .dropdown-menu a:hover{
    color: $thatOrange;
    cursor: pointer;
  }

  img:hover{
    color: #0d78f3;
  }

  .nav-item .nav-link.show{
    position: absolute;
    inset: 19px auto auto 0px;
  }
  
}




</style>
