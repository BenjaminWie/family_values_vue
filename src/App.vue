<template>
  <!-- Language Switcher in Top Right -->
  <div class="language-switcher">
    <button @click="setLanguage('en')" aria-label="Set language to English">EN</button>
    <button @click="setLanguage('de')" aria-label="Set language to German">DE</button>
  </div>

  <!-- Welcome Screen -->
  <section class="welcome-section">
    <header>
      <h1 class="main-header">Familienwerte</h1>
      <p class="subtitle">Dies sind die Werte welche uns in unserem Zusammenleben begleiten.</p>
    </header>
  </section>

  <!-- Value Sections -->
  <section v-for="value in translatedValues" :key="value.id" class="value-section">
    <div class="value-content">
      <img :src="value.image" alt="Value Image" class="value-image" />
      <div class="value-card">
        <h2>{{ value.name }}</h2>
        <p>"{{ value.quote }}" - {{ value.author }}</p>
      </div>
    </div>
  </section>

  <!-- Modal for Detailed View -->
  <Modal v-if="showModal" :show="showModal" :selected-value="selectedValue" @close-modal="closeModal"></Modal>

  <!-- Audio Player -->
  <SimpleAudioPlayer />

  <!-- Footer -->
  <footer class="footer-section">
    <div class="footer-left">
      <p class="footer-header">Who</p>
      <p class="footer-text">Familie Wiedenbrueg</p>
      <p class="footer-header">Why</p>
      <p class="footer-text">To keep in mind the values we gave our self and why we have choosen them.</p>
    </div>
    <div class="footer-right">
      <p class="footer-legal">© 2024 Wiedenbrueg
        <br> All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import ValueCard from './components/ValueCard.vue'
import Modal from './components/ModalComponent.vue'
import SimpleAudioPlayer from './components/SimpleAudioPlayer.vue'
import { valuesContent } from './valuesContent.js'

export default {
  components: {
    ValueCard,
    Modal,
    SimpleAudioPlayer
  },
  data() {
    return {
      language: 'de',
      showModal: false,
      selectedValue: null,
      dynamicBackground: 'linear-gradient(45deg, #8B0000, #FF6347)' // Default background gradient
    }
  },
  computed: {
    translatedValues() {
      return valuesContent[this.language]
    }
  },
  methods: {
    setLanguage(lang) {
      this.language = lang
      localStorage.setItem('selectedLanguage', lang) // Persist language choice
    },
    openModal(value) {
      this.showModal = true
      this.selectedValue = value
    },
    closeModal() {
      this.showModal = false
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
#welcome-section {
  text-align: center;
  padding: 50px 20px;
  position: fixed;
  width: 100%;
  top: 30;
}

.main-header {
  font-size: 7em;
  margin-bottom: 10px;
  margin-top: 40px;
}

.subtitle {
  font-size: 2em;
  color: #555;
  margin-bottom: 0px;
}

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

/* Base Styling */
.value-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.value-content {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}

/* Image Styling */
.value-image {
  width: 40%;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

/* Card Styling */
.value-card {
  background: linear-gradient(45deg, #8B0000, #FF6347);
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 50%;
  max-width: 500px;
  text-align: center;
  margin: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* Alternating Section Layouts */
.value-section:nth-child(odd) .value-content {
  flex-direction: row;
}

.value-section:nth-child(even) .value-content {
  flex-direction: row-reverse;
}

/* Responsive Styling */
@media (max-width: 768px) {
  .value-content {
    flex-direction: column;
    align-items: center;
  }

  .value-image,
  .value-card {
    width: 100%;
    max-width: 100%;
  }

  .value-card {
    margin-top: 20px;
  }
}

/*
.values-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 20px;
}
*/

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

footer.footer-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #1a1a1a;
  color: #fff;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  position: fixed;
}

.footer-left {
  text-align: left end;
}

.footer-right {
  text-align: end;
  color: #ccc;
}

.footer-header {
  font-size: 1em;
  color: #f8f5f5;
  font-style: bold;
  margin-bottom: 5px;
}

.footer-text {
  font-size: 1.2em;
  color: #c0b09c;
  /* Custom text color for the "Who" and "Why" section */
  margin-bottom: 5px;
}

.footer-legal {
  font-size: 1em;
  color: #ccc;
}

@media (max-width: 600px) {
  .values-container {
    grid-template-columns: 1fr;
    /* Stack items vertically on smaller screens */
  }
}
</style>
