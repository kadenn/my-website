<template>
  <Head>
    <title>Kagan Demirhindi</title>
    <meta name="description" content="My personal website" />
    <meta property="og:title" content="Kagan Demirhindi" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/icon-1200x627.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:image:alt" content="A cute turkey cartoon" />
    <meta property="og:url" content="https://demirhindi.netlify.app/" />
    <meta property="og:description" content="My personal website" />
    <meta property="og:site_name" content="Kagan Demirhindi" />
  </Head>

  <div>
    <Header />
    <RouterView />
  </div>
</template>

<script setup>
// https://github.com/vueuse/head
import { Head } from "@vueuse/head";
import Header from "@/components/Header.vue";

</script>
