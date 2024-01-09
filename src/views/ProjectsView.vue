<template>
  <div class="row my-3">

    <h1>Projects</h1>


        <div class="row my-3">
          <div class="card " v-for="project in getProjects()" :key="project" style="width: 18rem">
            <img :src='project.image' class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text "> {{ project.description }}  </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

  </div>



</template>

<script>
export default {

    methods : {
        getProjects(){
            return this.$store.state.projects
        }
    },

    computed : {
        getData(){
            return this.$store.dispatch('getData')
        }
    },
    mounted() {
        this.getData
    }

};
</script>

<style scoped>

</style>
