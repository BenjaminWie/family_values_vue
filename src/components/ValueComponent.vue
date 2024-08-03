<template>
  <div class="value-container">
    <!-- Main Value Display -->
    <div
      class="value"
      @mouseover="hoverValue"
      @mouseleave="resetValue"
      @click="toggleExpand"
      :class="{ 'expanded-once': expandedOnce }"
    >
      <h1>{{ value.name }}</h1>
      <p v-if="expandedOnce || isHovered" class="quote">"{{ value.quote }}" - {{ value.author }}</p>
    </div>

    <!-- Floating Expanded Narratives and Stories -->
    <div v-if="expandedOnce">
      <div
        v-for="(item, index) in floatingItems"
        :key="item.title"
        :style="floatingStyles[index]"
        class="floating-item"
        @click="expandFloatingItem(item)"
      >
        <h3 :class="item.type === 'narrative' ? 'narrative-title' : 'story-title'">
          {{ item.title }}
        </h3>
        <p v-if="expandedItem === item" class="floating-content">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: Object
  },
  data() {
    return {
      isHovered: false,
      expandedOnce: false,
      expandedItem: null,
      floatingItems: [],
      floatingStyles: []
    }
  },
  mounted() {
    this.initializeFloatingItems()
    window.addEventListener('resize', this.initializeFloatingItems)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.initializeFloatingItems)
  },
  methods: {
    hoverValue() {
      this.isHovered = true
    },
    resetValue() {
      this.isHovered = false
    },
    toggleExpand() {
      if (!this.expandedOnce) {
        this.expandedOnce = true
        this.setFloatingStyles()
      }
    },
    initializeFloatingItems() {
      this.floatingItems = [
        ...this.value.narratives.map((narrative) => ({ ...narrative, type: 'narrative' })),
        ...this.value.stories.map((story) => ({ ...story, type: 'story' }))
      ]
    },
    setFloatingStyles() {
      const count = this.floatingItems.length
      const angleStep = (2 * Math.PI) / count
      const distanceFromCenter = Math.min(window.innerWidth, window.innerHeight) * 0.3

      this.floatingStyles = this.floatingItems.map((_, index) => {
        const angle = index * angleStep
        const x = Math.cos(angle) * distanceFromCenter
        const y = Math.sin(angle) * distanceFromCenter
        return {
          transform: `translate(${x}px, ${y}px)`,
          animation: `float${index % 2} 4s infinite ease-in-out`,
          position: 'absolute'
        }
      })
    },
    expandFloatingItem(item) {
      this.expandedItem = this.expandedItem === item ? null : item
      document.body.classList.toggle('blur-background', !!this.expandedItem)
    }
  }
}
</script>

<style scoped>
.value-container {
  position: relative;
  display: inline-block;
  margin: 20px;
  text-align: center;
}

.value {
  cursor: pointer;
  padding: 20px;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}

.value.expanded-once {
  transform: scale(1.1);
}

.quote {
  margin-top: 10px;
  font-size: 16px;
  color: #534949;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-style: italic;
}

.value.expanded-once .quote,
.value:hover .quote {
  opacity: 1;
}

.floating-item {
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  max-width: 200px;
  text-align: center;
  z-index: 1;
}

.floating-item h3 {
  margin: 0;
  font-size: 16px;
}

.narrative-title {
  color: #ff6347;
  /* Tomato */
}

.story-title {
  color: #4682b4;
  /* SteelBlue */
}

.floating-item.expanded {
  transform: translate(0px, 0px) !important;
  max-width: 80%;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  z-index: 1000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) !important;
}

.floating-content {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
  display: none;
  transition: all 0.3s ease;
}

.floating-item.expanded .floating-content {
  display: block;
}

.blur-background {
  filter: blur(5px);
  transition: filter 0.3s ease;
}

body.blur-background::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
  transition: background 0.3s ease;
}

@keyframes float0 {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }

  50% {
    transform: translateX(10px) translateY(-5px);
  }
}

@keyframes float1 {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }

  50% {
    transform: translateX(-10px) translateY(5px);
  }
}

@media (max-width: 768px) {
  .floating-item {
    max-width: 150px;
  }
}

@media (max-width: 480px) {
  .floating-item {
    max-width: 120px;
    padding: 8px;
  }

  .floating-item.expanded {
    max-width: 90%;
    padding: 15px;
  }
}
</style>
