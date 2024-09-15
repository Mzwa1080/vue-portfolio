<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container d-flex justify-content-between">
      <button
        class="navbar-toggler text-white"
        type="button"
        @click="toggleNav"
      >
        <template v-if="!isNavOpen">☰</template> <!-- Display when closed -->
        <template v-else>✕</template> <!-- Display when opened -->
      </button>

      <div class="collapse navbar-collapse" :class="{ show: isNavOpen }" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/resume">Education & Experience</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" to="/projects">Projects</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link dark-link" to="/testimonials">Reviews</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link dark-link" to="/contact">Contact Me</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  name: "NavbarComp",
  setup() {
    const isNavOpen = ref(false);

    const toggleNav = () => {
      isNavOpen.value = !isNavOpen.value;
    };

    return { isNavOpen, toggleNav };
  }
};
</script>

<style scoped>
/* Style for the navbar */
.navbar {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.navbar-nav .nav-link {
  color: white !important; /* Ensure text remains white */
}

.navbar-nav .nav-link:hover {
  color: gold !important; /* Change to gold on hover */
}

.nav-link.dark-link{
  color: #222831;
}

.navbar-toggler {
  border: none;
  color: white;
}

/* Ensure the navbar toggle button is aligned to the left */
@media (max-width: 992px) {
  .navbar-toggler {
    display: block;
    position: absolute;
    left: 10px; /* Align toggle to the left */
    top: 10px; /* Adjust to place it slightly below the top */
    z-index: 1;
    font-size: 24px; /* Adjust size */
  }

  .navbar-nav {
    flex-direction: column;
    align-items: center; /* Center the items in the dropdown */
  }

  .navbar-nav .nav-item {
    margin-bottom: 10px;
  }

  .collapse.show {
    background-color: #222831; /* Ensure background is consistent when expanded */
    position: absolute;
    width: 100%; /* Full width on mobile when expanded */
    top: 0px; /* Slight margin from the top */
    left: 0;
    padding: 1rem;
  }
}
</style>
