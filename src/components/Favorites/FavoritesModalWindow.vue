<template>
  <div
    v-if="isModalVisible"
    class="modal-overlay"
  >
    <div class="modal-window">
      <div class="modal-content">
        <p class="modal-text">Do you really want to delete this card ?</p>
        <div class="modal-buttons">
          <button class="button confirm-button" @click="confirm">
            Confirm
          </button>
          <button class="button cancel-button" @click="cancel">
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

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-window {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
    width: auto;
    max-width: 400px;
  }
  
  .modal-content {
    text-align: center;
  }
  
  .modal-text {
    font-size: 20px;
    line-height: 20px;
    color: #000000;
  }
  
  .button {
    border: none;
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .confirm-button {
    background-color: rgb(28, 124, 107);
  }
  
  .confirm-button:hover {
    background-color: rgb(15, 96, 81);
  }
  
  .cancel-button {
    background-color: #da190b;
  }
  
  .cancel-button:hover {
    background-color: #ae2a20;
  }
  
  .modal-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    .modal-window {
      padding: 10px;
    }

    .modal-text {
      font-size: 17px;
      line-height: 17px;
    }

    .button {
      padding: 10px 15px;
      margin: 10px;
      font-size: 14px;
    }
  }
</style>