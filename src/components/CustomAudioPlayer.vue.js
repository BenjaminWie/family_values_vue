export default (await import('vue')).defineComponent({
  data() {
    return {
      audioSrc: require('@/assets/family.mp3'), // Correctly referencing the audio file in assets
      isPlaying: false,
      currentTime: 0,
      audioDuration: 0,
      volume: 1
    }
  },
  methods: {
    togglePlayPause() {
      const audio = this.$refs.audioPlayer
      if (this.isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
      this.isPlaying = !this.isPlaying
    },
    updateTime() {
      this.currentTime = this.$refs.audioPlayer.currentTime
    },
    seekAudio() {
      this.$refs.audioPlayer.currentTime = this.currentTime
    },
    adjustVolume() {
      this.$refs.audioPlayer.volume = this.volume
    },
    onAudioLoaded() {
      this.audioDuration = this.$refs.audioPlayer.duration
    },
    formatTime(time) {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }
  }
})
function __VLS_template() {
  let __VLS_ctx
  /* Components */
  let __VLS_otherComponents
  let __VLS_own
  let __VLS_localComponents
  let __VLS_components
  let __VLS_styleScopedClasses
  // CSS variable injection
  // CSS variable injection end
  let __VLS_resolvedLocalAndGlobalComponents
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'audio-player' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.button,
    __VLS_intrinsicElements.button
  )({
    ...{ onClick: __VLS_ctx.togglePlayPause },
    ...{ class: { playing: __VLS_ctx.isPlaying } },
    ...{ class: 'play-pause-button' }
  })
  __VLS_styleScopedClasses = { playing: isPlaying }
  if (!__VLS_ctx.isPlaying) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({})
    // @ts-ignore
    ;[togglePlayPause, isPlaying, isPlaying]
  } else {
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({})
  }
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'progress-container' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
    ...{ onInput: __VLS_ctx.seekAudio },
    type: 'range',
    min: '0',
    max: __VLS_ctx.audioDuration,
    ...{ class: 'progress-bar' }
  })
  __VLS_ctx.currentTime
  // @ts-ignore
  ;[seekAudio, audioDuration, currentTime]
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'time' } })
  __VLS_ctx.formatTime(__VLS_ctx.currentTime)
  __VLS_ctx.formatTime(__VLS_ctx.audioDuration)
  // @ts-ignore
  ;[audioDuration, currentTime, formatTime, formatTime]
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'volume-control' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
    ...{ onInput: __VLS_ctx.adjustVolume },
    type: 'range',
    min: '0',
    max: '1',
    step: '0.01',
    ...{ class: 'volume-slider' }
  })
  __VLS_ctx.volume
  // @ts-ignore
  ;[adjustVolume, volume]
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.audio,
    __VLS_intrinsicElements.audio
  )({
    ...{ onLoadedmetadata: __VLS_ctx.onAudioLoaded },
    ...{ onTimeupdate: __VLS_ctx.updateTime },
    ref: 'audioPlayer',
    src: __VLS_ctx.audioSrc
  })
  // @ts-ignore
  __VLS_ctx.audioPlayer
  // @ts-ignore
  ;[onAudioLoaded, updateTime, audioSrc, audioPlayer]
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    __VLS_styleScopedClasses['audio-player']
    __VLS_styleScopedClasses['play-pause-button']
    __VLS_styleScopedClasses['progress-container']
    __VLS_styleScopedClasses['progress-bar']
    __VLS_styleScopedClasses['time']
    __VLS_styleScopedClasses['volume-control']
    __VLS_styleScopedClasses['volume-slider']
  }
  var __VLS_slots
  return __VLS_slots
  const __VLS_componentsOption = {}
  const __VLS_name = undefined
  let __VLS_internalComponent
}
