<template>
  <div class="row my-3">
    <h1>Projects</h1>

    <div class="row my-3 grid gap-4" v-if="getProjects()">
      <div
        class="card animate__animated animate__zoomIn animate__repeat-2 shadow p-3 mb-5 bgg rounded"
        v-for="project in getProjects()"
        :key="project"
        style="width: 18rem"
      >
        <img :src="project.image" class="card-img-top" alt="..." />
        <div class="card-body">
          <div class="row my-3">
            <span>
              <h5 class="card-title">{{ project.name  }} </h5>
            </span>
            <hr />
          </div>
          <div class="row my-3">
            <p class="card-text">{{ project.description }}</p>
          </div>
          <div class="row  my-3">
            <div class="grid ">
              <a :href="project.gitHub"  class=" btn myBtns">Github</a>
              <a :href="project.netlify" class=" btn myBtns">Netlify</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  components : {
    Spinner
  },
  methods: {
    getProjects() {
      return this.$store.state.projects;
    },
  },

  computed: {
    getData() {
      return this.$store.dispatch("getData");
    },
  },
  mounted() {
    this.getData;
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap");

h1 {
  color: #42b983;
  font-family: "Lobster", sans-serif;
  font-family: "Londrina Solid", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Salsa", cursive;
}

.bgg {
  box-shadow: 0.2vw 0.2vw 0.2vw 0.2vw;
  color: black;
}

.btn{
  background-color: #42b983;
}
</style>
