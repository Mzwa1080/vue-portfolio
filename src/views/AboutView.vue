<template>
  <div class="about-container">
    <div class="row">
      <h1><span class="underlined">About </span>  Me  </h1>

    </div>

    <div class="row d-flex justify-content-center mt-5">
      <div class="card m-5">
        <div class="card-body">
          <div class="row mb-5">
            <div class="col-md-6 col-12">
              <img src="https://i.ibb.co/YRB9mcJ/DSC-0268.jpg" height="300px" width="300px" class="circle-img" alt="Mzwamadoda Louw">
            </div>
            <div class="col-md-6 col-12  mt-5">
              <h5>
                Date of Birth : 02 April 1999
              </h5>
              <h5>
                Phone No. : +27 79 440 8723
              </h5>
              <h5>
                Location : Khayelitsha, Cape Town
              </h5>
              <h5>
                Email : mshawnlouw@gmail.com
              </h5>
              <h5>
                Nationality : South African
              </h5>
              <h5>
                Languages : Isixhosa, English
              </h5>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 col-12">
              <p>I've gained strong skills in web development from Life Choices Academy and assisting others with coding bugs has opened my eyes. I want to start my career as a front-end developer, making websites look great and easy to use. <br> <br> Later on, I'd like to work in Quality Assurance to make sure software works perfectly.</p>
              <p>Besides coding, I'm really interested in finance and trading. I follow financial news closely and enjoy analyzing market trends. I'm excited to see what the future holds in both technology and finance.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>
export default {
  components: {}
}
</script>

<style scoped>
.about-me{
  font-size: 40px;

}
.underlined {
  text-decoration: underline; /* Add underline */
  text-decoration-color: gold; /* Set underline color to gold */
}
.about-container {
  margin-left: 100px;
  margin-bottom: 200px; /* Add margin to push the content above the footer */
  height: auto; /* Allow content to determine height */
}
.card-body {
  color: white;
}
.card{
  box-shadow: .1vw .1vw .6vw .1vw ;
  color: gold ;
  background-color: transparent;
  border-radius: 5rem;
  width: 80%;
  margin-left: 150px;
}
.circle-img{
  border-radius: 80%;
  box-shadow: .06vw .1vw .1vw .1vw ;
  color: gold ;
  overflow: hidden;
}

</style>
