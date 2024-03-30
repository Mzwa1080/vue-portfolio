<template>
  <Navbar :isNavOpen="isNavOpen" @toggleNav="toggleNav"/>

  <div class="container main" :style="{ 'padding-left': isNavOpen ? navWidth : '0' }">
    <router-view></router-view>
  </div>

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
    const footerPosition = ref('100vh');

    const toggleNav = () => {
      isNavOpen.value = !isNavOpen.value;
      footerPosition.value = isNavOpen.value ? 'calc(100vh - 200px)' : '100vh';
    };

    return { isNavOpen, navWidth, toggleNav, footerPosition };
  }
}
</script>

<style src="../src/assets/css/style.css">

</style>
