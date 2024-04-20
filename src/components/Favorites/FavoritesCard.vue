<template>
  <div class="card">
    <button
      class="card_deleteCard"
      type="button"
      @click="openModalWindow"
    >
        <span class="card_deleteCard_cross">
          &#10005;
        </span>
    </button>
    <div class="card_icons">
      <img
        class="card_icons_img"
        src="@/assets/cardImg.png"
        alt="icon-notFound"
      >
    </div>
    <div class="card_details">
      <p
        v-for="detail in allDetails"
        :key="detail"
        class="card_text"
      >
        {{ detail }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'favorites-card',

  props: {
    id: Number,
    description: String,
    temp: Number,
    humidity: Number,
    wind: Number,
    name: String,
  },

  data() {
    return {
      allDetails: [
        `Description: ${this.description}`,
        `Temperature: ${this.temp}°C`,
        `Humidity: ${this.humidity}%`,
        `Wind: ${this.wind} m/s`,
        `Location: ${this.name}`
      ]
    }
  },

  computed: {
    ...mapState({
      isModalVisible: state => state.weather.isModalVisible,
      idCard: state => state.weather.idCard,
    }),
  },

  methods: {
    ...mapMutations({
      setModalVisible: 'weather/setModalVisible',
      setIdCard: 'weather/setIdCard',
    }),
    openModalWindow() {
      this.setIdCard(this.id);
      this.setModalVisible(true);
    },
  },
};
</script>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 0 auto;
    transition: transform 0.3s ease;
    position: relative;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 40px;
    width: 325px;
    background-color: #f9f9f9;

    &_deleteCard {
      position: absolute;
      top: 5px;
      right: 5px;
      border: none;
      border-radius: 5px;
      width: 25px;
      height: 25px;
      cursor: pointer;
      background-color: rgb(28, 124, 107);

      &_cross {
        font-size: 15px;
        color: #FFFFFF;
      }
    }
    &_deleteCard:hover {
      transition: all .2s;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    &_icons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      border-radius: 5px;
      width: 100%;
      height: 100px;
      background: linear-gradient(to right, #ff7e5f 0%, #feb47b 100%);

      &_img {
        width: 85px;
        height: 85px;
      }
    }

    &_details {
      margin-bottom: 5px;
    }

    &_details,
    &_locations {
      width: 100%;
    }

    &_text {
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      padding: 10px;
      margin: 5px 0;
      background-color: #ffffff;
      font-size: 14px;
      color: #333;
    }
    &_text:first-child {
      margin-top: 0;
    }
    &_text:last-child {
      margin-bottom: 0;
    }
  }
  .card:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 800px) {
    .card {
      flex: 0 0 auto;
      padding: 15px;
      width: 250px;

      &_icons {
        &_img {
          width: 70px;
          height: 70px;
        }
      }

      &_text {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .card {
      flex: 0 0 auto;
      padding: 15px;
      width: 200px;

      &_icons {
        height: 70px;
        
        &_img {
          width: 60px;
          height: 60px;
        }
      }

      &_text {
        font-size: 10px;
      }
    }
  }
</style>