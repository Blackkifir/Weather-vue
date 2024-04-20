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

<style lang="scss">
  body {
    margin-top: 0px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
  }
  
  * {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
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
