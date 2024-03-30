<template>
  <div class="sidenav" :class="{ 'active': isNavOpen }" id="sidenav">
    <div class="container">
      <div class="logo">Mzwamadoda Louw</div>
      <button class="toggle-btn" @click="toggleNav">☰</button>
    </div>
    <hr>
    <router-link to="/">Home</router-link>
    <hr>
    <router-link to="/about">About</router-link>
    <hr>
    <router-link to="/resume">Resume</router-link>
    <hr>
    <router-link to="/projects">Projects</router-link>
    <hr>
    <router-link to="/testimonials">Testimonials</router-link>
    <hr>
    <router-link to="/contact">Contact Me</router-link>
    <hr>
 </div>
</template>

<script>
import EventBus from '../event-bus';
import { ref } from 'vue';

export default {
  name: 'NavbarComp',
  setup() {
    const isNavOpen = ref(false);

    const toggleNav = () => {
      isNavOpen.value = !isNavOpen.value;
      // Emit an event with the sidebar height
      EventBus.$emit('sidebar-height', isNavOpen.value ? '100vh' : 'auto');
    };

    return { isNavOpen, toggleNav };
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20rem;
}

.logo {
  font-size: 150%;
  color: transparent; /* Transparent text */
  background: linear-gradient(to right, white, gold, black); /* Color gradient */
  -webkit-background-clip: text; /* Clip text to the background */
  animation: flowColors 5s linear infinite; /* Animation */
}

.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0; /* Always visible on bigger screens */
  background: linear-gradient(to bottom right, #ffffff, #000000);
  padding-top: 20px;
}

.sidenav a {
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  color: white;
  display: block;
  transition: all 0.3s ease-in-out;
}

.sidenav a:hover {
  color: gold;
  font-size: 2rem;
  transform: translateX(40px);
  transform: translateY(-10px);
}

.toggle-btn {
  display: none;
  font-weight: 900;
  position: fixed;
  top: 10;
  left:10;
  padding: 1rem;
}

@keyframes flowColors {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

@media screen and (max-width: 768px) {
  .sidenav {
    left: -200px; /* Initially hidden for small screens */
    transition: left 0.5s; /* Add transition for toggle effect */
  }

  .toggle-btn {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 2;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 24px;
    color: #fff;
  }

  .sidenav.active {
    left: 0; /* Slide in when active for small screens */
  }
}
</style>
