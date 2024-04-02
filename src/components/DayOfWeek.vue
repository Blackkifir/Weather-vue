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
  import axios from 'axios';

  export default {
    name: 'day-of-week',

    data() {
      return {
        items: [],
      }
    },
    methods: {
      async getDayOfWeek() {
        try {
          const api = 'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=6552610f79c2b672097111aa772032b1';
          const response = await axios.get(api);

          this.items = response.data;
          console.log(this.items);
        } catch (error) {
          console.log(error);
        }
      }
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