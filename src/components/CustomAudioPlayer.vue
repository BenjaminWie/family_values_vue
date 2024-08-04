<template>
    <div class="audio-player">
        <div class="controls">
            <button @click="togglePlayPause" :class="{ playing: isPlaying }">
                <span v-if="!isPlaying">&#9658;</span> <!-- Play Icon -->
                <span v-else>&#10074;&#10074;</span> <!-- Pause Icon -->
            </button>
            <input type="range" min="0" :max="audioDuration" v-model="currentTime" @input="seekAudio"
                class="progress-bar" />
            <div class="time">
                {{ formatTime(currentTime) }} / {{ formatTime(audioDuration) }}
            </div>
        </div>
        <div class="volume-control">
            <input type="range" min="0" max="1" step="0.01" v-model="volume" @input="adjustVolume"
                class="volume-slider" />
        </div>
        <audio ref="audioPlayer" :src="audioSrc" @timeupdate="updateTime"></audio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            audioSrc: "@assets/family.mp3",
            isPlaying: false,
            currentTime: 0,
            audioDuration: 0,
            volume: 1,
        };
    },
    mounted() {
        const audio = this.$refs.audioPlayer;
        audio.volume = this.volume;

        // Load metadata to get the duration
        audio.onloadedmetadata = () => {
            this.audioDuration = audio.duration;
        };
    },
    methods: {
        togglePlayPause() {
            const audio = this.$refs.audioPlayer;
            if (this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            this.isPlaying = !this.isPlaying;
        },
        updateTime() {
            this.currentTime = this.$refs.audioPlayer.currentTime;
        },
        seekAudio() {
            this.$refs.audioPlayer.currentTime = this.currentTime;
        },
        adjustVolume() {
            this.$refs.audioPlayer.volume = this.volume;
        },
        formatTime(time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        },
    },
};
</script>

<style scoped>
.audio-player {
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    border-radius: 10px;
    padding: 20px;
    max-width: 350px;
    margin: 20px auto;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.controls {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.controls button {
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    outline: none;
    transition: transform 0.2s ease-in-out;
}

.controls button.playing {
    transform: scale(1.5);
    animation: pulse 1s infinite;
}

.controls button span {
    display: inline-block;
    transition: transform 0.2s;
}

.controls button.playing span {
    transform: scale(1.2);
}

.controls .progress-bar {
    width: 60%;
    -webkit-appearance: none;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    outline: none;
    margin: 0 10px;
}

.controls .progress-bar::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
}

.time {
    color: white;
    font-size: 14px;
}

.volume-control {
    margin-top: 15px;
    width: 80%;
}

.volume-slider {
    width: 100%;
    -webkit-appearance: none;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    outline: none;
}

.volume-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
}

@keyframes pulse {
    0% {
        transform: scale(1.5);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    }

    50% {
        transform: scale(1.6);
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
    }

    100% {
        transform: scale(1.5);
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
    }
}
</style>