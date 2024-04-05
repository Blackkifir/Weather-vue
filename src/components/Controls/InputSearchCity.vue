<template>
  <div class="searchCity">
    <div>
      <label class="chooseText" for="searchCity">Choose a city:</label>
      <input
        class="searchInput"
        type="text"
        id="searchCity"
        name="searchCity"
        list="cityList"
        placeholder="search..."
        :value="modelValue"
        @input="updateSearchCity"
      />
      <datalist id="cityList">
        <option value="New York" />
        <option value="Los Angeles" />
        <option value="Chicago" />
        <option value="Houston" />
      </datalist>
    </div>
    <div>
      <button
        @click="addToFavoritesCard"
        class="toFavoritesBtn"
        type="button"
      >
        To Favorites
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'input-searchCity',
  props: {
    modelValue: [String, Number],
  },
  computed: {
    ...mapState({
      itemsProperties: state => state.weather.itemsProperties,
      favoritesCards: state => state.weather.favoritesCards,
    }),
  },
  methods: {
    ...mapMutations({
      setFavoritesCards: 'weather/setFavoritesCards',
    }),
    updateSearchCity(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    addToFavoritesCard() {
      if (this.favoritesCards.length >= 5) {
        alert('You can only add up to 5 favorites.');
        return;
      }

      const isAlreadyAdded = this.favoritesCards.some(card => card.name === this.itemsProperties.name);
      
      if (isAlreadyAdded) {
        alert('This city is already added to your favorites.');
        return;
      }
      this.setFavoritesCards(this.itemsProperties);
    },
  },
};
</script>

<style scoped>
  .searchCity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .chooseText {
    margin-right: 5px;
    font-size: 17px;
    line-height: 22px;
  }

  .searchInput {
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
    font-size: 15px;
    line-height: 15px;
    color: #000000;
  }
  .searchInput:focus {
    box-shadow: 0 0 8px #e7825b;
    outline: none;
  }
  .searchInput::placeholder {
    font-size: 15px;
    line-height: 15px;
    color: #000000;
  }

  .toFavoritesBtn {
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 15px;
    line-height: 15px;
    cursor: pointer;
  }
  .toFavoritesBtn:hover {
    transition: all .2s;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  }
</style>