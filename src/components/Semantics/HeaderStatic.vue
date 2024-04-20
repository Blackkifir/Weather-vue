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

<style lang="scss">
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100px;
    margin: 20px 0px 50px 0px;

    &_logo {
      width: 125px;
      height: 100px;
    }
  }

  @media screen and (max-width: 600px) {
    .header {
      justify-content: center;
    }
  }
</style>
