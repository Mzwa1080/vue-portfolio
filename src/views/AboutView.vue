<template>
  <div>
    <div class="row my-3">
      <h1 class="about-me">About Me</h1>

    </div>

    <div class="row my-3 row-box">
      <div class="col ">
        <img class="img-about animate__animated animate__bounceInUp animate__repeat-2"   src="https://i.ibb.co/JzG7Rrk/removed-bg.png" alt="">
      </div>

      <div class="col my-5 about animate__animated animate__zoomIn ">

        <p class="my-5" v-for="about in getAbout()" :key="about">
          {{ about }}
 
        </p>
      </div>
    </div>


  </div>
</template>

<script>

export default {
// returns the about changed value in the state
  methods : {
    getAbout(){
     return this.$store.state.about
    }
  },
  computed : {
    // gets the data from the store
    displayData(){
      return this.$store.dispatch('getData')
    }
  },
  // mounted, adds the data function in the page
  mounted(){
    this.displayData
  }


}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap');

h1, p{
  font-family: 'Lobster', sans-serif;
font-family: 'Londrina Solid', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Salsa', cursive;
}
.img-about{
  width: 70%;
}
p{
  color: black;
}

.about-me{
  font-size: 3rem;
  color: #42b983;

}

.about{
  font-size: 1.3rem;
}
.row-box{
  box-shadow: .2vw .2vw .2vw .2vw;
  color: #42b983;
}

</style>