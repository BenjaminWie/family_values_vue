<template>
  <!-- Language Switcher in Top Right -->
  <div class="language-switcher">
    <button @click="setLanguage('en')" aria-label="Set language to English">EN</button>
    <button @click="setLanguage('de')" aria-label="Set language to German">DE</button>
  </div>

  <!-- Main Content Wrapper to Enable Scrolling -->
  <div class="main-content">
    <!-- Welcome Screen -->
    <section class="welcome-section">
      <header>
        <h1 class="main-header">Familienwerte</h1>
        <p class="subtitle">Dies sind die Werte welche uns in unserem Zusammenleben begleiten.</p>
      </header>
    </section>

    <!-- Audio Player Section -->
    <section class="audio-section">
      <SimpleAudioPlayer />
    </section>

    <!-- Value Sections -->
    <section
      v-for="value in translatedValues"
      :key="value.id"
      class="value-section"
      @click="openModal(value)"
    >
      <div class="value-content">
        <img :src="value.image" alt="Value Image" class="value-image" />
        <div class="value-card">
          <h2>{{ value.name }}</h2>
          <p>"{{ value.quote }}" - {{ value.author }}</p>
        </div>
      </div>
    </section>

    <!-- Modal for Detailed View -->
    <Modal
      v-if="showModal"
      :show="showModal"
      :selected-value="selectedValue"
      @close-modal="closeModal"
    ></Modal>
  </div>

  <!-- Footer -->
  <footer class="footer-section">
    <div class="footer-left">
      <p class="footer-header">Who</p>
      <p class="footer-text">Familie Wiedenbrueg</p>
      <p class="footer-header">Why</p>
      <p class="footer-text">
        To keep in mind the values we gave our self and why we have chosen them.
      </p>
    </div>
    <div class="footer-right">
      <p class="footer-legal">
        © 2024 Wiedenbrueg <br />
        All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script>
import Modal from './components/ModalComponent.vue'
import SimpleAudioPlayer from './components/SimpleAudioPlayer.vue'
import { valuesContent } from './valuesContent.js'

export default {
  components: {
    Modal,
    SimpleAudioPlayer
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
      this.selectedValue = null
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
/* General Styles */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.main-content {
  min-height: 100vh;
  overflow-y: auto;
  padding-bottom: 60px;
  /* Space for sticky footer */
}

.welcome-section {
  text-align: center;
  padding: 50px 20px;
  margin-bottom: 30px;
}

.main-header {
  font-size: 7em;
  margin-bottom: 10px;
  margin-top: 40px;
}

.subtitle {
  font-size: 2em;
  color: #555;
  margin-bottom: 0;
}

/* Audio Section */
.audio-section {
  text-align: center;
  margin: 20px auto;
  padding: 10px 0;
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

/* Value Section Styling */
.value-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 20px auto;
  flex-wrap: wrap;
  cursor: pointer;
}

.value-content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
}

.value-image {
  width: 40%;
  max-width: 400px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.value-card {
  background: linear-gradient(45deg, #8b0000, #ff6347);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 50%;
  max-width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.value-section:nth-child(even) .value-content {
  flex-direction: row-reverse;
}

.value-section:hover .value-card {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
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

/* Sticky Footer Styling */
.footer-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #1a1a1a;
  color: #fff;
  align-items: center;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.footer-left {
  text-align: left;
}

.footer-right {
  text-align: right;
  color: #ccc;
}

.footer-header {
  font-size: 1em;
  color: #f8f5f5;
  font-weight: bold;
  margin-bottom: 5px;
}

.footer-text {
  font-size: 1.2em;
  color: #c0b09c;
  margin-bottom: 5px;
}

.footer-legal {
  font-size: 1em;
  color: #ccc;
}
</style>
