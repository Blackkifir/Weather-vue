<template>
  <form
    class="form"
    name="search"
    @submit.prevent="searchCitySubmit"
  >
    <div class="form_chooseBlock">
      <input
        class="form_chooseBlock_inputSearchCity"
        placeholder="Choose a city..."
        id="searchCity"
        name="searchCity"
        type="text"
        list="cityList"
        :value="modelValue"
        @input="updateSearchCity"
      />
      <datalist id="cityList">
        <option
          v-for="city in allCities"
          :value="city"
          :key="city"
        />
      </datalist>
      <button
        class="form_chooseBlock_searchSubmitBtn"
        type="submit"
        @submit="searchCitySubmit"
      >
        Search
      </button>
    </div>
    <div class="form_favoritesBlock">
      <button
        class="form_favoritesBlock_toFavoritesAddBtn"
        type="button"
        @click="addToFavoritesCard"
      >
        {{!isAddToFavorites ? "Add to favorites" : 'The card is added'}}
      </button>
      <span class="form_favoritesBlock_count">{{ favoritesCards.length }}</span>
    </div>
      <modal-alert
        v-if="favoritesCards.length >= 5 || isAlreadyAdded"
        :isAlreadyAdded="isAlreadyAdded"
      />
  </form>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ModalAlert from '@/components/Controls/ModalAlert';

export default {
  name: 'form-searchCity',
  components: {
    ModalAlert
  },
  props: {
    modelValue: [String, Number],
    searchCitySubmit: Function,
  },
  data() {
    return {
      allCities:
      [
        'New York','Los Angeles', 'Chicago',
        'Houston', 'California', 'Washington',
        'Texas', 'Las Vegas', 'Detroit'
      ],
      isAddToFavorites: false,
      isAlreadyAdded: null,
    }
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
      setModalAlertVisible: 'weather/setModalAlertVisible',
    }),
    updateSearchCity(event) {
      this.$emit('update:modelValue', event.target.value);
    },
    addToFavoritesCard() {
      this.isAlreadyAdded = this.favoritesCards.some(
        card => card.name === this.itemsProperties.name
      );

      if (this.favoritesCards.length >= 5) {
        this.setModalAlertVisible(true);
        return
      } else if (this.isAlreadyAdded) {
        this.setModalAlertVisible(true);
        return
      } else {
        this.setFavoritesCards(this.itemsProperties);
        this.isAddToFavorites = true

        setTimeout(() => {
          this.isAddToFavorites = false;
        }, 1500);
      }
    }
  }
};
</script>

<style lang="scss">
  .form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    &_chooseBlock {
      &_text {
        margin-right: 5px;
        font-size: 17px;
        line-height: 22px;
      }

      &_inputSearchCity {
        margin-right: 10px;
        border: none;
        border-radius: 5px;
        padding: 5px 15px;
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
        font-size: 15px;
        line-height: 15px;
        color: #000000;
      }
      &_inputSearchCity:focus {
        box-shadow: 0 0 8px #e7825b;
        outline: none;
      }
      &_inputSearchCity::placeholder {
        font-size: 15px;
        line-height: 15px;
        color: #000000;
      }

      &_searchSubmitBtn {
        border: none;
        border-radius: 5px;
        padding: 5px 15px;
        cursor: pointer;
        font-size: 17px;
        line-height: 17px;
        background-color: #FFFFFF;
        color: #000000;
      }
      &_searchSubmitBtn:hover {
        transition: all .2s;
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
      }
    }

      &_favoritesBlock {
        position: relative;

        &_toFavoritesAddBtn {
          border: none;
          border-radius: 5px;
          padding: 5px 15px;
          font-size: 15px;
          line-height: 15px;
          cursor: pointer;
          background-color: #FFFFFF;
          color: #000000;
        }
        &_toFavoritesAddBtn:hover {
          transition: all .2s;
          box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
        }

        &_count {
          position: absolute;
          top: -10px; 
          right: -10px;
          background: linear-gradient(to right, #c35f46 0%, #df6202 100%);
          color: white;
          border-radius: 50%;
          padding: 3px 6px;
          font-size: 12px;
          line-height: 12px;
          text-align: center;
        }
      }
    }

  @media screen and (max-width: 700px) {
    .form {
      flex-direction: column;

      &_chooseBlock {
        margin-bottom: 20px;

        &_text {
          font-size: 15px;
        }

        &_inputSearchCity {
          padding: 5px 10px;
          font-size: 12px;
          line-height: 12px;
        }

        &_searchSubmitBtn {
          padding: 5px 10px;
          font-size: 14px;
          line-height: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 500px) {
    .form {
      &_chooseBlock {
        flex-direction: column;

        &_inputSearchCity {
          padding: 5px 10px;
          font-size: 12px;
          line-height: 12px;
        }

        &_searchSubmitBtn {
          padding: 5px 10px;
          font-size: 14px;
          line-height: 14px;
        }
      }
    }
  }
</style>