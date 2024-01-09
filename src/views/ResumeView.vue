<template>
    <div>
        <div class="container">
            <div class="row my-3">
                <h1>Resume</h1>

            </div>


            <div class="row my-5">
                <div class="col">
                    <h2>Education background</h2>

                    <p v-for="education in getEducation()" :key="education">
                        {{ education.year }}
                        {{ education.description   }}
                        {{  education.place }}
                        {{  education.certificate }}
                    </p>
                </div>

                

            </div>

            <div class="row">
                    <h2>Skills</h2>
                
                <p v-for="skill in skills() " :key="skill">
                    {{ skill.title }}
                    
                </p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        methods : {
            // get the state value of each variable
            getEducation(){
                return this.$store.state.education
            },
            skills(){
                return this.$store.state.skills
            }
        },
        computed : {
            displayEducationData(){
                return this.$store.dispatch('getData')
            },
 

        },
        mounted (){
            this.displayEducationData
            // this.getSkills
        }

        
    }
</script>

<style scoped>

</style>