<template>
  <main class="main">
    <div class="weather">
      <div class="weather_buttons">
        <button
          class="weather_buttons_primaryBtn"
          type="button"
          @click="$router.push('/')"
        >
          Home
        </button>
        <button
          class="weather_buttons_favoritesBtn"
          type="button"
          @click="$router.push('/favorites')"
        >
          Favorites
        </button>
      </div>
    </div>
    <primary-block v-if="isHomeRoute" />
    <favorites-block v-if="isFavoritesRoute" />
  </main>
</template>

<script>
  import PrimaryBlock from '@/components/Primary/PrimaryBlock';
  import FavoritesBlock from '@/components/Favorites/FavoritesBlock';

export default {
  name: 'main-static',
  components: {
    PrimaryBlock,
    FavoritesBlock,
  },
  computed: {
    isHomeRoute() {
      return this.$route.path === '/';
    },
    isFavoritesRoute() {
      return this.$route.path === '/favorites';
    }
  },
}
</script>

<style lang="scss">
  .main {
    margin-bottom: 30px;
  }

  .weather_buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;

    &_primaryBtn,
    &_favoritesBtn {
      border: none;
      border-radius: 5px;
      padding: 5px 15px;
      background-color: rgb(28, 124, 107);
      cursor: pointer;
      font-size: 17px;
      line-height: 20px;
      color: inherit;
    }
    
    &_primaryBtn:hover,
    &_favoritesBtn:hover {
      transition: all .2s;
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
    }
  }
</style>
