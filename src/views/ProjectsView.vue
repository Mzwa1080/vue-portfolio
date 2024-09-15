<template>
  <div class="projects-container animate__animated animate__backInRight">
    <div class="row no-gutters">
      <!-- Left Side - Project Details -->
      <div class="col-lg-7 left-section">
        <div class="project-details">
          <div v-if="selectedProject">
            <h1><span class="underlined">{{ selectedProject.name }}</span></h1>
            <div class="card">
              <img :src="selectedProject.image" alt="Project Image" />
              <div class="card__content text-center">
                <p class="card__description">{{ selectedProject.description }}</p>
                <a :href="selectedProject.gitHub" target="_blank">
            <button type="button" class=" btn button">
                Github
                
              </button>
            </a>
            <a :href="selectedProject.netlify" target="_blank">
            <button type="button" class="btn button">
                Netlify
                
              </button>
            </a>
              </div>
            </div>
          </div>
          <div v-else>
            <p>Select a project to see details</p>
          </div>
        </div>
      </div>

      <!-- Right Side - Project Names -->
      <div class="col-lg-5 right-section">
        <div class="project-list">
          <div
            class="project-item"
            v-for="project in getProjects()"
            :key="project.name"
            @mouseover="selectProject(project)"
            @click="flipCard(project)"
          >
            {{ project.name }}
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      selectedProject: null,
      flippedProject: null,
    };
  },
  methods: {
    getProjects() {
      return this.$store.state.projects;
    },
    selectProject(project) {
      this.selectedProject = project;
    },
    flipCard(project) {
      if (this.flippedProject === project) {
        this.flippedProject = null;
      } else {
        this.flippedProject = project;
      }
    },
  },
  created() {
    const projects = this.getProjects();
    if (projects.length > 0) {
      this.selectedProject = projects[0];  // Set the first project as the default
    }
  },
};
</script>

<style scoped>
.projects-container {
  display: flex;
  flex-wrap: wrap;
}

.left-section {
  width: 60%; /* Fixed width for the left section */
  background-color: #222831;
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right-section {
  flex: 0 0 40%; /* Right section is always 40% of the page */
  background-color: #eeeeee;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card {
  position: relative;
  width: 100%;
  max-width: 100%; /* Card takes full width of left section */
  margin: 0 auto;
  background: linear-gradient(-45deg, gold 40%, white 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card img {
  width: 80%; /* Default image width */
  height: auto;
  transition: width 0.6s ease-in-out;
}

.card:hover img {
  width: 100%; /* Image expands to full width on hover */
}
.underlined {
  color: gold;
}

.project-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  position: relative;
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(-45deg, gold 40%, white 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card img {
  width: 80%;
  height: 80%;
}

.card__content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the content */
  display: flex;
  flex-direction: column; /* Stack the content vertically */
  justify-content: center;
  align-items: center;
  text-align: center; /* Center text */
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background: linear-gradient(to bottom right, #000, #2c3e50, rgb(244, 233, 92));
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card__description {
  color: #fff;
  font-size: 14px;
  margin-bottom: 20px; /* Add space between text and buttons */
}

button {
  margin-top: 10px; /* Space between the buttons */
}



.card:hover .card__content {
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 1;
}

/* .card__description {
  color: #fff;
  font-size: 14px;
  text-align: center;
} */

.project-list {
  display: flex;
  flex-direction: column;
}

.project-item {
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.project-item:hover {
  background-color: #f0f0f0;
}

@media (max-width: 860px) {
  .left-section, .right-section {
    flex: 0 0 100%;
  }
}
</style>
