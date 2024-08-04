<template>
  <div v-if="show" class="modal-backdrop" @click.self="close">
    <div class="modal-content">
      <button class="close-button" @click="close" aria-label="Close modal">✕</button>

      <!-- Value Header with Background Gradient and Image -->
      <div class="value-header" :style="{ background: selectedValue.gradient }">
        <img :src="selectedValue.image" alt="Value Image" class="value-image" />
        <div class="value-text">
          <h2 class="value-title">{{ selectedValue.name }}</h2>
          <p class="value-quote">“{{ selectedValue.quote }}”</p>
          <p class="value-author">- {{ selectedValue.author }}</p>
        </div>
      </div>

      <!-- Display Stories -->
      <div class="story-section">
        <h3 class="section-title">Stories</h3>
        <div v-for="(story, index) in selectedValue.stories" :key="index" class="story-card">
          <!-- <img v-if="story.image" :src="story.image" alt="Story Image" class="story-image" /> -->
          <div class="story-content">
            <h4>{{ story.title }}</h4>
            <p>{{ story.content }}</p>
          </div>
        </div>
      </div>

      <!-- Display Narratives -->
      <div class="narrative-section">
        <h3 class="section-title">Narratives</h3>
        <div v-for="(narrative, index) in selectedValue.narratives" :key="index" class="narrative-card">
          <!-- <img v-if="narrative.image" :src="narrative.image" alt="Narrative Image" class="narrative-image" /> -->
          <div class="narrative-content">
            <h4>{{ narrative.title }}</h4>
            <p>{{ narrative.content }}</p>
          </div>
        </div>
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
  padding: 0;
  max-width: 800px;
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

/* Value Header */
.value-header {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  color: white;
}

.value-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
}

.value-text {
  flex: 1;
}

.value-title {
  font-size: 2rem;
  margin: 0 0 10px;
}

.value-quote {
  font-size: 1.2rem;
  font-style: italic;
  margin: 0 0 5px;
}

.value-author {
  font-size: 1rem;
}

/* Narrative and Story Sections */
.section-title {
  font-size: 1.8rem;
  margin: 20px 20px 10px;
  color: #2c3e50;
}

.narrative-section,
.story-section {
  padding: 20px;
}

.narrative-card,
.story-card {
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.narrative-card {
  flex-direction: row;
}

.story-card {
  flex-direction: row;
}

/* Commented out Narrative and Story Images */
/*
.narrative-image, 
.story-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}
*/

.narrative-content,
.story-content {
  flex: 1;
}

.narrative-card h4,
.story-card h4 {
  margin-top: 0;
  font-size: 1.4rem;
  color: #34495e;
}

.narrative-card p,
.story-card p {
  font-size: 1rem;
  color: #555;
  margin: 5px 0 0;
}
</style>
