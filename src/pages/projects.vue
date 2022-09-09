<template>
  <div>
    <h1>Projects</h1>

    <div>
      <div v-if="error" class="error">{{ error }}</div>

      <div v-else-if="!isFetching" class="projects">
        <div v-for="project in data" :key="project.id">
          {{ project.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from "@vueuse/core";

const url = "https://api.github.com/users/kadenn/repos";
const { isFetching, error, data } = useFetch(url, {
  initialData: { projects: [] },
  refetch: true,
})
  .get()
  .json();
</script>
