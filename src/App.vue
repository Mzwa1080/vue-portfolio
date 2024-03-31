<template>
    <Navbar :isNavOpen="isNavOpen" @toggleNav="toggleNav"/>

    <router-view />


    <Footer :footerPosition="footerPosition" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { ref } from 'vue';

export default {
  components: {
    Navbar,
    Footer
  },
  setup() {
    const isNavOpen = ref(false);
    const navWidth = ref('200px');
    const footerPosition = ref('0');

    const toggleNav = () => {
      isNavOpen.value = !isNavOpen.value;
      footerPosition.value = isNavOpen.value ? '200px' : '0';
    };

    return { isNavOpen, navWidth, toggleNav, footerPosition };
  }
}
</script>

<style src="../src/assets/css/style.css">

</style>
