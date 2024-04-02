<template>
  <div class="row my-3">
    <h1>Reviews</h1>
  </div>


  <div v-if="testimonialData" class="col">


    <div class="row" :key="review">
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>

    <div class="carousel-inner">
      <!-- Loop through testimonialData() and create carousel items -->
      <div v-for="(review, index) in testimonialData()" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
        <img :src="review.image" class="d-block w-100" :alt="'Slide ' + (index + 1)">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ review.title }}</h5>
          <p>{{ review.description }}</p>
        </div>
      </div>
    </div>

    <!-- Carousel controls -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>

</div>


    <!-- <div class="row  gap-4"> 
      <div class="card col-2 shadow p-3 mb-5  " :class="review.name" v-for="review in testimonialData()" :key="review" style="width: 18rem;" >
        <img loading="lazy" :src=review.profile class="card-img-top h-50" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ review.name }} {{ review.surname }} </h5>
          <p class="card-text text-font">
          {{ review.quotes }}
          </p>
          
        </div>
  
      </div>
    </div> -->

</template>

<script>

export default {
    methods: {
        testimonialData() {
            return this.$store.state.testimonials;
        }
    },
    computed: {
        getTestimonials() {
            return this.$store.dispatch('getData');
        }
    },
    mounted() {
        this.getTestimonials;
    },
    components: {  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap");

h1{
  font-family: "Lobster", sans-serif;
  font-family: "Londrina Solid", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Salsa", cursive;
  color: #42b983;

}
h5{
  font-family: "Lobster", sans-serif;
  font-family: "Londrina Solid", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Salsa", cursive;
}
.text-font{
  font-size: 10px;
  font-weight: bolder;
  font-family: "Lobster", sans-serif;
  font-family: "Londrina Solid", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Salsa", cursive;
}

.Mzwakhe{
  display: inline-block;
  margin: 0 0.5rem;

  animation: slideInLeft; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
}
.Damon{
  display: inline-block;
  margin: 0 0.5rem;

  animation: slideInDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
}
.Joel{
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounceIn; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
}

.Taryn-lee{
  display: inline-block;
  margin: 0 0.5rem;

  animation: slideInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
}
.Anathi{
  display: inline-block;
  margin: 0 0.5rem;

  animation: slideInUp; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
}
.Ghamzah{
  display: inline-block;
  margin: 0 0.5rem;

  animation: lightSpeedInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s;
}
</style>
