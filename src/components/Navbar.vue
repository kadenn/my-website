<template>
  <div class="navbar">
    <div class="navbar-item">
      <router-link to="/">Home</router-link>
    </div>

    <div class="navbar-item">
      <router-link to="/projects">Projects</router-link>
    </div>

    <div class="navbar-item">
      <router-link to="/blog">Blog</router-link>
    </div>

    <div class="navbar-item">
      <a href="mailto:name@email.com">Contact</a>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  margin-bottom: 40px;
}

.navbar-item {
  margin-right: 10px;
  font-size: 20px;
}
</style>
