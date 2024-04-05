<template>
  <div
    v-if="favoritesCards.length !== 0"
    class="favorites_allCards"
  >
    <favorites-card
      v-for="card in favoritesCards"
      :key="card.id"
      :id="card.id"
      :description="card.description"
      :temp="card.temp"
      :humidity="card.humidity"
      :wind="card.wind"
      :name="card.name"
    />
    <favorites-modalWindow />
  </div>
  <div
    class="favorites_allCardsNotElements"
    v-else
  >
    <p class="favorites_allCards_text">Nothing has been added to favorites &#x1F614;</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FavoritesCard from './FavoritesCard.vue';
import FavoritesModalWindow from './FavoritesModalWindow.vue';

export default {
  name: 'favorites-all-carts',
  components: {
    FavoritesCard,
    FavoritesModalWindow,
  },
  computed: {
    ...mapState({
      favoritesCards: state => state.weather.favoritesCards,
    }),
  },
}
</script>

<style scoped>
  .favorites_allCards {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    width: 100%;
  }

  .favorites_allCardsNotElements {
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    padding: 15px;
  }

  .favorites_allCards_text {
    font-size: 23px;
    font-weight: 700;
    line-height: 23px;
  }
</style>