<template>
  <div :class="['background', dynamicBackground]">
    <!-- Language Switcher in Top Right -->
    <div class="language-switcher">
      <button @click="setLanguage('en')" aria-label="Set language to English">EN</button>
      <button @click="setLanguage('de')" aria-label="Set language to German">DE</button>
    </div>

    <!-- Value Cards Container -->
    <div class="values-container">
      <ValueCard
        v-for="value in translatedValues"
        :key="value.id"
        :value="value"
        @mouseenter="setBackground(value)"
        @mouseleave="resetBackground"
        @open-modal="openModal(value)"
        tabindex="0"
        @keyup.enter="openModal(value)"
        aria-label="Open detailed view of {{ value.name }}"
      />
    </div>

    <!-- Modal for Detailed View -->
    <Modal v-if="showModal" :show="showModal" :selected-value="selectedValue" @close-modal="showModal = false" />
  </div>
</template>

<script>
import ValueCard from './components/ValueCard.vue';
import Modal from './components/ModalComponent.vue';
import { valuesContent } from './valuesContent.js';

export default {
  components: {
    ValueCard,
    Modal
  },
  data() {
    return {
      language: 'de',
      showModal: false,
      selectedValue: null,
      dynamicBackground: 'default-bg'
    };
  },
  computed: {
    translatedValues() {
      return valuesContent[this.language];
    }
  },
  methods: {
    setBackground(value) {
      switch (value.name) {
        case 'Self-Efficacy':
          this.dynamicBackground = 'self-efficacy-bg';
          break;
        case 'Togetherness':
          this.dynamicBackground = 'togetherness-bg';
          break;
        case 'Responsibility':
          this.dynamicBackground = 'responsibility-bg';
          break;
        case 'Gratitude':
          this.dynamicBackground = 'gratitude-bg';
          break;
        default:
          this.dynamicBackground = 'default-bg';
          break;
      }
    },
    resetBackground() {
      this.dynamicBackground = 'default-bg';
    },
    setLanguage(lang) {
      this.language = lang;
    },
    openModal(value) {
      this.showModal = true;
      this.selectedValue = value;
    }
  }
};
</script>

<style>
/* General Layout */
.background {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
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
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.language-switcher button:hover {
  background-color: #2575fc;
}

/* Backgrounds with Animated Gradients */
.default-bg {
  background: linear-gradient(45deg, #e9c10e, #fc9904ab);
  background-size: 400% 400%;
  animation: gradientMove 6s ease infinite;
}

.self-efficacy-bg {
  background: linear-gradient(45deg, #34eb83, #349ceb);
  background-size: 400% 400%;
  animation: gradientMove 4s ease infinite;
}

.togetherness-bg {
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  background-size: 400% 400%;
  animation: gradientMove 4s ease infinite;
}

.responsibility-bg {
  background: linear-gradient(45deg, #2b5876, #4e4376);
  background-size: 400% 400%;
  animation: gradientMove 4s ease infinite;
}

.gratitude-bg {
  background: linear-gradient(45deg, #f857a6, #ff5858);
  background-size: 400% 400%;
  animation: gradientMove 4s ease infinite;
}

@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Value Cards Container */
.values-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

/* Responsive Design for Value Cards */
.value-card {
  flex: 1 1 calc(50% - 20px); /* 50% width minus gap on larger screens */
  max-width: 45%;
  min-width: 200px;
  margin: 10px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
}

.value-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .value-card {
    flex: 1 1 100%; /* Full width on smaller screens */
    max-width: 100%;
  }
}

/* Modal Transitions */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter, .modal-leave-to {
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
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
