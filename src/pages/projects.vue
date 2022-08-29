<template>
  <div>
    <h1>Projects</h1>

    <div>
      <div v-if="error" class="error">{{ error }}</div>

      <div v-if="data" class="projects">
        <div v-for="project in data" :key="project.id">
          {{ project.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref(null);
const error = ref(null);

const url = "https://api.github.com/users/kadenn/repos";
fetch(url)
  .then((res) => res.json())
  .then((json) => (data.value = json))
  .catch((err) => (error.value = err));
</script>
