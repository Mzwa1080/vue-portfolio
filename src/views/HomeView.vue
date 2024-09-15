<template>
  <div class="home-view-container">
    <!-- Main Content Wrapper -->
    <div class="row no-gutters full-height">
      <!-- Left Side - Introduction and About Section -->
      <div class="col-lg-7 left-section d-flex justify-content-center align-items-center">
        <div id="main-content" class="content animate__animated animate__fadeInRight text-center" v-if="showHomeContent">
          <div class="mb-3"></div>
          <h1 class="text-content">Hi, I'm Mzwamadoda Louw</h1>
          <transition name="fade">
            <h4 class="text-content2 animated-text">{{ currentTitle }}</h4>
          </transition>
        </div>

        <!-- About Section -->
        <div id="about-section"   class="content animate__animated animate__fadeInRight" v-if="showAboutContent">
          <h1><span class="underlined">About</span> Me</h1>
          <div class="row">
            <div class="col-md-6 col-12">
              <img src="https://i.ibb.co/YRB9mcJ/DSC-0268.jpg" height="300px" width="300px" class="circle-img" alt="Mzwamadoda Louw">
            </div>
            <div class="col-md-6 col-12 mt-5">
              <h5>Date of Birth : 02 April 1999</h5>
              <h5>Phone No. : +27 79 440 8723</h5>
              <h5>Location : Khayelitsha, Cape Town</h5>
              <h5>Email : mshawnlouw@gmail.com</h5>
              <h5>Nationality : South African</h5>
              <h5>Languages : Isixhosa, English</h5>
              <h5>Hobbies : Listening to music, analyzing the markets, fixing cell phones.</h5>
            </div>
          </div>
          <p class="mt-3">I've gained strong skills in web development...</p>
        </div>
      </div>

      <!-- Right Side - Background Image -->
      <div class="col-lg-5 right-section">
        <img class="img-fluid float-to-right" src="https://i.ibb.co/ZMHtZXP/MLOUW.png" alt="Mzwamadoda Louw" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const titles = ref([
      "<Full Stack Developer Graduate />",
      "<UI/UX Designer />",
      "<Front-end developer />"
    ]);
    const currentTitle = ref(titles.value[0]);
    let index = 0;

    const showHomeContent = ref(true); // Controls the visibility of Home content
    const showAboutContent = ref(false); // Controls the visibility of About content

    // Function to change the title every 3 seconds
    const changeTitle = () => {
      index = (index + 1) % titles.value.length;
      currentTitle.value = titles.value[index];
    };

    // Change the title on mount every 3 seconds
    onMounted(() => {
      setInterval(changeTitle, 3000); // Change every 3 seconds
    });

    // Scroll to "About" section
    const scrollToAbout = () => {
      showHomeContent.value = false;
      showAboutContent.value = true;
      document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
    };

    return { currentTitle, showHomeContent, showAboutContent, scrollToAbout };
  },
};
</script>

<style scoped>
/* Main container for the home view */
.home-view-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.row.no-gutters.full-height {
  height: 100vh;
}

.text-content2 {
  color: gold;
}

.float-to-right {
  width: 60%;
  margin-right: 70%;
  border: 1px solid white;
  box-shadow: 0.2vw 0.5vw 0.4vw 0.2vw;
  z-index: 1;
}

.left-section {
  background-color: #222831;
  color: #fff;
  padding: 3rem;
  height: 100%;
  position: relative;
  overflow-y: auto; /* Enable vertical scrolling */
}



.right-section {
  background-color: #eeeeee;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Media Queries */
@media (max-width: 768px) {
  .float-to-right {
  width: 50%;
  margin-right: 70%;
  border: 1px solid white;
  box-shadow: 0.2vw 0.5vw 0.4vw 0.2vw;
  z-index: 1;
}


  .left-section,
  .right-section {
    flex: 0 0 50%; /* Ensure both sections are equal width */
  }

  .right-section {
    display: flex; /* Make sure the right section is displayed */
  }

  /* .img-fluid {
    width: 100%; /* Make sure the image takes up full width 
    height: auto; /* Maintain aspect ratio 
  } */
}
</style>
