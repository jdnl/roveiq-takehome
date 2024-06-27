<template>
  <ul class="location-list">
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

<style scoped>
.location-list {
  margin: 0;
  padding: 0;
  list-style-type: none;
  max-height: 400px;
}
.location-list li {
  margin: 5px;
  padding: 10px;
  border: 1px solid;
  transition: background-color 0.5s;
  cursor: pointer;
}
.location-list li:hover {
  background-color: lightslategray;
}
</style>
