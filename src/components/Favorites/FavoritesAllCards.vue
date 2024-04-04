<template>
  <div class="favorites_allCards">
    <favorites-card
      v-for="card in favoritesCards"
      :key="card.id"
      :description="card.description"
      :temp="card.temp"
      :humidity="card.humidity"
      :wind="card.wind"
      :name="card.name"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FavoritesCard from './FavoritesCard.vue';

export default {
  name: 'favorites-all-carts',
  components: {
    FavoritesCard,
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
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    width: 100%;
  }
</style>