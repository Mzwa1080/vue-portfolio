<template>
  <div class="content" >
    <div class="row justify-content-center align-items-center">
      <div class="col-md-12">
        <div class="circle">
          <img class="img-fluid" src="https://i.ibb.co/JzG7Rrk/removed-bg.png" alt="Mzwamadoda Louw">
        </div>
      </div>
    </div>


    <!-- <div class="row justify-content-center align-items-center"> -->
      <div class="col-md-12">
        <h1 class="text-content">Hi, I'm Mzwamadoda Louw</h1>
        <h4 class="text-content">I'm a Full Stack Web Developer</h4>
      </div>
    <!-- </div> -->


  </div>
</template>

<script>
export default {
  name: 'HomeView',
  props: {
    isNavOpen: Boolean,
    navWidth: String
  }
}
</script>

<style scoped>
.content {
  transition: margin-left 0.3s ease; /* Add transition for smooth animation */
  height: 100vh;
}
</style>
