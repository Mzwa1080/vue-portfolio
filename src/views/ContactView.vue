<template>
  <div>
    <h1>Contact Me</h1>

    <div class="row grid d-flex ">

        <form action="https://formspree.io/f/xzbnzbzd" method="post">

            <div class=" col mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="text" name="" class="form-control" id="exampleFormControlInput1" placeholder="John Doe"        />
            
          </div>
          <div class=" col mb-3">
              <label for="exampleFormControlInput2" class="form-label">Email</label>
              <input type="email"  name="" class="form-control" id="exampleFormControlInput2" placeholder="mshawnlouw@gmail.com"        />
            
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
                ></textarea>
              </div>
          </div>

          <div>
            <button type="submit" class="btn btn-success">Submit</button>
          </div>

        </form>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
