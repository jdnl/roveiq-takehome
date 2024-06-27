<template>
  <div id="container">
    <div class="left-pane"><LocationList /></div>
    <div class="center-pane"><LocationDetails /></div>
    <div class="right-pane"><AdSlideShow /></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import LocationList from './components/LocationList.vue'
import LocationDetails from './components/LocationDetails.vue'
import AdSlideShow from './components/AdSlideShow.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('fetchData')
})
</script>

<style>
#container {
  display: flex;
  height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
}
.left-pane,
.right-pane {
  flex: 20%;
  padding: 10px;
  background-color: whitesmoke;
}
.center-pane {
  flex: 60%;
  padding: 10px;
}
</style>
