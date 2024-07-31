<template>
  <div v-if="show" class="modal-backdrop" @click.self="close">
    <div class="modal-content">
      <h2>{{ selectedValue.name }}</h2>
      <p>{{ selectedValue.quote }}</p>

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
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  color: black;
  /* Ensure the text is readable */
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.narrative-box,
.story-box {
  margin-top: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  /* Light grey background for boxes */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.narrative-box h3,
.story-box h3 {
  margin-top: 0;
}
</style>
