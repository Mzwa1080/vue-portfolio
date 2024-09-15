<template>
  <div class=" animate__animated animate__backInRight">
    <div class="">

      <div class="row  info">
        <!-- Education Section -->
        <div class="col-lg-7 left-section">
        <h1 class="underlined">Education</h1>
        <div class="education-timeline">
          <ul>
            <li v-for="education in getEducation()" :key="education.id" :style="{ '--accent-color': education.accentColor }">
              <div class="date">{{ education.year }}</div>
              <div class="title">{{ education.place }}</div>
              <div class="descr">{{ education.description }}</div>
            </li>
          </ul>
        </div>
      </div>
  
        <!-- Work Experience Section -->
        <div class="col-lg-5 right-section">
          <h1>Work Experience</h1>
          <div class="card m-4">
            <div class="card-header">Life Choices Academy</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>
                  Role : Full Stack Web Developer <br> <br />
                  Year : 2024 April - Present <br> <br />
                  Responsibilities : Building dynamic web application, using both front-end and back-end technologies.
                </p>
              </blockquote>
            </div>
          </div>
          <div class="card m-4">
            <div class="card-header">CodeTelligence Academy</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>
                  Role : High School Coding Mentor <br> <br />
                  Year : 2023 Feb - 2023 Sep <br> <br />
                  Responsibilities : Delivering content to High School Learners. Compiling weekly content, quizzes, and projects.
                </p>
              </blockquote>
            </div>
          </div>
          <div class="card m-4">
            <div class="card-header">Independent Contractor</div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>
                  Role : Retail Trader <br> <br>
                  Year : 2019 Sep - 2023 Jan <br> <br />
                  Responsibilities : Swing Trading, Day Trading (Scalping and Regular), Applied proper risk management strategies.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skills Section -->
     <div class="">

      <div class="row info skills skills-section d-flex flex-column align-items-center">
      <h1 class="my-4 underlined"> My Skills </h1>
      <div v-if="skills" class="d-flex flex-wrap justify-content-center">
        <div class="cardSkills m-4 text-center" v-for="skill in skills()" :key="skill">
          <img class="mt-2" height="60%" width="80%" :src="skill.img" alt="Skill Icon" />
          <p>{{ skill.title }}</p>
        </div>
      </div>
    </div>

     </div>

  </div>


</template>

<script>

export default {
  methods: {
    getEducation() {
      return this.$store.state.education;
    },
    skills() {
      return this.$store.state.skills;
    },
  },
  mounted() {
    this.$store.dispatch("getData");
  },
};
</script>

<style scoped>
.info {
  margin: 0;
}

.skills {
  background-color: #222831;
  padding: 2rem;
}

.left-section, .right-section {
  padding: 2rem;
  box-sizing: border-box; /* Ensure padding is included in the width calculation */
}

.left-section {
  background-color: #222831; /* Dark background color */
  color: #fff; /* White text color */
  flex: 0 0 60%;
  margin: 0;
}
.underlined{
  color: gold;
}

.right-section {
  background-color: #eeeeee; /* Light background color */
  /* color: #000; Black text color */
  flex: 0 0 40%;
  margin: 0;
}

.card {
  border-radius: 26px;
  box-shadow: 35px 35px 68px 0px rgba(222, 219, 28, 0.518),
    inset -8px -8px 16px 0px rgba(91, 115, 187, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  transition: all 0.3s;
  background-color: transparent;
  color: black;
}

.cardSkills {
  width: 200px;
  height: 200px;
  backdrop-filter: blur(7px);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 26px;
  box-shadow: 35px 35px 68px 0px rgba(255, 253, 157, 0.2),
    inset -8px -8px 16px 0px rgba(173, 175, 181, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  transition: all 0.3s;
  cursor: pointer;
}

.cardSkills:hover {
  box-shadow: 35px 35px 68px 0px rgba(255, 253, 157, 0.214);
}

.cardSkills:active {
  transform: scale(0.95);
  border: 1px solid gold;
}

ul {
  display: grid;
  grid-template-columns: 1fr;
  margin: 0;
  padding: 0;
  list-style: none;
}

ul li {
  display: grid;
  grid-template-rows: min-content min-content min-content;
  margin-bottom: 2rem;
  padding: 1.5rem;
  /* background: #333; Adjust to fit the dark theme */
  color: #fff;
  border-radius: 8px;
}

.date {
  background-color: var(--accent-color);
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  text-align: center;
  border-radius: 8px;
  padding: 1rem;
}

.title, .descr {
  background: #222831; /* Dark background color */
  padding: 1rem;
  border-radius: 8px;
}

.title {
  font-weight: 500;
}

.descr {
  font-weight: 300;
}

/* @media (min-width: 40rem) {
  .info {
    display: flex;
    /* flex-wrap: nowrap;
    justify-content: space-between; 
  }

  .left-section, .right-section {
    flex: 1;
    min-width: 0;  Ensure no overflow issues 
  }
}  */
</style>
