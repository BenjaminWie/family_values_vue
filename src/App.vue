<template>
  <div class="flex flex-col min-h-screen bg-gray-900 text-gray-100">
    
    <!-- Welcome Section -->
    <section class="text-center py-12 md:py-16 lg:py-20 bg-gray-800">
      <header>
        <div class="mb-6 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            class="h-20 md:h-28 mx-auto text-orange-500"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
          >
            <!-- House Outline -->
            <path d="M10 50 L50 10 L90 50 L90 90 L10 90 Z" fill="none" />
            <!-- Heart inside the house -->
            <path class="heart-hover-animation" d="M50 55 C40 45, 30 55, 50 75 C70 55, 60 45, 50 55 Z" fill="currentColor" />
          </svg>
        </div>
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-100 mb-4">
          Familienwerte
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl text-gray-400">
          Diese Werte leiten unser Zusammenleben.
        </p>
      </header>
    </section>

    <!-- Audio Section -->
    <section class="audio-section flex justify-center items-center py-6 md:py-8 lg:py-10">
      <audio ref="audioPlayer" :src="audioSrc" controls class="w-full max-w-md bg-gray-800 p-2 rounded-lg shadow-md"></audio>
    </section>

    <!-- Value Sections -->
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-12 w-full max-w-screen-xl mx-auto mt-6 mb-16">
      <div v-for="(value, index) in translatedValues" :key="index" @click="openModal(value)" class="cursor-pointer transform transition-transform duration-300 hover:scale-105">
        <ValueSection :value="value" class="bg-gray-800 p-6 rounded-lg shadow-md" />
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-400 py-10 mt-auto">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0 px-4 md:px-10 lg:px-20">
        <div class="space-y-2 md:space-y-3">
          <p class="text-lg font-semibold">Wer</p>
          <p class="text-xl">Familie Wiedenbrueg</p>
        </div>
        <div class="space-y-2 md:space-y-3">
          <p class="text-lg font-semibold">Warum</p>
          <p class="text-xl">
            Zur Erinnerung an die Werte, die wir uns gesetzt haben, und warum wir sie gewählt haben.
          </p>
        </div>
        <div class="text-lg md:text-right space-y-2 md:space-y-3">
          <p class="text-xl">&copy; 2024 Wiedenbrueg</p>
          <p class="text-lg">All rights reserved.</p>
        </div>
      </div>
    </footer>

    <!-- Modal for Detailed View -->
    <Modal v-if="showModal" :show="showModal" :selected-value="selectedValue" @close-modal="closeModal"></Modal>

    <!-- Close Button for Modal -->
    <button v-if="showModal" @click="closeModal" class="fixed top-4 md:top-6 lg:top-8 right-4 md:right-6 lg:right-8 p-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none">
      ✕
    </button>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Modal from './components/ModalComponent.vue';
import ValueSection from './components/ValueSection.vue';
import { valuesContent } from './valuesContent.js';

export default defineComponent({
  components: {
    Modal,
    ValueSection
  },
  data() {
    return {
      language: 'de',
      showModal: false,
      selectedValue: null,
      audioSrc: ''
    };
  },
  computed: {
    translatedValues() {
      return valuesContent[this.language];
    }
  },
  mounted() {
    // Determine the environment and set the correct audio source
    const isDevelopment = process.env.NODE_ENV === 'development';
    this.audioSrc = isDevelopment
      ? new URL('@/assets/Family.mp3', import.meta.url).href
      : '/Family.mp3';

    const audioElement = this.$refs.audioPlayer as HTMLAudioElement;
    audioElement.play().catch((error) => {
      console.log('User interaction required to play audio.', error);
    });
  },
  methods: {
    openModal(value) {
      this.showModal = true;
      this.selectedValue = value;
    },
    closeModal() {
      this.showModal = false;
      this.selectedValue = null;
    }
  }
});
</script>

<style scoped>
/* Audio Player Styling */
.audio-section audio {
  background-color: #2d2d2d;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* General Spacing */
.modal-content {
  padding: 1.5rem;
  background-color: #1a1a1a;
  border-radius: 12px;
  max-width: 90vw;
  margin: auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Typography Adjustments */
h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.375rem;
  font-weight: 600;
}

a {
  color: #38b2ac;
  font-weight: 500;
}
</style>