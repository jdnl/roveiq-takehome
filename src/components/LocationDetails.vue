<template>
  <h2>LocationDetails</h2>
  <p>Banner: {{ currentLocation.banner_img }}</p>
  <p>Logo: {{ currentLocation.logo_img }}</p>
  <p>Name: {{ currentLocation.name }}</p>
  <p>Description: {{ currentLocation.description }}</p>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const currentLocation = computed(() => store.getters.currentLocation)
</script>
