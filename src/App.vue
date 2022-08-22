<script setup>
// https://github.com/vueuse/head
import { Head } from "@vueuse/head";
</script>

<template>
  <Head>
    <title>Kagan Demirhindi</title>
    <meta name="description" content="My personal website" />
    <meta property="og:title" content="Kagan Demirhindi" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/icon-1200×675.png" />
    <meta property="og:image:alt" content="A cute turkey cartoon" />
    <meta property="og:url" content="https://demirhindi.netlify.app/" />
    <meta property="og:description" content="My personal website" />
    <meta property="og:site_name" content="Kagan Demirhindi" />
  </Head>
  <RouterView />
</template>
