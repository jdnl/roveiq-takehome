import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      locations: []
    }
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations
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
    }
  },
  getters: {}
})
