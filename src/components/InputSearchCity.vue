<template>
  <div class="searchCity">
    <div>
      <label
        class="chooseText"
        for="cities"
    >
      Choose a city:
    </label>
      <input
        class="searchInput"
        type="text"
        id="searchCity"
        name="searchCity"
        list="cityList"
        placeholder="search..."
      >
      <datalist id="cityList">
        <option value="New York"></option>
        <option value="Los Angeles"></option>
        <option value="Chicago"></option>
        <option value="Houston"></option>
      </datalist>
    </div>
    <div>
      <button
        class="toFavoritesBtn"
        type="button"
      >
        To Favorites
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'input-searchCity',
}
</script>

<style scoped>
  .searchCity {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }

  .chooseText {
    margin-right: 5px;
    font-size: 17px;
    line-height: 22px;
  }

  .searchInput {
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
    font-size: 15px;
    line-height: 15px;
    color: #000000;
  }
  .searchInput:focus {
    box-shadow: 0 0 8px #e7825b;
    outline: none;
  }
  .searchInput::placeholder {
    font-size: 15px;
    line-height: 15px;
    color: #000000;
  }

  .toFavoritesBtn {
    border: none;
    border-radius: 5px;
    padding: 5px 15px;
    font-size: 15px;
    line-height: 15px;
    cursor: pointer;
  }
  .toFavoritesBtn:hover {
    transition: all .2s;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25);
  }
</style>