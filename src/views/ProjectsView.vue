<template>
  <h1>Projects</h1>
  <div class="container animate__animated animate__backInRight">
    <div class="projects-content">

      <div class="row d-flex justify-content-center my-3 mb-5 align-items-center">
        <div class="card m-4" v-for="project in getProjects()" :key="project">
          <img :src="project.image" alt="" />
          <div class="card__content">
            <p class="card__title">{{ project.name }}</p>
            <p class="card__description">
              {{ project.description }}
            </p>
            <div class="">
  
            </div>
            <a :href="project.gitHub" target="_blank">
            <button type="button" class=" btn buttonn">
                Github
                
              </button>
            </a>
            <a :href="project.netlify" target="_blank">
            <button type="button" class="btn buttonn">
                Netlify
                
              </button>
            </a>
          </div>
        </div>
  
        <!-- CLOSING THIS SECTION -->
        <!-- <div class="row my-3 grid gap-4" v-if="getProjects()">
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
        </div> -->
      </div>
    </div>
  </div>


  <Footer />
</template>

<script>
// import Spinner from '@/components/Spinner.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: { Footer},
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
.buttonn{
  margin: 5px;
  background-color: #2c3e50;
  color: white;
}
@media screen and (min-width: 768px) {
  .projects-content {
    margin-left: 250px;
    margin-bottom: 10rem;
  }
}
.card {
  position: relative;
  width: 300px;
  height: 250px;
  background: linear-gradient(-45deg, gold 40%, white 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card img {
  width: 18rem;
  fill: #333;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card:hover {
  transform: rotate(-5deg) scale(1.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(
    to bottom right,
    #000,
    #2c3e50,
    rgb(244, 233, 92)
  );
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card:hover .card__content {
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 1;
}

.card__title {
  margin: 0;
  font-size: 20px;
  color: #fff;
  font-weight: 700;
}

.card__description {
  margin: 5px 0 0;
  font-size: 14px;
  color: #fff;
  line-height: 1.2;
}

.card:hover img {
  scale: 0;
  transform: rotate(-45deg);
}
</style>
