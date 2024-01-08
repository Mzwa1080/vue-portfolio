<template>
  <div>
    <div class="row mt-3">
      <h1>About Me</h1>

    </div>

    <div class="row my-5">
      <div class="col">
        <img class="img-about" src="https://lh3.google.com/u/0/d/1XG2Z0x68aOR8lfdKuAl3EQxGUmKMH7WS=w2000-h1628-iv1" alt="">
      </div>

      <div class="col">

        <p v-for="about in getAbout()" :key="about">
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
.img-about{
  width: 20%;
}


</style>