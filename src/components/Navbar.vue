<template>
    <div>
        <nav class="navbar d-flex  navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid ">
        <RouterLink to="/">
          <img
            class="img-fluid img-nav" src="https://i.ibb.co/yW0BcyV/Gold-Luxury-Initial-Circle-Logo.png" alt="logo"
          />
        </RouterLink>
        <button
          class="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse  justify-content-end navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link text-white"> Home </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link text-white"> About </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/resume" class="nav-link text-white"> Resume </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/projects" class="nav-link text-white"> Projects </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/testimonials" class="nav-link text-white"> Reviews </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link text-white"> Contact </RouterLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
    </div>
</template>

<script>
    export default {
        name : 'NavbarComp'
    }
</script>

<style scoped>

nav{
  box-shadow: .2vw .2vw .2vw .2vw;
  color: white;
  
}

</style>