<template>
  <div
    class="modalAlert"
    v-if="isModalAlertVisible"
  >
    <div class="modalAlert_window">
      <div class="modalAlert_window_content">
        <p
          class="modalAlert_window_content_text"
          v-if="isAlreadyAdded"
        >
          You already have this card
        </p>
        <p
          class="modalAlert_window_content_text"
          v-else-if="favoritesCards.length >= 5"
        >
          Maximum of 5 cards
        </p>
        <div>
          <button
            class="modalAlert_window_okay"
            @click="setModalAlertHidden"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'ModalWindow',
  props: {
    isAlreadyAdded: Boolean,
  },
  computed: {
    ...mapState({
      isModalAlertVisible: state => state.weather.isModalAlertVisible,
      favoritesCards: state => state.weather.favoritesCards,
    }),
  },
  methods: {
    ...mapMutations({
      setModalAlertVisible: 'weather/setModalAlertVisible',
    }),
    setModalAlertHidden() {
      this.setModalAlertVisible(false);
    }
  }
}
</script>

<style lang="scss">
  .modalAlert {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    &_window {
      border-radius: 8px;
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
      max-width: 400px;
      width: auto;
      padding: 20px;
      background: white;

      &_content {
        text-align: center;

        &_text {
          margin-bottom: 10px;
          font-size: 20px;
          line-height: 20px;
          color: #000000;
        }
      }

      &_okay {
        transition: background-color 0.3s ease;
        margin: 10px;
        border: none;
        border-radius: 5px;
        padding: 10px 25px;
        cursor: pointer;
        font-size: 16px;
        color: white;
        background-color: rgb(28, 124, 107);
      }
      &_okay:hover {
        background-color: rgb(15, 96, 81);
      }
    }
  }
</style>