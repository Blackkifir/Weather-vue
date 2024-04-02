<template>
  <div class="primary">
    <input-searchCity />
    <day-of-week />
    <time-chart />
  </div>
</template>

<script>
import InputSearchCity from '@/components/InputSearchCity.vue';
import DayOfWeek from '@/components/DayOfWeek.vue';
import TimeChart from '@/components/TimeChart.vue';

export default {
  name: 'primary-block',
  components: {
    InputSearchCity,
    DayOfWeek,
    TimeChart,
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