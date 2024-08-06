<template>
  <div>
    <audio ref="audioPlayer" src="/family.mp3" autoplay controls></audio>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  mounted() {
    const audioElement = this.$refs.audioPlayer as HTMLAudioElement
    audioElement.play().catch((error) => {
      console.log('User interaction required to play audio.', error)
    })
  }
})
</script>

<style scoped>
/* No additional styles to avoid interference */
</style>
