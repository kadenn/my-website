<script setup>
import { useHead } from "@vueuse/head";

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: "Kagan Demirhindi",
  meta: [{ name: "description", content: "My Personal Website" }],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/icon.svg",
    },
  ],
});
</script>

<template>
  <RouterView />
</template>
