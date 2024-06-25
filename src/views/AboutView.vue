<template>
  <div class="about-container animate__animated animate__backInRight">
    <div class="row">
      <h1><span class="underlined">About </span> Me</h1>
    </div>

    <div class="row d-flex justify-content-center">
      <div class="card m-2">
        <div class="card-body">
          <div class="row mb-3">
            <div class="col-md-6 col-12">
              <img
                src="https://i.ibb.co/YRB9mcJ/DSC-0268.jpg"
                height="300px"
                width="300px"
                class="circle-img"
                alt="Mzwamadoda Louw"
              />
            </div>
            <div class="col-md-6 col-12 mt-5">
              <h5>Date of Birth : 02/04/1999</h5>
              <h5>Phone No. : +27 79 440 8723</h5>
              <h5>Location : Khayelitsha, Cape Town</h5>
              <h5>Email : mshawnlouw@gmail.com</h5>
              <h5>Nationality : South African</h5>
              <h5>Languages : Isixhosa, English</h5>
              <h5>
                Hobbies : Listening to music, analyzing the markets, updating my siblings
                cell phone, updating their windows operating systems and teaching my siblings to use various technologies and software
             
              </h5>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-12">
              <p>
                I'm currently interning as a Web Developer at Life Choices
                Studio, where I'm upskilling in languages such as HTML, CSS and
                JavaScript. I also completed my Cisco Networking learning
                journey through LC Studio.
                
               <br><br> I'm currently embarking on a new learning journey where I'll be upskilling in Web Development, using tools such as UI/UX, Drupal, WordPress, Docker, SEO, and API.
                <br> <br>
                With previous training at
                institutions like Life Choices Academy, Codetelligence Academy and Project Codex, I'm
                building a strong understanding of both front-end and back-end
                development.I'm eager to apply my skills and continue learning in the ever-evolving field of web development and technical support. Looking forward to exploring opportunities to contribute and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: { Footer },
};
</script>

<style scoped>
.about-me {
  font-size: 40px;
}
.underlined {
  text-decoration: underline; /* Add underline */
  text-decoration-color: gold; /* Set underline color to gold */
}
.about-container {
  margin-left: 150px;
  margin-bottom: 2rem;
  /* margin-bottom: 200px; Add margin to push the content above the footer */
  height: auto; /* Allow content to determine height */
}
.card-body {
  color: white;
}
.card {
  box-shadow: 0.1vw 0.1vw 0.6vw 0.1vw;
  color: gold;
  background-color: transparent;
  border-radius: 5rem;
  width: 80%;
  margin-left: 150px;
}
.circle-img {
  border-radius: 80%;
  box-shadow: 0.06vw 0.1vw 0.1vw 0.1vw;
  color: gold;
  overflow: hidden;
}

@media (max-width: 860px) {
  .about-container {
    margin-left: auto;
    margin-right: auto;
  }

  .card {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }

  .circle-img {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}
</style>
