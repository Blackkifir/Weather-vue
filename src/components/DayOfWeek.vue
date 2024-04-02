<template>
  <div class="dayOfWeek">
    <div class="dayOfWeek_details">
      <p
        class="dayOfWeek_day"
      >
        31
      </p>
      <p
        class="dayOfWeek_currentDay"
      >
        Sunday
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'day-of-week',
  }
</script>

<style scoped>
  .dayOfWeek {
    margin-bottom: 30px;
    border: 2px solid #FFFFFF;
    border-radius: 5px;
    padding: 15px;
  }

  .dayOfWeek_details {
    display: flex;
    margin-bottom: 10px;
  }
  
  .dayOfWeek_day,
  .dayOfWeek_currentDay {
    border: 2px solid #FFFFFF;
    font-size: 17px;
    line-height: 20px;
    padding: 5px 10px;
  }

  .dayOfWeek_day {
    border-right: none;
  }

</style>