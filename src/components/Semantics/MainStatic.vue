<template>
  <main class="main">
    <div class="weather">
      <div class="weather_buttons">
        <button
          class="primary-button"
          type="button"
        >
          Home
        </button>
        <button
          class="favorites-button"
          type="button"
        >
          Favorites
        </button>
      </div>
    </div>
    <primary-block />
  </main>
</template>

<script>
  import PrimaryBlock from '@/components/Primary/PrimaryBlock.vue';

export default {
  name: 'main-static',
  components: {
    PrimaryBlock,
  }
}
</script>

<style scoped>
  .weather_buttons {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
  }

  .primary-button,
  .favorites-button {
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    background-color: rgb(28, 124, 107);
    cursor: pointer;
    font-size: 17px;
    line-height: 20px;
    color: inherit;
  }
  .primary-button:hover,
  .favorites-button:hover {
    transition: all .2s;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  }
</style>
