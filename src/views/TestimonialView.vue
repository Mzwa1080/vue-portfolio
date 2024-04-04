<template>
  <div class="wrapper animate__animated animate__backInRight">
    <div class="row my-3">
      <h1>Reviews</h1>
    </div>

    <div class="row justify-content-center">
      <div class="col-10">
        <div v-if="testimonialData()" class="row">
          <div id="testimonialCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <!-- Loop through testimonialData and create carousel items -->
              <div v-for="(testimonial, index) in testimonialData()" :key="index" class="carousel-item" :class="{ 'active': index === 4 }">
                <div class="d-flex justify-content-center align-items-center" style="height: 500px;">
                  <img :src="testimonial.profile" loading="lazy" class="img-fluid" style="max-height: 80%; max-width: 80%;" :class="testimonial.name" alt="Profile Picture">
                </div>
                <div class="carousel-caption">
                  <p class="font-quotes-5">{{ testimonial.name }} {{ testimonial.surname }}</p>
                  <p class="font-quotes">{{ testimonial.quotes }}</p>
                </div>
              </div>
            </div>

            <!-- Carousel controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Footer from '@/components/Footer.vue';

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
  components: {Footer}
};
</script>

<style scoped>
.carousel-caption {
  position: absolute;
  bottom: 0;
  /* width: 80%; */
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black background */
  color: white;
  padding: 10px;
  text-align: center;
}

.font-quotes-5 {
  font-size: 1.2rem; /* Adjust as needed */
}

.font-quotes {
  font-size: .8rem; /* Adjust as needed */
} 

.wrapper {
  margin-left: 150px;
  margin-bottom: 5rem;
  overflow-y: hidden;
  overflow-x: hidden;
}

@media screen and (max-width: 768px) {
  .font-quotes {
    font-size: .6rem;   
  }
  .carousel-caption{
  color: white;
  padding: 5px;
  text-align: center;
  }
}
</style>
