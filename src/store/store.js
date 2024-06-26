import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      locations: [],
      currentLocation: null
    }
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations
    },
    setCurrentLocation(state, location) {
      state.currentLocation = location
    }
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await fetch('/src/assets/data.json')
        const data = await response.json()
        console.debug('Pushing locations to mutator:', data.data.locations)
        commit('setLocations', data.data.locations)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    },
    setCurrentLocation({ commit }, location) {
      commit('setCurrentLocation', location)
    }
  },
  getters: {
    locations: (state) => state.locations,
    currentLocation: (state) => state.currentLocation
  }
})
