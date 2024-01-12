<template>
  <div>
    <div class="container">
      <div class="row my-3">
        <h1>Resume</h1>
      </div>

      <div v-if="skills" class="row my-5 grid gap-3">
        <div          
          class="col animate__animated animate__zoomInDown animate__repeat-2 skills rounded p-3 mb-5"
        >
          <h2 class="mt-2">Skills</h2>
          <hr />
          <ul v-for="skill in skills()" :key="skill">
            <!-- <li> -->
            {{
              skill.title
            }}
            <!-- </li>  -->
          </ul>
        </div>

        <div
          class="col education animate__animated animate__zoomInUp animate__repeat-2 p-3 mb-5 bg-body-tertiary rounded"
        >
          <h2 class="mt-2">Education background</h2>
          <hr />
          <p v-for="education in getEducation()" :key="education">
            {{ education.year }}
            {{ education.description }}
            {{ education.place }}
            {{ education.certificate }}
          </p>
        </div>
      </div>

      <div class="row" v-else>
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner.vue";

export default {
  methods: {
    // get the state value of each variable
    getEducation() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills;
    },
  },
  computed: {
    displayEducationData() {
      return this.$store.dispatch("getData");
    },
  },
  mounted() {
    this.displayEducationData;
    // this.getSkills
  },
  components: { Spinner },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap");
h1,
h2 {
  font-family: "Lobster", sans-serif;
  font-family: "Londrina Solid", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Salsa", cursive;
}

p,
ul {
  font-family: "Lobster", sans-serif;
  font-family: "Londrina Solid", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Salsa", cursive;
}
h1 {
  color: #42b983;
}
.skills {
  background-color: #42b983;
  box-shadow: 0.2vw 0.2vw 4vw 1vw;
}
.education {
  box-shadow: 0.2vw 0.2vw 2vw 1vw;
}
</style>
