<template>
  <div v-if="!isLoading">
    <div class="primary">
      <input-searchCity
        :modelValue="searchCity"
        @update:modelValue="setSearchCity"
      />
      <primary-dayOfWeek />
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
import PrimaryDayOfWeek from '@/components/Primary/PrimaryDayOfWeek';
import PrimaryChart from './PrimaryChart.vue';
import RainbowLoader from '../Loader/RainbowLoader.vue';

export default {
  name: 'primary-block',
  components: {
    InputSearchCity,
    PrimaryDayOfWeek,
    PrimaryChart,
    RainbowLoader,
  },
  computed: {
    ...mapState({
      isLoading: state => state.weather.isLoading,
      searchCity: state => state.weather.searchCity,
    }),
  },
  watch: {
    searchCity(newCity) {
      this.debouncedGetDayOfWeek(newCity);
    }
  },
  methods: {
    ...mapMutations({
      setLoading: 'weather/setLoading',
      setSearchCity: 'weather/setSearchCity',
    }),
    ...mapActions({
      getDayOfWeek: 'weather/getDayOfWeek',
    }),
  },
  created() {
    this.debouncedGetDayOfWeek = debounce(this.getDayOfWeek, 2500);
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

  @media screen and (max-width: 600px) {
    .primary {
      padding: 15px 15px;
    }
  }
</style>