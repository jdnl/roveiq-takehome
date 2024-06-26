<template>
  <h2>LocationList</h2>
  <ul>
    <li v-for="location in locations" :key="location.id" @click="setCurrentLocation(location)">
      {{ location.name }}
    </li>
  </ul>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const locations = computed(() => store.getters.locations)
const setCurrentLocation = (location) => {
  store.dispatch('setCurrentLocation', location)
}
</script>
