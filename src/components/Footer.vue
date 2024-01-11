<template>
  <div>
    <!-- <div class="container"> -->
    <div class="row footerRow ">
      <p class="lead my-3">
        Mzwamadoda Louw Portfolio &copy;
        <span>
          {{ currentYear }}
        </span>
      </p>
      <br />
      <p v-for="footerData in getContacts()" :key="footerData">

        <span class="p-3" ><i :href="footerData.linkedin" class="bi bi-linkedin"></i></span>
        <span class="p-3"  ><i :href="footerData.gitHub" class="bi bi-github"></i></span>
        <span class="p-3" ><i :href="footerData.whatsApp" class="bi bi-whatsapp"></i></span>
      </p>
    </div>
    <!-- </div> -->
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
  methods : {
    getContacts(){
        return this.$store.state.contacts
    }
},

  computed : {
    getLinks(){
        return this.$store.dispatch('getData')
    }
  },
  mounted(){
    this.getLinks
  }

};
</script>

<style scoped></style>
