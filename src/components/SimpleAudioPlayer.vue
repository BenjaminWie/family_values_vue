<template>
  <div>
    <audio ref="audioPlayer" :src="audioSrc" autoplay controls></audio>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
const familyAudio = new URL('@/assets/family.mp3', import.meta.url).href

export default defineComponent({
  data() {
    return {
      audioSrc: familyAudio
    }
  },
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
