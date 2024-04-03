<template>
  <div v-if="!$store.state.isLoading">
    <div class="primary">
      <input-searchCity />
      <date-day-of-week />
      <primary-chart />
    </div>
  </div>
  <div v-else>
    <rainbow-loader />
  </div>
</template>

<script>
import InputSearchCity from '@/components/Controls/InputSearchCity.vue';
import DateDayOfWeek from '@/components/Date/DateDayOfWeek.vue';
import RainbowLoader from '@/components/Loader/RainbowLoader.vue';
import PrimaryChart from './PrimaryChart.vue';

export default {
  name: 'primary-block',
  components: {
    InputSearchCity,
    DateDayOfWeek,
    PrimaryChart,
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