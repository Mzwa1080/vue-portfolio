<template>

  
    <div class="row ">

      <div class="content">
  <div class="row justify-content-center align-items-center"> 
    <div class="col-md-12 ">
      <div class="circle">
        <img class="img-fluid" src="https://i.ibb.co/JzG7Rrk/removed-bg.png" alt="Mzwamadoda Louw">
      </div>
    </div>
  </div>
  <div class="row justify-content-center align-items-center"> 
    <div class="col-md-12 "> 
      <h1>I'm Mzwamadoda Louw</h1>
    </div>
  </div>
</div>


    </div>


</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {  },

}
</script>

<style scoped>


.content {
   padding-top: 20px; 
   transition: padding-left 0.5s; /* Add transition for smooth effect */

}



@media screen and (max-width: 767px) {
  .content {
  /* margin-left: 200px; */
   margin-top: 50px; /*Add padding for spacing */
}
}


/* Image styles */
/* .img-fluid {
  width: 100%;
  height: auto;
  object-fit: cover;
} */

</style>
