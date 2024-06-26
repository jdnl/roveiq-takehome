<template>
  <div id="container">
    <div class="left-pane"><LocationList /></div>
    <div class="center-pane"><LocationDetails /></div>
    <div class="right-pane"><AdSlideShow /></div>
  </div>
</template>

<script setup>
import LocationList from './components/LocationList.vue'
import LocationDetails from './components/LocationDetails.vue'
import AdSlideShow from './components/AdSlideShow.vue'
</script>

<style>
#container {
  display: flex;
  height: 100vh;
}
.left-pane {
  flex: 20%;
  border: solid 10px;
}
.center-pane {
  flex: 60%;
  border: solid 10px;
}
.right-pane {
  flex: 20%;
  border: solid 10px;
}
</style>
