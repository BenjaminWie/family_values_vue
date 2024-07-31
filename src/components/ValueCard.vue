<template>
  <div class="value-card" @mouseover="onHover" @mouseleave="onLeave" @click="openModal">
    <div class="card-content">
      <h2>{{ value.name }}</h2>
      <p v-if="isHovered" class="quote">"{{ value.quote }}" - {{ value.author }}</p>
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
      isHovered: false
    }
  },
  methods: {
    onHover() {
      this.isHovered = true
      this.$emit('hover', this.value) // Trigger background change
    },
    onLeave() {
      this.isHovered = false
    },
    openModal() {
      this.$emit('open-modal', this.value)
    }
  }
}
</script>

<style scoped>
.value-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  text-align: center;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  transform-style: preserve-3d;
}

.value-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-content h2 {
  margin: 0;
  font-size: 24px;
}

.quote {
  margin-top: 10px;
  font-style: italic;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}
</style>
