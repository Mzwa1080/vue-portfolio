<template>
  <div class="footerRow">
    <p> Copyright &copy;<span>{{ currentYear }}</span></p>
    <div class="row">

      <i   v-for="footerData in getContacts()" :key="footerData">
        <span class="m-2  icons"><a :href="footerData.linkedin" target="_blank"  class="bi bi-linkedin"></a></span>
        <span class="m-2 icons"><a :href="footerData.gitHub" target="_blank" class="bi bi-github"></a></span>
        <span class="m-2 icons"><a :href="'whatsapp://send?phone=' + footerData.whatsApp" target="_blank" class="bi bi-whatsapp"></a></span>
        <span class="m-2 icons"><a href="mailto:mshawnlouw@gmail.com" target="_blank" class="bi bi-envelope"></a></span>
      </i>
    </div>
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
.icons{
  font-size: 1rem;
  margin: 0;
  padding: 0;
}

.footerRow {
  background: linear-gradient(to bottom right, #ffd700, #000000); /* Gradient background */
  font-family: "Salsa", cursive;
  color: #2c3e50;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100; /* Ensure the footer stays above other content */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  height: auto;
  font-size: 15px;
}
</style>
