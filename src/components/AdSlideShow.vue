<template>
  <h2>AdSlideShow</h2>
  <div v-if="ads.length">
    <img class="ad-media" v-if="currentAd.endsWith('.jpg')" :src="currentAd" />
    <video class="ad-media" v-if="currentAd.endsWith('.mp4')" :src="currentAd" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const ads = computed(() => store.getters.ads)

const adIndex = ref(0)
const updateAdIndex = () => {
  adIndex.value = (adIndex.value + 1) % ads.value.length
}
setInterval(updateAdIndex, 10000)

const currentAd = computed(() => {
  return ads.value[adIndex.value]
})
</script>

<style scoped>
.ad-media {
  width: 100%;
  height: auto;
}
</style>
