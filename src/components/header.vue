<template>
  <div class="header-menu">
    <div class="header-item">
      <router-link to="/">Home</router-link>
    </div>

    <div class="header-item">
      <router-link to="/projects">Projects</router-link>
    </div>

    <div class="header-item">
      <router-link to="/blog">Blog</router-link>
    </div>

    <div class="header-item">
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<style scoped>
.header-menu {
  display: flex;
  margin-bottom: 40px;
}

.header-item {
  margin-right: 10px;
  font-size: 20px;
}
</style>
