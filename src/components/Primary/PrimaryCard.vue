<template>
  <div class="bigCard">
    <div class="bigCard_icons">
      <img
        class="bigCard_icons_img"
        src="@/assets/cardImg.png"
        alt="Weather icon not found"
      >
    </div>
    <div class="bigCard_details">
      <p class="bigCard_details_text">Description: {{ description }}</p>
      <p class="bigCard_details_text">Temperature: {{`${ temp }°C`}}</p>
      <p class="bigCard_details_text">Humidity: {{`${ humidity }%`}}</p>
      <p class="bigCard_details_text">Wind: {{ wind }} m/s</p>
      <p class="bigCard_details_text">Location: {{ name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'primary-card',

  props: {
    id: [Number],
    description: [String],
    temp: [Number],
    humidity: [Number],
    wind: [Number],
    name: [String],
  },
}
</script>

<style lang="scss">
  .bigCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 40px;
    background-color: #f9f9f9;

    &_icons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      border-radius: 5px;
      width: 100%;
      height: 150px;
      background: linear-gradient(to right, #ff7e5f 0%, #feb47b 100%);

      &_img {
        width: 120px;
        height: 120px;
      }
    }
    &_details {
      width: 100%;

      &_text {
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        padding: 15px;
        margin: 10px 0;
        background-color: #ffffff;
        font-size: 16px;
        color: #333;
      }
      &_text:first-child {
        margin-top: 0;
      }
      &_text:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .bigCard {
      padding: 35px;
    
        &_icons {
        &_img {
          width: 90px;
          height: 90px;
        }
      }
  
      &_details {
        &_text {
          font-size: 15px;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    .bigCard {
      padding: 20px;
    
        &_icons {
        height: 100px;

        &_img {
          width: 70px;
          height: 70px;
        }
      }

      &_details {
        &_text {
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 7px;
          margin: 7px 0;
          background-color: #ffffff;
          font-size: 12px;
          color: #333;
        }
      }
    }
  }
</style>