import axios from "axios";

export const weatherModule = {
  state: () => ({
    items: [],
    itemsProperties: {},
    isLoading: false,
    searchCity: '',
    favoritesCards: [],
    isModalVisible: false,
    idCard: 0,
  }),
  mutations: {
    setItems(state, items) {
      state.items = items;
    },
    setItemsProperties(state, properties) {
      state.itemsProperties = properties;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setSearchCity(state, searchCity) {
      state.searchCity = searchCity;
    },
    setFavoritesCards(state, newCard) {
      state.favoritesCards.push(newCard);
      localStorage.setItem('favoritesCards', JSON.stringify(state.favoritesCards));
    },
    setModalVisible(state, isModalVisible) {
      state.isModalVisible = isModalVisible;
    },
    setIdCard(state, idCard) {
      state.idCard = idCard;
    },
    setDeleteCard(state, idCard) {
      state.favoritesCards = state.favoritesCards.filter((card) => card.id !== idCard);
      localStorage.setItem('favoritesCards', JSON.stringify(state.favoritesCards));
    },
    storageFavoritesCards(state, cards) {
      state.favoritesCards = cards;
    },
  },
  actions: {
    async getDayOfWeek({commit}, city = 'New York') {
      try {
        commit('setLoading', true);
        const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6552610f79c2b672097111aa772032b1`;
        const response = await axios.get(api);
  
        commit('setItems', response.data);
      } catch (error) {
        console.log(error);
      } finally {
        commit('setLoading', false);
      }
    },
    loadFavoritesCards({ commit }) {
      const storage = localStorage.getItem('favoritesCards');
      if (storage) {
        commit('storageFavoritesCards', JSON.parse(storage));
      }
    },
  },
  namespaced: true,
};
