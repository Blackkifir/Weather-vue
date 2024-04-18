<template>
  <header-static />
  <main-static />
  <footer-static />
</template>

<script>
import HeaderStatic from '@/components/Semantics/HeaderStatic.vue';
import MainStatic from '@/components/Semantics/MainStatic.vue';
import FooterStatic from '@/components/Semantics/FooterStatic.vue';

export default {
  name: 'home-page',
  components: {
    HeaderStatic,
    MainStatic,
    FooterStatic,
  }
}
</script>