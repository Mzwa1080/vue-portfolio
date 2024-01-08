import { createStore } from 'vuex'
let dataUrl = "https://mzwa1080.github.io/vue-exampleData/data/"

export default createStore({
  state: {

    jobTitle : null,
    about : null,
    education : null,
    skills : null,
    testimonials : null,
    projects : null,

  },
  getters: {
  },
  mutations: {
    setJobTitle (state, value){
      state.jobTitle = value;
    },
    setAbout (state, value){
      state.about = value;
    },
    setEducation(state, value){
      state.education = value
    },
    setSkills(state, value){
      state.skills = value
    },
    setTestimonials(state, value){
      state.testimonials = value
    },
    setProjects(state, value){
      state.projects = value
    },

  },
  actions: {
    async getData(context){
      let res = await fetch(dataUrl)
      let data = await res.json()
      console.log('education');
      console.log(data.education);
      console.log('skills');
      console.log(data.skills);
      context.commit('setJobTitle', data.jobTitle[0].title)
      context.commit('setAbout', data.about)
      context.commit('setEducation', data.education)
      context.commit('setSkills', data.skills)
      // context.commit('setJobTitle', data.jobTitle[0].title)
    }

  }
})