<template>
  <div v-if="!isLoading">
    <div class="primary">
      <input-searchCity
        :modelValue="searchCity"
        @update:modelValue="setSearchCity"
      />
      <date-day-of-week />
      <primary-chart />
    </div>
  </div>
  <div v-else>
    <rainbow-loader />
  </div>
</template>

<script>
import { debounce } from 'lodash-es';
import { mapState, mapActions, mapMutations } from 'vuex';
import InputSearchCity from '@/components/Controls/InputSearchCity.vue';
import DateDayOfWeek from '@/components/Date/DateDayOfWeek.vue';
import PrimaryChart from './PrimaryChart.vue';
import RainbowLoader from '../Loader/RainbowLoader.vue';

export default {
  name: 'primary-block',
  components: {
    InputSearchCity,
    DateDayOfWeek,
    PrimaryChart,
    RainbowLoader,
  },
  methods: {
    ...mapMutations({
      setItems: 'weather/setItems',
      setLoading: 'weather/setLoading',
      setSearchCity: 'weather/setSearchCity',
    }),
    ...mapActions({
      getDayOfWeek: 'weather/getDayOfWeek',
    }),
  },
  computed: {
    ...mapState({
      items: state => state.weather.items,
      isLoading: state => state.weather.isLoading,
      searchCity: state => state.weather.searchCity,
    }),
  },
  created() {
    this.debouncedGetDayOfWeek = debounce(this.getDayOfWeek, 3000);
  },
  watch: {
    searchCity(newCity) {
      this.debouncedGetDayOfWeek(newCity);
    }
  },
  mounted() {
    this.getDayOfWeek();
  },
};
</script>

<style scoped>
  .primary {
    border: none;
    border-radius: 5px;
    padding: 25px 25px;
    background-color: rgb(28, 124, 107);
  }
</style>