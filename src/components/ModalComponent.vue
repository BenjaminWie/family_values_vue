<template>
  <div v-if="show"
    class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 md:p-8 lg:p-12">
    <!-- Background click closes modal -->
    <div @click.self="closeModal" class="absolute inset-0"></div>

    <!-- Modal Content -->
    <transition name="modal">
      <div
        class="relative bg-gray-800 text-gray-100 rounded-lg shadow-lg w-full max-w-4xl p-6 md:p-8 lg:p-10 overflow-y-auto max-h-full">

        <!-- Image of the Value -->
        <img :src="selectedValue.image" alt="Value Image" class="w-full rounded-lg shadow-md mb-6">

        <div class="mb-6">
          <!-- Value Name -->
          <h2 class="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            {{ selectedValue.name }}
          </h2>

          <!-- Quote -->
          <p class="text-lg md:text-xl lg:text-2xl italic text-gray-300 mb-4">
            “{{ selectedValue.quote }}”
          </p>

          <!-- Author -->
          <p class="text-md md:text-lg lg:text-xl text-gray-400">
            - {{ selectedValue.author }}
          </p>
        </div>

        <hr class="border-gray-600 mb-6">

        <div class="space-y-8">
          <!-- Story Section -->
          <div v-if="selectedValue.stories.length" class="mb-8 space-y-8">
            <h3 class="text-2xl font-semibold mb-4">Stories</h3>
            <div v-for="(story, index) in selectedValue.stories" :key="index" class="space-y-6">
              <img :src="story.image" alt="Story Image" class="w-full rounded-lg shadow-md mb-4">
              <h4 class="text-xl font-semibold text-gray-200">{{ story.title }}</h4>
              <p class="text-lg text-gray-400">{{ story.content }}</p>
              <a v-if="story.dataLink" :href="story.dataLink" target="_blank" class="text-teal-400 hover:underline">
                Read More
              </a>
            </div>
          </div>

          <hr class="border-gray-600 mb-6">

          <!-- Narrative Section -->
          <div v-if="selectedValue.narratives.length" class="space-y-8">
            <h3 class="text-2xl font-semibold mb-4">Narratives</h3>
            <div v-for="(narrative, index) in selectedValue.narratives" :key="index" class="space-y-6">
              <img :src="narrative.image" alt="Narrative Image" class="w-full rounded-lg shadow-md mb-4">
              <h4 class="text-xl font-semibold text-gray-200">{{ narrative.title }}</h4>
              <p class="text-lg text-gray-400">{{ narrative.content }}</p>
              <a v-if="narrative.dataLink" :href="narrative.dataLink" target="_blank"
                class="text-teal-400 hover:underline">
                Validate the Data
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    selectedValue: Object
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    }
  }
}
</script>

<style scoped>
/* Modal Animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Close Button Styling */
button.fixed {
  z-index: 1000;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #444;
  border: 2px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button.fixed:hover {
  background-color: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

/* General Spacing */
.modal-content {
  padding: 1.5rem;
  background-color: #1a1a1a;
  border-radius: 12px;
  max-width: 90vw;
  margin: auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Typography Adjustments */
h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

p {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

h3 {
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.375rem;
  font-weight: 600;
}

a {
  color: #38b2ac;
  font-weight: 500;
}
</style>
