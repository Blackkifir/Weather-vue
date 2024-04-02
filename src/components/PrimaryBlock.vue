<template>
  <div class="primary">
    <input-searchCity />
  </div>
</template>

<script>
import InputSearchCity from '@/components/InputSearchCity.vue';

export default {
  name: 'primary-block',
  components: {
    InputSearchCity,
  }
}
</script>

<style scoped>
  .primary {
    border: none;
    border-radius: 5px;
    padding: 25px 25px;
    background-color: rgb(28, 124, 107);
  }
</style>