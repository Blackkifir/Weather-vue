<template>
  <header-static />
  <main-static />
</template>

<script>
import HeaderStatic from '@/components/Semantics/HeaderStatic.vue';
import MainStatic from '@/components/Semantics/MainStatic.vue';

export default {
  name: 'home-page',
  components: {
    HeaderStatic,
    MainStatic,
  }
}
</script>

<style scoped>

</style>
