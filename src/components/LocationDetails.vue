<template>
  <div v-if="currentLocation" class="location-details">
    <div class="top-box">
      <img class="location-banner" :src="currentLocation.banner_img" />
    </div>
    <div class="middle-boxes">
      <div class="middle-left">
        <img class="location-logo" :src="currentLocation.logo_img" />
      </div>
      <div class="middle-right">Welcome to {{ currentLocation.name }}</div>
    </div>
    <div class="bottom-box">
      <p>{{ currentLocation.description }}</p>
      <p>Hours: {{ currentLocation.hours }}</p>
      <p>
        Address: {{ currentLocation.address1 }} {{ currentLocation.address2 }}
        {{ currentLocation.city }}, {{ currentLocation.state }}
      </p>
    </div>
  </div>
  <div v-else>Welcome! Please select a location on the left nav-bar to get started.</div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

const currentLocation = computed(() => store.getters.currentLocation)
</script>

<style scoped>
.location-details {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.top-box {
  flex: 20%;
  max-height: 250px;
  align-items: center;
  justify-content: center;
}
.middle-boxes {
  display: flex;
}
.middle-left {
  flex: 50%;
  max-height: 150px;
}
.middle-right {
  display: flex;
  flex: 50%;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.bottom-box {
  flex: 20%;
}
.location-banner {
  max-height: 100%;
  width: 100%;
}
.location-logo {
  max-height: 100%;
  width: 100%;
}
</style>
