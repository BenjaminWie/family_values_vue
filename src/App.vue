<template>
  <div class="font-sans flex flex-col min-h-screen text-gray-100 bg-transparent selection:bg-orange-500/30">
    <BackgroundAtmosphere />

    <!-- Welcome Section -->
    <section class="text-center py-20 md:py-32 relative overflow-hidden">
      <header class="container mx-auto px-6 relative z-10">
        <div class="mb-10 group cursor-default">
          <div class="relative inline-block">
            <div class="absolute inset-0 bg-orange-500/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="h-24 md:h-32 mx-auto text-orange-500 relative transform transition-transform duration-700 group-hover:scale-110"
              fill="none" stroke="currentColor" stroke-width="3">
              <!-- House Outline -->
              <path d="M10 50 L50 10 L90 50 L90 90 L10 90 Z" fill="none" class="opacity-50" />
              <!-- Heart inside the house -->
              <path class="animate-pulse"
                d="M50 55 C40 45, 30 55, 50 75 C70 55, 60 45, 50 55 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        <h1 class="text-5xl md:text-8xl font-black tracking-tighter text-white mb-6 uppercase">
          Familien<span class="text-orange-500">werte</span>
        </h1>
        
        <div class="max-w-3xl mx-auto">
          <p class="text-lg md:text-2xl font-light leading-relaxed text-gray-400 font-serif italic">
            "Unsere Werte sind der Kompass für unser gemeinsames Wachstum und ein harmonisches Miteinander."
          </p>
        </div>
      </header>
    </section>

    <!-- Value Sections Grid -->
    <section class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <div v-for="(value, index) in translatedValues" :key="index" @click="openModal(value)"
          class="cursor-pointer group transition-all duration-500 hover:-translate-y-2">
          <ValueSection :value="value" class="h-full" />
        </div>
      </div>
    </section>

    <!-- Audio Section - Redesigned as a floating bar or distinct section -->
    <section class="container mx-auto px-6 py-16 text-center">
      <div class="inline-flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl gap-6 shadow-2xl">
        <div class="text-left">
          <h2 class="text-2xl font-bold text-orange-400 uppercase tracking-widest mb-1">Unser Lied</h2>
          <p class="text-sm text-gray-500">Die Hymne unserer Gemeinschaft</p>
        </div>
        <audio ref="audioPlayer" :src="audioSrc" controls class="custom-audio-styles"></audio>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-white/5 bg-black/20 backdrop-blur-md py-16 mt-20">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
        <div class="space-y-4">
          <h3 class="text-sm font-bold uppercase tracking-widest text-orange-500">Wer</h3>
          <p class="text-2xl font-light">Familie Wiedenbrueg</p>
        </div>
        <div class="max-w-md space-y-4">
          <h3 class="text-sm font-bold uppercase tracking-widest text-orange-500">Warum</h3>
          <p class="text-lg text-gray-400 font-light">
            Ein digitales Denkmal für die Prinzipien, die uns leiten und uns daran erinnern, wer wir sein wollen.
          </p>
        </div>
        <div class="space-y-4 text-left md:text-right">
          <p class="text-2xl font-black text-white/20">&copy; 2024</p>
          <p class="text-sm uppercase tracking-widest text-gray-600">Wiedenbrueg Foundation</p>
        </div>
      </div>
    </footer>

    <!-- Modal for Detailed View -->
    <Modal v-if="showModal" :show="showModal" :selected-value="selectedValue" @close-modal="closeModal"></Modal>
  </div>
</template>

<script>
import Modal from './components/ModalComponent.vue'
import ValueSection from './components/ValueSection.vue'
import BackgroundAtmosphere from './components/BackgroundAtmosphere.vue'
import { valuesContent } from './valuesContent.js'

export default {
  components: {
    Modal,
    ValueSection,
    BackgroundAtmosphere
  },
  data() {
    return {
      language: 'de',
      showModal: false,
      selectedValue: null
    }
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
      ? new URL('@/assets/family.mp3', import.meta.url).href
      : '/family.mp3';

    const audioElement = this.$refs.audioPlayer;
    if (audioElement && audioElement.play) {
      audioElement.play().catch((error) => {
        console.log('User interaction required to play audio.', error);
      });
    }
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
}
</script>

<style>
/* Global resets or typography imports if needed */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Playfair+Display:ital,wght@0,900;1,900&display=swap');

.custom-audio-styles::-webkit-media-controls-panel {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.custom-audio-styles::-webkit-media-controls-current-time-display,
.custom-audio-styles::-webkit-media-controls-time-remaining-display {
  color: white;
}
</style>