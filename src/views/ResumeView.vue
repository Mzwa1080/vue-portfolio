<template>
  <div class="container animate__animated animate__backInRight">
    <div class="row mt-5 info mb-5 pb-5">
      <h1 class="mb-5"><u> Education & Experience</u></h1>

      <ul>
        <li
          v-for="education in getEducation()"
          :key="education.id"
          :style="{ '--accent-color': education.accentColor }"
        >
          <div class="date">{{ education.year }}</div>
          <div class="title">{{ education.place }}</div>
          <div class="descr">{{ education.description }}</div>
        </li>
      </ul>
    </div>

    <div class="row info d-flex justify-content-center">
      <h1>Work Experience</h1>
      <div class="card col-md-6 m-4">
        <div class="card-header">Life Choices Academy</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              Role : LC Studio Intern <br> <br />
              Year : 2024 April - Present <br> <br />

              Responsibilities : Building dynamic web application, using both front-end and back-end technologies.
            
            </p>
            
          </blockquote>
        </div>
      </div>
      <div class="card col-md-6 m-4">
        <div class="card-header">CodeTelligence Academy</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              Role : High School Coding Mentor <br> <br />
              Year : 2023 Feb - 2023 Sep <br> <br />

              Responsibilities : Delivering content to High School Learners.
              Compiling weekly content, quizzes and projects.
              Reason : The working environment didn't allow me to grow.
            </p>
            
          </blockquote>
        </div>
      </div>

      <div class="card col-md-6 m-4">
        <div class="card-header">Ntinga Information Systems</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              Role : General Assistant <br> <br>
            Year : 2021 Nov - 2022 Nov <br> <br>
  
            Responsibilities : Installing cameras and troubleshooting networks. | Assisting on picking and packing, computer components and delivery.
            Reason to leave : Working environment was slow paced and chilled, not suitable for my working style.

          </p>
            
          </blockquote>
        </div>
      </div>

      <div class="card col-md-6 m-4">
        <div class="card-header">Nchimbi Digital Studios</div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>
              Role : Phototgrapher & Videographer <br> <br>
            Year : 2019 Feb - 2021 Oct  <br> <br>
  
            Responsibilities : Operate  video cameras, including DSLRs and camcorders.
Utilize camera movements, tilting, zooming, and lighting, to enhance storytelling and capture dynamic shots at various events.
            Reason to leave : Travelling safety concerns.
</p>
            
          </blockquote>
        </div>
      </div>
    
    <!-- <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Nchimbi Digital Studios</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary" data-mdb-ripple-init>Linkedin</a>
      </div>
    </div>
  </div> -->
    </div>

    <div class="row info">
      <h1 class="my-4"><u> My Skills </u></h1>
    </div>

    <div v-if="skills" class="row info skills d-flex justify-content-center">
      <div
        class="cardSkills align-items-center m-4"
        v-for="skill in skills()"
        :key="skill"
      >
        <img
          class="mt-2"
          height="60%"
          width="80%"
          :src="skill.img"
          alt="HTML5 Icon"
        />
        <p>{{ skill.title }}</p>
      </div>
    </div>
  </div>

  <Footer />

</template>

<script>
  import Footer from '@/components/Footer.vue'; 

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
  components: {Footer},
};
</script>

<style scoped>
.skills {
  margin-bottom: 200px;
}

.card {
  height: auto;
  border-radius: 26px;
  box-shadow: 35px 35px 68px 0px rgba(222, 219, 28, 0.518),
    inset -8px -8px 16px 0px rgba(91, 115, 187, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  transition: all 0.3s;
  background-color: transparent;
  color: white;
}

.cardd {
  width: 400px;
  height: auto;
  border-radius: 26px;
  box-shadow: 35px 35px 68px 0px rgba(222, 219, 28, 0.518),
    inset -8px -8px 16px 0px rgba(91, 115, 187, 0.6),
    inset 0px 11px 28px 0px rgb(255, 255, 255);
  transition: all 0.3s;
  cursor: pointer;
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

@media (min-width: 760px) {
  .info {
    margin-left: 150px;
  }
}

ul {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 90%);
  margin-inline: auto;
}

/* line */
ul::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: rgb(225, 225, 225);
  border-radius: calc(var(--line-w) / 2);
}

/* columns*/

/* row gaps */
ul li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* card */
ul li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* date */
ul li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);
  text-align: center;
  background-color: var(--accent-color);

  color: white;
  font-size: 1.25rem;
  font-weight: 700;

  display: grid;
  place-content: center;
  position: relative;

  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
}

/* date flap */
ul li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;

  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* circle */
ul li .date::after {
  content: "";
  position: absolute;
  width: 2rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.2rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;

  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
}

/* title descr */
ul li .title,
ul li .descr {
  background: var(--bgColor);
  position: relative;
  padding-inline: 1.5rem;
}
ul li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
}
ul li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
}

/* shadows */
ul li .title::before,
ul li .descr::before {
  content: "";
  position: absolute;
  width: 90%;
  height: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  left: 50%;
  border-radius: 50%;
  filter: blur(4px);
  transform: translate(-50%, 50%);
}
ul li .title::before {
  bottom: calc(100% + 0.125rem);
}

ul li .descr::before {
  z-index: -1;
  bottom: 0.25rem;
}

@media (min-width: 40rem) {
  ul {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }
  ul::before {
    grid-column: 2;
  }
  ul li:nth-child(odd) {
    grid-column: 1;
  }
  ul li:nth-child(even) {
    grid-column: 3;
  }

  /* start second card */
  ul li:nth-child(2) {
    grid-row: 2/4;
  }

  ul li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }

  ul li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }
  ul li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}
</style>
