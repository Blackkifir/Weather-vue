<template>
  <div class="wrapper">
    <home-page />
  </div>
</template>

<script>
import HomePage from '@/layout/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style>
body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6,
ul,
li,
ol,
span, 
p, 
a {
  margin: 0;
  padding: 0;
}

.wrapper {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 15px;
}
</style>
