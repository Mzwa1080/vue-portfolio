<template>

  <Navbar />
<main class="container-fluid">
    <div class="container">
      <router-view/>

    </div>

    <Footer />
  </main>
  
  
  </template>

<script>
import Navbar  from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
 export default {
  components : {
    Navbar,
    Footer
  }
 }

</script>

<style src="../src/assets/css/style.css" ></style> 
