<template>
  <div class="about-container animate__animated animate__backInRight">
    <div class="row no-gutters">
      <!-- Left Side - Content -->
      <div class="col-lg-7 left-section">
        <h1><span class="underlined">About </span > Me</h1>

        <div class="row d-flex justify-content-center">
          <div class="card m-5">
            <div class="card-body">
              <div class="row mb-3">

                <div class="col-md-12 col-12 mt-5">
                  <h5>Date of Birth : 02 April 1999</h5>
                  <h5>Phone No. : +27 79 440 8723</h5>
                  <h5>Location : Khayelitsha, Cape Town</h5>
                  <h5>Email : mshawnlouw@gmail.com</h5>
                  <h5>Nationality : South African</h5>
                  <h5>Languages : Isixhosa, English</h5>
                  <h5>Hobbies : Listening to music, analyzing the markets, fixing cell phones.</h5>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Background Image or Content -->
      <div class="col-lg-5 right-section">
        <div class="row">
                <div class="col-md-12 col-12">
                  <p>I've gained strong skills in web development from Life Choices Academy and assisting others with coding bugs has opened my eyes. I want to start my career as a front-end developer, making websites look great and easy to use. <br> <br> Later on, I'd like to work in Quality Assurance to make sure software works perfectly.</p>
                  <p>Besides coding, I'm really interested in finance and trading. I follow financial news closely and enjoy analyzing market trends. I'm excited to see what the future holds in both technology and finance.</p>
                </div>
              </div>
        <!-- Optional content or background image -->
      </div>
    </div>
  </div>


</template>

<style scoped>
/* Container with flexbox layout */
.about-container {
  display: flex;
  flex-wrap: wrap;
}

.left-section, .right-section {
  display: flex;
  flex-direction: column; /* Align content vertically */
  justify-content: center; /* Center content vertically */
}

.left-section {
  flex: 0 0 60%; /* Takes up 60% of the width */
  background-color: #222831; /* Dark background color */
  color: #fff; /* White text color */
  padding: 2rem; /* Add padding for spacing */
}

.right-section {
  flex: 0 0 40%; /* Takes up 40% of the width */
  background-color: #eeeeee; /* Light background color */
  padding: 2rem; /* Add padding for spacing */
}

.underlined{
  color: gold;
}

.card {
  box-shadow: .1vw .1vw .4vw .1vw;
  color: white;
  background-color: transparent;
  width: 80%;
  margin: 0 auto; /* Center the card */
}

.circle-img {
  /* border-radius: */
  box-shadow: .06vw .1vw .1vw .1vw;
  color: white;
  overflow: hidden;
}

/* Media queries for responsiveness */
@media (max-width: 860px) {
  .left-section, .right-section {
    flex: 0 0 100%; /* Full width on small screens */
  }

  .circle-img {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}
</style>

