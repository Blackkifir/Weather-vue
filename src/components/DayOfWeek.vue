<template>
  <div>
    <div class="dayOfWeek">
      <div class="dayOfWeek_date">
        <p class="dayOfWeek_day">31</p>
        <p class="dayOfWeek_currentDay">Sunday</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex';

  export default {
    name: 'day-of-week',

    data() {
      return {}
    },
    methods: {
      ...mapMutations({
        setItems: 'weather/setItems',
      }),
      ...mapActions({
        getDayOfWeek: 'weather/getDayOfWeek',
      }),
    },
    computed: {
      ...mapState({
        items: state => state.weather.items,
      }),
    },
    mounted() {
      this.getDayOfWeek();
    }
  }
</script>

<style scoped>
  .dayOfWeek {
    margin-bottom: 30px;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    padding: 15px;
  }

  .dayOfWeek_date {
    display: flex;
    margin-bottom: 10px;
  }
  
  .dayOfWeek_day,
  .dayOfWeek_currentDay {
    border: none;
    padding: 5px 10px;
    background-color: #FFFFFF;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
  }

  .dayOfWeek_day {
    border-right: 2px solid #000000;
  }

</style>