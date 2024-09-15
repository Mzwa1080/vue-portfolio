<template>
  <div class="footerRow" v-for="footerData in getContacts()" :key="footerData">
    <p class="footerText">
      Copyright &copy;
      <span>{{ currentYear }}</span>
    </p>
    <p class="footerText">
      <span class="m-2"><a :href="footerData.linkedin" target="_blank"  class="bi bi-linkedin"></a></span>
      <span class="m-2"><a :href="footerData.gitHub" target="_blank" class="bi bi-github"></a></span>
      <span class="m-2"><a :href="'whatsapp://send?phone=' + footerData.whatsApp" target="_blank" class="bi bi-whatsapp"></a></span>
      <span class="m-2"><a href="mailto:mshawnlouw@gmail.com" target="_blank" class="bi bi-envelope"></a></span>
    </p>
  </div>
</template>

<script>
export default {
  name: "FooterComp",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    }
  },
  methods: {
    getContacts() {
      return this.$store.state.contacts
    }
  },
  computed: {
    getLinks() {
      return this.$store.dispatch('getData')
    }
  },
  mounted() {
    this.getLinks
  }
};
</script>

<style scoped>
p span a:hover {
  color: white;
  font-size: 2rem;
  transform: translateX(40px);
  transform: translateY(-60px);
}
p span a {
  text-decoration: none;
  color: #2c3e50;
}


/* Footer */
.footerRow {
  background-color: #393E46;
  font-family: "Salsa", cursive;
  color: #fff;
  bottom: 0;
  width: 100%;
  z-index: 100; /* Ensure the footer stays above other content */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  height: 3rem; /* Adjust height as needed */
  font-size: 20px;
  text-align: center;
}

.footerText {
  margin: 0;
}

p span a:hover {
  color: white;
  font-size: 2rem;
  transform: translateX(40px);
  transform: translateY(-60px);
}

p span a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
