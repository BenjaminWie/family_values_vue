<template>
    <audio ref="audioPlayer" :src="audioSrc" autoplay></audio>
</template>

<script>
export default {
    data() {
        return {
            audioSrc: require('@/assets/family.mp3'), // Ensure the correct path to your audio file
        };
    },
    mounted() {
        this.$refs.audioPlayer.play().catch(error => {
            console.log("Autoplay prevented. Audio is muted to allow autoplay.", error);
            this.$refs.audioPlayer.muted = true;
            this.$refs.audioPlayer.play();
        });
    },
};
</script>

<style scoped>
/* No additional styles to avoid interference */
</style>