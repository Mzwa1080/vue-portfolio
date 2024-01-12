<template>
  <div >

    <div class="row vh-100 my-5">
      <div class="col  animate__animated animate__fadeInLeft">
        <img class="img-fluid" src="https://i.ibb.co/6Y1fPHv/DSC-0270-removebg-preview.png" alt="">
      </div>

      <div class="col welcome">
        
        <h2 class=" hi   me-5 animate__animated animate__fadeInRight">Hi, Welcome</h2> <br>
      
        <h2 class=" to center animate__animated animate__fadeInLeft">To</h2>
      
      
      <h2 class=" hi mt-5 animate__animated animate__fadeInRight"> 

        Mzwamadoda Louw's 

      </h2> <br>

      <h2 class="animate__animated animate__fadeInLeft">
        <span > Portfolio</span>
        
      </h2>

         <!-- {{ $store.state.about }} -->

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
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap');

h2{
  font-family: 'Lobster', sans-serif;
font-family: 'Londrina Solid', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Salsa', cursive;
}

.hi{
  font-size: 5em;
  color: #42b983;

}
.to{
  font-size: 3rem;
}

@media screen and (width = 300px) {
  .hi, .to {
    font-size: 1rem;
  }
}

</style>
