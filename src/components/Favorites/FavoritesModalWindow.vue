<template>
  <div
    class="modalOverlay"
    v-if="isModalVisible"
  >
    <div class="modalOverlay_window">
      <div class="modalOverlay_window_content">
        <p class="modalOverlay_window_content_text">
          Do you really want to delete this card ?
        </p>
        <div class="modalOverlay_window_buttons">
          <button
            class="modalOverlay_window_buttons_button confirm_button"
            @click="confirm"
          >
            Confirm
          </button>
          <button
            class="modalOverlay_window_buttons_button cancel_button"
            @click="cancel"
          >
            Cancel
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

  computed: {
    ...mapState({
      isModalVisible: state => state.weather.isModalVisible,
      idCard: state => state.weather.idCard,
    }),
  },
  methods: {
    ...mapMutations({
      setDeleteCard: 'weather/setDeleteCard',
      setModalVisible: 'weather/setModalVisible',
    }),
    cancel() {
      this.setModalVisible(false);
    },
    confirm() {
      this.setDeleteCard(this.idCard);
      this.setModalVisible(false);
},
  }
}
</script>

<style lang="scss">
  .modalOverlay {
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
          font-size: 20px;
          line-height: 20px;
          color: #000000;
        }
      }

      &_buttons {
        &_button {
          border: none;
          padding: 10px 20px;
          margin: 10px;
          border-radius: 5px;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
      }
    }
  }
  
  .confirm_button {
    background-color: rgb(28, 124, 107);
  }
  
  .confirm_button:hover {
    background-color: rgb(15, 96, 81);
  }
  
  .cancel_button {
    background-color: #da190b;
  }
  
  .cancel_button:hover {
    background-color: #ae2a20;
  }

  @media screen and (max-width: 500px) {
    .modalOverlay {
      &_window {
        padding: 10px;

        &_content {
          &_text {
            font-size: 17px;
            line-height: 17px;
          }
        }

        &_buttons {
          &_button {
            padding: 10px 15px;
            margin: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>