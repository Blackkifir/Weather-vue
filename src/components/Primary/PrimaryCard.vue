<template>
  <div class="big-card">
    <div class="big-card_icons">
      <img class="big-card_img" src="@/assets/cardImg.png" alt="Weather icon not found">
    </div>
    <div class="big-card_details">
      <p class="big-card_text">Description: Sunny</p>
      <p class="big-card_text">Temperature: 25°C</p>
      <p class="big-card_text">Humidity: 60%</p>
      <p class="big-card_text">Wind: 5 m/s</p>
    </div>
    <div class="big-card_locations">
      <p class="big-card_text">Location: Your City</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'primary-card',
}
</script>

<style scoped>
.big-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 40px;
  background-color: #f9f9f9;
}

.big-card_icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  background: linear-gradient(to right, #c6bebe 0%, #7f7c78 100%);
}

.big-card_img {
  width: 120px;
  height: 120px;
}

.big-card_details,
.big-card_locations {
  width: 100%;
}

.big-card_text {
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 10px 0;
  background-color: #ffffff;
  font-size: 16px;
  color: #333;
}

.big-card_text:first-child {
  margin-top: 0;
}

.big-card_text:last-child {
  margin-bottom: 0;
}
</style>