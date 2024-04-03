<template>
  <div class="card">
    <div class="card_icons">
      <img class="card_img" src="@/assets/cardImg.png" alt="icon-notFound">
    </div>
    <div class="card_details">
      <p class="card_text">
        description:
      </p>
      <p class="card_text">
        temperature:
      </p>
      <p class="card_text">
        humidity:
      </p>
      <p class="card_text">
        wind:
      </p>
    </div>
    <div class="card_locations">
      <p class="card_text">
        locations:
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'day-of-week-card',
  }
</script>

<style scoped>
  .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
  transition: transform 0.3s ease;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 250px;
  background-color: #f9f9f9;
}

.card:hover {
  transform: translateY(-5px);
}

.card_icons {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
  border-radius: 5px;
  background: linear-gradient(to right, #ff7e5f 0%, #feb47b 100%);
}

.card_img {
  width: 85px;
  height: 85px;
}

.card_details {
  margin-bottom: 5px;
}

.card_details,
.card_locations {
  width: 100%;
}

.card_text {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: #333;
}

.card_text:first-child {
  margin-top: 0;
}

.card_text:last-child {
  margin-bottom: 0;
}
</style>