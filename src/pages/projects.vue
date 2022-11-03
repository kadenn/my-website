<template>
  <div>
    <h1>Projects</h1>

    <div>
      <div v-if="error" class="error">{{  error  }}</div>
      <div v-else-if="githubData" class="projects">
        <div v-for="project in githubData" :key="project.id">
          <span class="project" @mouseover="displaySummary(project.id)" @mouseout="hideSummary(project)">{{  project.name  }}</span>
          <div class="summary" v-show="project.isSummary">{{project.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: ["url"],
  data(){
    
    return{
      githubData: {},
      error: "",
      url: "https://api.github.com/users/kadenn/repos",
    }
  },
  methods:{
    displaySummary(projectID){
      console.log(this.githubData);
      console.log(projectID);
      const selectedProject = this.githubData.find(project => project.id === projectID);
      selectedProject.isSummary = true;
    },
    hideSummary(selectedProject){
      selectedProject.isSummary = false;


    },
    printData(){
      console.log(this.githubData)
    }
  },
  created(){
  fetch(this.url)
  .then((res) => res.json())
  .then((json) => (this.githubData = json))
  .catch((err) => (this.error = err));

  }
}



</script>

<style>
.summary {
  width: 200px;
  border-radius: 20px;
  background: #0faf87;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>