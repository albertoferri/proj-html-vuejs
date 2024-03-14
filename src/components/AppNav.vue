<script>

export default{

  
}

</script>

<template>

<nav class="d-flex justify-content-between  py-3">
  <div>

    <img class="img-fluid" src="/assets/Logo.png" alt="">
  </div>

  <div class="d-flex align-items-center ">
    
    <button class="navbar-toggler d-md-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
      <i class="fa-solid fa-bars text-light"></i>
    </button>
  
    <div class="collapse navbar-collapse d-md-flex" id="navbarMenu">
      <ul id="navbarList" class="d-flex align-items-center gap-4 text-uppercase text-light flex-column flex-lg-row">
        <li>home</li>
        <li>blog</li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">events</a>
          <ul class="list dropdown-menu dropdown-menu-dark rounded-0 mt-3">
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
          <ul class="list dropdown-menu dropdown-menu-dark rounded-0 mt-3">
            <li><a class="dropdown-item" href="#">vynil</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">cd</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">merchandising</a></li>
          </ul>
        </li>
        <li><i class="fa-solid fa-magnifying-glass"></i></li>
      </ul>
  
    </div>
  </div>

</nav>
  
  
</template>

<style scoped lang="scss">
@use '../styles/variables' as *;

nav{

  height: 63px;


  .list{
    background-color: #212529;
  }
  
  li{
    position: relative;
    font-weight: 500;
    
    &:hover,
    .dropdown-menu a:hover{
      color: $thatOrange;
      cursor: pointer;
    }
  
    img{
      filter: invert(1);
    }
  
    img:hover{
      color: #0d78f3;
    }
  
    .nav-item .nav-link.show{
      position: absolute;
      inset: 19px auto auto 0px;
    }
    
  }
}


@media (max-width: 992px) {


  nav{
    position: relative;
  }


  #navbarList {
    position: absolute;
    top: 100%;  /* posiziona la lista sotto al pulsante */
    left: 0;
    right: 0;
  }
}











</style>
