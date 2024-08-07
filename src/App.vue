<template>
  <!-- Language Switcher in Top Right-->
  <div class="language-switcher">
    <button @click="setLanguage('en')" aria-label="Set language to English">EN</button>
    <button @click="setLanguage('de')" aria-label="Set language to German">DE</button>
  </div>

  <div class="main-content">

    <!-- Main Content Wrapper to Enable Scrolling -->
    <div class="main-content">
      <!-- Welcome Screen -->
      <section class="welcome-section">
        <header>
          <div class="logo-container">
            <!-- SVG Logo -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="#FF4500" stroke-width="4">
              <!-- House Outline -->
              <path d="M10 50 L50 10 L90 50 L90 90 L10 90 Z" fill="none" />
              <!-- Heart inside the house -->
              <path d="M50 55 C40 45, 30 55, 50 75 C70 55, 60 45, 50 55 Z" fill="#FF4500" />
            </svg>
          </div>
          <h1 class="main-header">Familienwerte</h1>
          <p class="subtitle">Dies sind die Werte welche uns in unserem Zusammenleben begleiten.</p>
        </header>
      </section>

      <!-- Audio Player Section -->
      <section class="audio-section">
        <SimpleAudioPlayer />
      </section>

      <!-- Value Sections -->
      <section v-for="value in translatedValues" :key="value.id" class="value-section" @click="openModal(value)">
        <div class="value-content">
          <img :src="value.image" alt="Value Image" class="value-image" />
          <div class="value-card">
            <h1>{{ value.name }}</h1>
            <p>"{{ value.quote }}" - {{ value.author }}</p>
          </div>
        </div>
      </section>

      <!-- Modal for Detailed View -->
      <Modal v-if="showModal" :show="showModal" :selected-value="selectedValue" @close-modal="closeModal"></Modal>
    </div>
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
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.main-content {
  grid-row: 1;
  grid-column: 1 / -1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-bottom: 20px;
}

.welcome-section {
  text-align: center;
  padding: 50px 20px;
  margin-bottom: 30px;
}

.logo-container {
  margin-bottom: 20px;
}

.main-header {
  font-size: 5em;
  margin-bottom: 10px;
  margin-top: 20px;
}

.subtitle {
  font-size: 1.5em;
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
  margin: 0 5px;
  padding: 8px 16px;
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
  padding: 15px;
  max-width: 100%;
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
  width: 100%;
  max-width: 300px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.value-card {
  background: linear-gradient(45deg, #8b0000, #ff6347);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px;
  overflow: hidden;
  transition: transform 1.3s ease, box-shadow 0.8s ease;
}

.value-section:nth-child(even) .value-content {
  flex-direction: column;
}

.value-section:hover .value-card {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

/* Responsive Styling */
@media (max-width: 768px) {
  .value-section {
    padding: 10px;
    margin: 10px auto;
    width: 100%;
  }

  .value-content {
    flex-direction: column;
    align-items: center;
  }

  .value-image,
  .value-card {
    width: 100%;
  }

  .value-card {
    margin-top: 20px;
    padding: 15px;
  }

  footer.footer-section {
    position: static;
    padding: 10px;
  }

  .footer-left,
  .footer-right {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }
}

/* Footer styling */
footer.footer-section {
  grid-row: 2;
  grid-column: 1 / -1;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #1a1a1a;
  color: #fff;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  z-index: 10;
  margin-top: auto;
  clear: both;
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
