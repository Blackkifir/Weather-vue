<template>
  <div class="dayOfWeek">
    <div class="dayOfWeek_date">
      <p class="dayOfWeek_date_day">{{ this.dayOfMonth }}</p>
      <p class="dayOfWeek_date_currentDay">{{ this.dayOfWeek }}</p>
    </div>
    <primary-card
      :id="itemsProperties.id"
      :description="itemsProperties.description"
      :temp="itemsProperties.temp"
      :humidity="itemsProperties.humidity"
      :wind="itemsProperties.wind"
      :name="itemsProperties.name"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import PrimaryCard from './PrimaryCard';

export default {
  name: 'primary_dayOfWeek',

  components: {
    PrimaryCard,
  },
  data() {
    return {
      date: {},
      days: [],
      dayOfWeek: '',
      dayOfMonth: 0,
    }
  },
  computed: {
    ...mapState({
      items: state => state.weather.items,
      itemsProperties: state => state.weather.itemsProperties,
    }),
  },
  methods: {
    ...mapMutations({
      setItems: 'weather/setItems',
      setItemsProperties: 'weather/setItemsProperties',
    }),
    loadDataItems() {
      if (this.items.length !== 0) {
        this.date = new Date(this.items.list[0].dt_txt);
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.dayOfWeek = this.days[this.date.getDay()];
        this.dayOfMonth = this.date.getDate();

        const newItemsProperties = {
          id: this.items.city.id,
          name: this.items.city.name,
          description: this.items.list[0].weather[0].description,
          temp: Math.round(this.items.list[0].main.temp - 273.15),
          humidity: this.items.list[0].main.humidity,
          wind: Math.round(this.items.list[0].wind.speed),
        };
        this.setItemsProperties(newItemsProperties);
      }
    },
  },
  mounted() {
    this.loadDataItems();
  }
}
</script>

<style lang="scss">
  .dayOfWeek {
    margin-bottom: 30px;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    padding: 15px;
    
    &_date {
      display: flex;
      border: none;
      border-radius: 5px;
      margin-bottom: 10px;
      width: 100%;

      &_day,
      &_currentDay {
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        background-color: #FFFFFF;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
      }

      &_day {
        border-right: 2px solid #000000;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .dayOfWeek {
      &_date {
        &_day,
        &_currentDay {
          font-size: 15px;
        }
      }
    }
  }
</style>