<template>
  <div>
    <div class="row my-3">
      <h1 class="about-me">About Me</h1>

    </div>

    <div class="row my-3 row-box">
      <div class="col ">
        <img class="img-about animate__animated animate__bounceInUp animate__repeat-2"   src="https://lh3.googleusercontent.com/fife/AGXqzDlVu1UiMEdnP4x8VMQqwf3IDZeGL9FX_Eun0YIMmpCJYDOxQQz2M-quNkD9dbcKBUfDxIurSJyXc8lKYzgD-CoKqHpcG3J31qj5qan4_Tga21UJXXtO9YBHoCca115Wx86VHnylSY_1TZBiiZ_6EGX866H7hWhi2AuYmZOSNqbOy-MzjnV7a4AKv3S212OAuYnhtcztZ7xpVIG0lbd3HcI0PK2esIFeNi4haAtoqSWuGUVFYHEWtD77dIh58NOYeP_DSzqOoMpGP6uZFtx5TnYLw_ge65j7NgkAkw07SqhWA5dgVtYcXsTFRW1jNdvh8enM67Sn0nHrdyPehcfvjrI34mQCKCy-XK-Gfjo1f30BtRJP1twtMvRckb7OzXqLqp8H3XUQJe1VaVqVelaRvnKHiAZ3BjIU7EJV3ihfiBi9VesdNGbZbx4x8ro3C9C9-kpRyzK-f92J63WkhQ_Qyd39D15TaUHaXIvPQzA47aVqqbIUMUfxjLDgNjDggOEeUS6xbSMnX9_9CgJFmK4coWsxI6MS-51xDAnxQL4_udp7N3xVKMwu0kPKbD4YLHTef2acFob-YlEjOZe7HealbhXj1HS3oJrPAlJ9bygE3Tbdeovv4DN48Qwzb6g_Bic-CUk2CBRMdwxh5BR3j4UVd3mR-7HTOHmd7koD-CNndXhlovnel0ADuz-GtGjYCxtB5nLxHVNumGGGVd70qKzxP3dECp8JPlyMN0HJB4DQ9am1jarvAdpw804RZk9zbWyk39ICJ-GCh54lDWQJ7SJ3MLqSWGl3CBuVvQAgmZYpbUu5RoiqjwcRTpMUe3tjSVg4Z_zUcsXRpldlmoWjkm0VwNcMf7ZjfKU1MWXRXkbBQ13wM9l4Sw_LLQvt_8zFX3L6MRnrkWpBqZ2ENvrXBwgR2DKUdLpwtp5hD0RSQ9x2L8LmEJxZUqT_M7wofVh1ljjVuLCaACKBx1haNA1n1Nvm6C7kornd8eTQHOpyjbJuqxICSCqIPsHUf1NCGFqXkgCfPrJLBzxlWo66iPRZhrVB1cJXd7tljDTPviKhPKO5S95Mc_HYxE1Pw1k3kJFS6oSv6qE9MXRLzvRcZAGHz_lLyN0iF-CPIonmSt9T52RGzAMUqWUoJahVxpXAPPNXkYlWAeSbqimUsSbsjKFgHmBZZqojm5On96t44LNHHB-nuEMUG3atoqdQeBmzzM2VVk6jTWW45ivYnoElYcEhvGve0c7bowlTPtkFflLg1t1nqoGNcL75IqXJrAgAWnesLRYPF-5dK18kyE5jOq6bqswIQQXrPuM6lb5tXNlwJDWTkPHOiCSyGsUQnUFt6wiuIGi5kKZrTHv-WJAoOmkDKYdmlrNcuQn0ZbzL_IkJ4S-WdVpsCxbJ1Dg1UULSzZ-vEgKibFmk4A2eh0BKh6jybYoPCkJ4MW8nznoOF_bNYXugKeHFWjKoJZqo7UzSti8kaeGg8q0bVfd0Jj2D_lpt1mXzXFBYY6DFwvLDO2WTKCsvbD0ms1B8_jZzmSxTxA=w1696-h1272-p-k-nu" alt="">
      </div>

      <div class="col my-5 about animate__animated animate__zoomIn ">

        <p class="my-5" v-for="about in getAbout()" :key="about">
          {{ about }}
 
        </p>
      </div>
    </div>


  </div>
</template>

<script>

export default {
// returns the about changed value in the state
  methods : {
    getAbout(){
     return this.$store.state.about
    }
  },
  computed : {
    // gets the data from the store
    displayData(){
      return this.$store.dispatch('getData')
    }
  },
  // mounted, adds the data function in the page
  mounted(){
    this.displayData
  }


}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Londrina+Solid&family=Roboto:wght@100;300&family=Salsa&display=swap');

h1, p{
  font-family: 'Lobster', sans-serif;
font-family: 'Londrina Solid', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Salsa', cursive;
}
.img-about{
  width: 70%;
}
p{
  color: black;
}

.about-me{
  font-size: 3rem;
  color: #42b983;

}

.about{
  font-size: 1.3rem;
}
.row-box{
  box-shadow: .2vw .2vw .2vw .2vw;
  color: #42b983;
}

</style>