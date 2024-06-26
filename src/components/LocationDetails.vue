<template>
  <h2>LocationDetails</h2>
  <img :src="currentLocation.banner_img" />
  <img :src="currentLocation.logo_img" />
  <p>Name: {{ currentLocation.name }}</p>
  <p>Description: {{ currentLocation.description }}</p>
  <p>Hours: {{ currentLocation.hours }}</p>
  <p>
    Address: {{ currentLocation.address1 }} {{ currentLocation.address2 }}
    {{ currentLocation.city }}, {{ currentLocation.state }}
  </p>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const currentLocation = computed(() => store.getters.currentLocation)
</script>
