<template>
  <div class="content animate__animated animate__backInUp" >
    <div class="row justify-content-center">
      <div class="col-md-12">
          <img class="mzwa" src="https://i.ibb.co/JzG7Rrk/removed-bg.png" alt="Mzwamadoda Louw">
      </div>
      
          <div class="col-md-12">
            <h1 class="text-content">Hi, I'm Mzwamadoda Louw</h1>
            <h4 class="text-content">I'm a Full Stack Web Developer | Cisco Networking Technician</h4>
          </div>

    </div>

    <!-- <div class="row justify-content-center align-items-center"> -->
    <!-- </div> -->


  </div>


  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
    name: 'HomeView',
    components: { Footer }
}
</script>

<style >

.mzwa{
  max-width: 100%;
  height: 450px;
}
.content{
  margin-bottom: 5rem;
}

</style>
