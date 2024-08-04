<template>
  <div :style="dynamicStyle">
    <!-- Language Switcher in Top Right -->
    <div class="language-switcher">
      <button @click="setLanguage('en')" aria-label="Set language to English">EN</button>
      <button @click="setLanguage('de')" aria-label="Set language to German">DE</button>
    </div>

    <!-- Value Cards Container -->
    <div class="values-container">
      <ValueCard v-for="value in translatedValues" :key="value.id" :value="value" @mouseenter="setBackground(value)"
        @mouseleave="resetBackground" @open-modal="openModal(value)" tabindex="0" @keyup.enter="openModal(value)"
        aria-label="Open detailed view of {{ value.name }}"></ValueCard>
    </div>

    <!-- Modal for Detailed View -->
    <Modal v-if="showModal" :show="showModal" :selected-value="selectedValue" @close-modal="closeModal"></Modal>

    <CustomAudioPlayer />


  </div>
</template>

<script>
import ValueCard from './components/ValueCard.vue'
import Modal from './components/ModalComponent.vue'
import { valuesContent } from './valuesContent.js'
import CustomAudioPlayer from './components/CustomAudioPlayer.vue';

export default {
  components: {
    ValueCard,
    Modal,
    CustomAudioPlayer
  },
  data() {
    return {
      language: 'de',
      showModal: false,
      selectedValue: null,
      dynamicBackground: 'linear-gradient(45deg, #e9c10e, #fc9904ab)' // Default background gradient
    }
  },
  computed: {
    translatedValues() {
      return valuesContent[this.language]
    },
    dynamicStyle() {
      return {
        background: this.dynamicBackground || 'linear-gradient(45deg, #e9c10e, #fc9904ab)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background 0.5s ease'
      }
    }
  },
  methods: {
    setBackground(value) {
      this.dynamicBackground = value.gradient || 'linear-gradient(45deg, #e9c10e, #fc9904ab)'
    },
    resetBackground() {
      this.dynamicBackground = 'linear-gradient(45deg, #e9c10e, #fc9904ab)'
    },
    setLanguage(lang) {
      this.language = lang
      localStorage.setItem('selectedLanguage', lang) // Persist language choice
    },
    openModal(value) {
      this.showModal = true
      this.selectedValue = value
      this.$nextTick(() => {
        const modalElement = this.$refs.modal
        if (modalElement) {
          modalElement.focus() // Set focus to modal for accessibility
        }
      })
    },
    closeModal() {
      this.showModal = false
      this.$nextTick(() => {
        document.activeElement.blur() // Return focus to trigger element
      })
    }
  },
  created() {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage) {
      this.language = savedLanguage
    }
  }
}
</script>

<style scoped>
/* Language Switcher in Top Right */
.language-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
}

.language-switcher button {
  margin: 0 10px;
  padding: 10px 18px;
  background-color: #6a11cb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.language-switcher button:hover {
  background-color: #2575fc;
}

.language-switcher button:focus-visible {
  outline: 2px solid #2575fc;
}

/* Value Cards Container */
.values-container {
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  /* Center items in the container */
  align-items: center;
  /* Vertically center items */
  position: relative;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
}

/* Modal Styling */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
}

.modal-content button.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
