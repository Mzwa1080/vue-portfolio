<template>
  <div>
    <h1 class="mt-3">Contact Me</h1>

    <div class="row mb-5  row-box ">

        <div class="col-6 my-4 grid gap-3">

            <form class=" rounded " action="https://formspree.io/f/xzbnzbzd" method="post">
    
                <div class=" col mb-3">
                  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                  <input type="text" name="fullName" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"        />
                
              </div>
              <div class=" col mb-3">
                  <label for="exampleFormControlInput2" class="form-label">Email</label>
                  <input type="email"  name="email" class="form-control" id="exampleFormControlInput2" placeholder="mshawnlouw@gmail.com"        />
                
              </div>
    
    
    
    
              <div class="row">
    
                  <div class=" col mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label"
                      >Leave A Message</label
                    >
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      name="message"
                    ></textarea>
                  </div>
              </div>
    
              <div>
                <button type="submit" class="btn btn-success">Submit</button>
              </div>
    
            </form>
        </div>

        <div class="col-6 my-4">
            <iframe :width="450" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.0176997194853!2d18.65344317571607!3d-34.0434170731603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc48da4b8803b9%3A0x93f212ab5f4aa1b8!2sNqawe%20St%2C%20Village%201%20North%2C%20Cape%20Town%2C%207784!5e0!3m2!1sen!2sza!4v1704896316386!5m2!1sen!2sza"  :height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap");

label, h1{
  font-family: "Lobster", sans-serif;
  font-family: "Londrina Solid", sans-serif;
  font-family: "Roboto", sans-serif;
  font-family: "Salsa", cursive;
  color: #42b983;

}

.row-box{
    box-shadow: .2vw .2vw  .2vw  .2vw;
    color: #42b983;
}

</style>
