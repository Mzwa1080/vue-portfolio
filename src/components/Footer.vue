<template>
  <div>
    <div class="row footerRow  ">
      <p class="lead my-3">
        Mzwamadoda Louw Portfolio &copy;
        <span>
          {{ currentYear }}
        </span>
      </p>
      <br />
      <p v-for="footerData in getContacts()" :key="footerData">

        <span class="p-3" ><a :href="footerData.linkedin" class="bi bi-linkedin"></a></span>
        <span class="p-3"  ><a :href="footerData.gitHub" class="bi bi-github"></a></span>
        <span class="p-3" ><a :href="footerData.whatsApp" class="bi bi-whatsapp"></a></span>
      </p>
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

<style scoped>
a {
  color: #2c3e50;
}
</style>
