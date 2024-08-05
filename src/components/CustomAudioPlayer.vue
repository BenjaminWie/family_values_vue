<template>
    <div>
        <audio ref="audioPlayer" :src="audioSrc" autoplay></audio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            audioSrc: require('@/assets/family.mp3'), // Correctly referencing the audio file in assets
        };
    },
    mounted() {
        this.$refs.audioPlayer.play(); // Attempt to play the audio when the component is mounted
    }
};
</script>

<style scoped>
/* Add any styling here if necessary */
</style>