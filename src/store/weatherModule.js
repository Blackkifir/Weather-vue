import axios from "axios";

export const weatherModule = {
  state: () => ({
    items: [],
    isLoading: false,
    searchCity: '',
  }),
  getters: {},
  mutations: {
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setItems(state, items) {
      state.items = items;
    },
    setSearchCity(state, searchCity) {
      state.searchCity = searchCity;
    }
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
    }
  },
  namespaced: true,
}