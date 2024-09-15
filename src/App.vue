<template>
  <div id="app">
    <NavbarComp />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import NavbarComp from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: { NavbarComp, Footer },
  setup() {
    const navbar = ref(null);

    const handleScroll = () => {
      const scrolled = window.scrollY > 100; // Adjust scroll threshold as needed
      if (navbar.value) {
        if (scrolled) {
          navbar.value.classList.add('scrolled');
        } else {
          navbar.value.classList.remove('scrolled');
        }
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return { navbar };
  }
};
</script>
