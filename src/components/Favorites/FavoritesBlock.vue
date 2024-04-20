<template>
  <div class="favorites">
    <favorites-all-cards />
  </div>
</template>

<script>
import FavoritesAllCards from './FavoritesAllCards';

export default {
  name: 'favorites-block',
  components: {
    FavoritesAllCards,
  }
}
</script>

<style lang="scss">
  .favorites {
    border: none;
    border-radius: 5px;
    padding: 25px 25px;
    background-color: rgb(28, 124, 107);
  }
</style>