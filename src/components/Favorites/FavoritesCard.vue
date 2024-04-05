<template>
  <div class="card">
    <button
      @click="openModalWindow"
      class="card_deleteCard"
      type="button">
        &#10005;
    </button>
    <div class="card_icons">
      <img class="card_img" src="@/assets/cardImg.png" alt="icon-notFound">
    </div>
    <div class="card_details">
      <p class="card_text">
        description: {{ description }}
      </p>
      <p class="card_text">
        temperature: {{ temperature }}
      </p>
      <p class="card_text">
        humidity: {{ humidity }}
      </p>
      <p class="card_text">
        wind: {{ wind }}
      </p>
    </div>
    <div class="card_locations">
      <p class="card_text">
        locations: {{ name }}
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
    temperature: Number,
    humidity: Number,
    wind: Number,
    name: String,
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
      setDeleteCard: 'weather/setDeleteCard',
    }),
    openModalWindow() {
      this.setIdCard(this.id);
      this.setModalVisible(true);
    },
  },
};
</script>

<style scoped>
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
}

.card_deleteCard {
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  border-radius: 5px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color: rgb(28, 124, 107);
  color: inherit;
}
.card_deleteCard:hover {
  transition: all .2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card:hover {
  transform: translateY(-5px);
}

.card_icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 5px;
  width: 100%;
  height: 100px;
  background: linear-gradient(to right, #ff7e5f 0%, #feb47b 100%);
}

.card_img {
  width: 85px;
  height: 85px;
}

.card_details {
  margin-bottom: 5px;
}

.card_details,
.card_locations {
  width: 100%;
}

.card_text {
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 5px 0;
  background-color: #ffffff;
  font-size: 14px;
  color: #333;
}

.card_text:first-child {
  margin-top: 0;
}

.card_text:last-child {
  margin-bottom: 0;
}
</style>