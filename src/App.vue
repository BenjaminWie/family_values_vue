<template>
  <div :class="['background', dynamicBackground]">
    <!--div class="language-switcher">
      <button @click="setLanguage('en')">language</button>
    </div-->

    <div class="card-container">
      <ValueCard v-for="value in translatedValues" :key="value.id" :value="value" @hover="setBackground(value)"
        @open-modal="
          showModal = true,
          selectedValue = value
          " />
    </div>

    <!-- Modal to display detailed content -->
    <Modal v-if="showModal" :show="showModal" :selected-value="selectedValue" @close-modal="showModal = false" />
  </div>
</template>

<script>
import ValueCard from './components/ValueCard.vue'
import Modal from './components/ModalComponent.vue'
import { valuesContent } from './valuesContent.js'

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
          this.dynamicBackground = 'self-efficacy-bg'
          break
        case 'Togetherness':
          this.dynamicBackground = 'togetherness-bg'
          break
        case 'Responsibility':
          this.dynamicBackground = 'responsibility-bg'
          break
        case 'Gratitude':
          this.dynamicBackground = 'gratitude-bg'
          break
        default:
          this.dynamicBackground = 'default-bg'
          break
      }
    },

    setLanguage(lang) {
      if (lang = 'de') {
        this.language = lang;
      }
    }
  }
}
</script>

<style>
.language-switcher {
  margin-bottom: 20px;
}

.language-switcher button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #6a11cb;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.language-switcher button:hover {
  background-color: #2575fc;
}

.default-bg {
  background: linear-gradient(to bottom right, #e9c10e, #fc9904ab);
  transition: background 6s ease;
}

.self-efficacy-bg {
  background: linear-gradient(to bottom right, #34eb83, #349ceb);
  transition: background 4s ease;
}

.togetherness-bg {
  background: linear-gradient(to bottom right, #ff7e5f, #feb47b);
  transition: background 4s ease;
}

.responsibility-bg {
  background: linear-gradient(to bottom right, #2b5876, #4e4376);
  transition: background 4s ease;
}

.gratitude-bg {
  background: linear-gradient(to bottom right, #f857a6, #ff5858);
  transition: background 4s ease;
}


.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 40px;
  flex-direction: wrap;
  margin-top: 50px;
  width: 100%;
}

@media (min-width: 768px) {
  .card-container {
    flex-direction: row;
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 0.5;
  }

  50% {
    opacity: 1;
  }
}
</style>
