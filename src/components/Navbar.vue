<template>
  <div class="sidenav" :class="{ 'active': isNavOpen , 'true':isNavOpen}" id="sidenav">
    <div class="containerLogo">
      <div class="logo" href="/">M L</div>
      <button class="toggle-btn" @click="toggleNav">
        <template v-if="!isNavOpen">☰</template> <!-- Display when closed -->
        <template v-else>✕</template> <!-- Display when opened -->
      </button>    </div>
    
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

<style>



</style>
