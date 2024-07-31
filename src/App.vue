<template>
  <div :class="['background', dynamicBackground]">
    <!-- Add the lines container -->
    <div class="lines-container">
      <div class="line" v-for="i in 3" :key="i"></div>
    </div>

    <div class="card-container">
      <ValueCard
        v-for="value in values"
        :key="value.id"
        :value="value"
        @hover="setBackground(value)"
        @open-modal="
          showModal = true
          selectedValue = value
        "
      />
    </div>

    <!-- Modal to display detailed content -->
    <Modal
      v-if="showModal"
      :show="showModal"
      :selected-value="selectedValue"
      @close-modal="showModal = false"
    />
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
      values: valuesContent,
      showModal: false,
      selectedValue: null,
      dynamicBackground: 'default-bg'
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
    }
  }
}
</script>

<style>
.default-bg {
  background: linear-gradient(to bottom right, #6a11cb, #2575fc);
  transition: background 0.5s ease;
}

.self-efficacy-bg {
  background: linear-gradient(to bottom right, #34eb83, #349ceb);
  transition: background 0.5s ease;
}

.togetherness-bg {
  background: linear-gradient(to bottom right, #ff7e5f, #feb47b);
  transition: background 0.5s ease;
}

.background {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #6a11cb, #2575fc);
}

.responsibility-bg {
  background: linear-gradient(to bottom right, #2b5876, #4e4376);
  transition: background 0.5s ease;
}

.gratitude-bg {
  background: linear-gradient(to bottom right, #f857a6, #ff5858);
  transition: background 0.5s ease;
}

.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

@media (min-width: 768px) {
  .card-container {
    flex-direction: row;
  }
}

/* Lines between values */
.lines-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  z-index: 0;
  pointer-events: none;
}

.line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  transform-origin: left center;
  animation: pulse 2s infinite;
}

.line:nth-child(1) {
  transform: rotate(45deg);
}

.line:nth-child(2) {
  transform: rotate(90deg);
}

.line:nth-child(3) {
  transform: rotate(-45deg);
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
