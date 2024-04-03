<template>
  <header class="header">
    <img
      class="header_logo"
      src="@/assets/logo.jpg"
      alt="logo-notFound"
    />
  </header>
</template>

<script>
export default {
  name: 'header-static',
}
</script>

<style scoped>
  .header {
    height: 100px;
    margin: 20px 0px 50px 0px;
  }

  .header_logo {
    width: 125px;
    height: 100px;
  }
</style>
