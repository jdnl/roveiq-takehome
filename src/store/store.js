import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      locations: [],
      currentLocation: null,
      ads: []
    }
  },
  mutations: {
    setLocations(state, locations) {
      state.locations = locations
    },
    setCurrentLocation(state, location) {
      state.currentLocation = location
    },
    setAds(state, schedules) {
      let ads = []
      schedules.forEach((schedule) => {
        schedule.ads.forEach((ad) => {
          ads.push(ad.img_url)
        })
      })
      console.debug('Ads in state:', ads)
      state.ads = ads
    }
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await fetch('https://testapi.io/api/ndenlinger/roveiq')
        const data = await response.json()
        console.debug('Pushing locations to mutator:', data.data.locations)
        commit('setLocations', data.data.locations)
        console.debug('Pushing schedules to mutator:', data.data.schedules)
        commit('setAds', data.data.schedules)
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
    currentLocation: (state) => state.currentLocation,
    ads: (state) => state.ads
  }
})
