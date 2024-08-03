<template>
  <div v-if="show" class="modal-backdrop" @click.self="close">
    <div class="modal-content">
      <button class="close-button" @click="close" aria-label="Close modal">✕</button>
      <h2 class="modal-title">{{ selectedValue.name }}</h2>
      <p class="modal-quote">“{{ selectedValue.quote }}”</p>

      <!-- Display Narratives -->
      <div
        v-for="(narrative, index) in selectedValue.narratives"
        :key="index"
        class="narrative-box"
      >
        <h3>{{ narrative.title }}</h3>
        <p>{{ narrative.content }}</p>
      </div>

      <!-- Display Stories -->
      <div v-for="(story, index) in selectedValue.stories" :key="index" class="story-box">
        <h3>{{ story.title }}</h3>
        <p>{{ story.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    selectedValue: Object
  },
  methods: {
    close() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.89);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  position: relative;
  background: white;
  color: #333;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  text-align: left;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-height: 80vh;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.close-button:hover {
  color: #000;
}

.modal-title {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.modal-quote {
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 20px;
  color: #7f8c8d;
}

.narrative-box,
.story-box {
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.narrative-box h3,
.story-box h3 {
  margin-top: 0;
  font-size: 1.4rem;
  color: #34495e;
}

.narrative-box p,
.story-box p {
  font-size: 1rem;
  color: #555;
}
</style>
