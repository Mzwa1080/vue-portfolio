<template>
    <div>
        <nav class="navbar d-flex navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <RouterLink to="/">
          <img
            class="img-fluid img-nav" src="https://lh3.google.com/u/0/d/1Za5RgruZNfhzDcRmQ9cJNoPGEUgwr98D=w672-h504-p-k-nu-iv1" alt="logo"
          />
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse justify-content-end navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link "> Home </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link "> About </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/resume" class="nav-link "> Resume </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/projects" class="nav-link "> Projects </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/testimonials" class="nav-link "> Reviews </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/contact" class="nav-link "> Contact </RouterLink>
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