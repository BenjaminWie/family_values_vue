<template>
  <div class="flex flex-col min-h-screen text-gray-100">

    <!-- Welcome Section -->
    <section class="text-center py-12 md:py-16 lg:py-20">
      <header>
        <div class="mb-6 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="h-20 md:h-28 mx-auto text-orange-500"
            fill="none" stroke="currentColor" stroke-width="4">
            <!-- House Outline -->
            <path d="M10 50 L50 10 L90 50 L90 90 L10 90 Z" fill="none" />
            <!-- Heart inside the house -->
            <path class="animate-pulse hover:transition-transform"
              d="M50 55 C40 45, 30 55, 50 75 C70 55, 60 45, 50 55 Z" fill="currentColor" />
          </svg>
        </div>
        <h1
          class="hover:animate-bounce text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-100 mb-4">
          Familienwerte
        </h1>
        <p class="text-xl md:text-2xl lg:text-3xl text-gray-400">
          Unsere Familienwerte sind der Kern dessen, was uns verbindet und leitet. Sie geben unserem Handeln, unserer
          Erziehung und unserem Miteinander eine klare Richtung und fördern ein harmonisches Zusammenleben. Indem wir
          diese Werte bewusst leben, schaffen wir ein starkes Fundament für unsere Familie.
        </p>
      </header>
    </section>

    <!-- Value Sections -->
    <section
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg: gap-15 px-4 md:px-8 lg:px-12 w-full max-w-screen-xl mx-auto mt-6 mb-16">
      <div v-for="(value, index) in translatedValues" :key="index" @click="openModal(value)"
        class="cursor-pointer transform transition-transform duration-600 hover:scale-125 hover:z-50">
        <ValueSection :value="value" class="p-6 rounded-lg shadow-md" />
      </div>
    </section>

    <!-- Audio Section -->
    <section class="flex justify-center items-center py-6 md:py-8 lg:py-10">
      <h2 class="felx-1 text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-orange-500">Unser Lied</h2>
      <audio ref="audioPlayer" :src="audioSrc" controls
        class="hover:animate-bounce flex-2 w-full max-w-md p-2 rounded-lg shadow-md"></audio>
    </section>

    <!-- Footer with improved design -->
    <footer class="text-gray-400 py-10 mt-auto">
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0 px-4 md:px-10 lg:px-20">
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
    <button v-if="showModal" @click="closeModal"
      class="fixed top-4 md:top-6 lg:top-8 right-4 md:right-6 lg:right-8 p-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-gray-200 focus:outline-none">
      ✕
    </button>

  </div>
</template>

<script>
import Modal from './components/ModalComponent.vue'
import ValueSection from './components/ValueSection.vue'
import { valuesContent } from './valuesContent.js'

export default {
  components: {
    Modal,
    ValueSection
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
      ? new URL('@/assets/Family.mp3', import.meta.url).href
      : '/Family.mp3';

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

<style scoped>
.ValueSection {
  background-color: #1a1a1a;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.ValueSection:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}

footer {
  margin-top: 4rem;
  padding: 2rem;
  background-color: #1a1a1a;
}

button.fixed {
  z-index: 1000;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #444;
  border: 2px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button.fixed:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}
</style>