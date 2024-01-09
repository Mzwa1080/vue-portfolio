<template>
  <div class="row my-3">
    <h1>Reviews</h1>
  </div>

  <div class="row">
    <div class="card" v-for="review in testimonialData()" :key="review" style="width: 18rem;" >
      <img  :src=review.profile class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ review.name }}</h5>
        <p class="card-text">
        {{ review.quotes }}
        </p>
      </div>

      <h1>

          <!-- {{ review }} -->
      </h1>
    </div>
  </div>
</template>

<script>
export default {

    methods : {
        testimonialData(){
            return this.$store.state.testimonials
        }
    },

    computed : {
        getTestimonials (){
            return this.$store.dispatch('getData')
        }
    },

    mounted (){
        this.getTestimonials
    }


};
</script>

<style scoped></style>
