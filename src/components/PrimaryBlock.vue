<template>
  <div v-if="!$store.state.isLoading">
    <div class="primary">
      <input-searchCity />
      <day-of-week />
      <time-chart />
    </div>
  </div>
  <div v-else>
    <rainbow-loader />
  </div>
</template>

<script>
import InputSearchCity from '@/components/InputSearchCity.vue';
import DayOfWeek from '@/components/DayOfWeek.vue';
import TimeChart from '@/components/TimeChart.vue';
import RainbowLoader from './RainbowLoader.vue';

export default {
  name: 'primary-block',
  components: {
    InputSearchCity,
    DayOfWeek,
    TimeChart,
    RainbowLoader,
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