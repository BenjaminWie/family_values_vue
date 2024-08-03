<template>
  <div class="value-card" @mouseover="onHover" @mouseleave="onLeave" @click="openModal">
    <div class="card-content">
      <img v-if="isHovered" :src="value.image" alt="Profile Image" class="profile-image" />
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
      this.$emit('hover', this.value)
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
/* Hover effect applied only to the hovered card */
.value-card:hover {
  transform: scale(1.5);
  z-index: 50;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

/* Focus-visible state for accessibility */
.value-card:focus-visible {
  outline: 2px solid #6a11cb;
}

.value-card {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
  text-align: center;
  padding: 20px;
  margin: 20px;
  cursor: pointer;
  transition: transform 1.6s ease-in-out, box-shadow 1.3s ease-in-out, opacity 0.3s ease;
  transform-style: preserve-3d;
  width: 100%;
  position: relative;
}

.value-card:not(:hover) {
  transition:
    transform 2s ease-out 0.4s, /* Add delay before reverting the scale */
    box-shadow 0.6s ease 0.2s;
}

.card-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 20%;
  margin-bottom: 20px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(-20px); /* Hidden above the view initially */
  position: relative;
  z-index: 2;
}

.value-card:hover .profile-image {
  opacity: 1;
  color: black; 
  z-index: 10;
  transform: translateY(0); /* Slide down into view on hover */
}

.card-content h2 {
  margin: 0;
  font-size: 22px; /* Slightly increased font size for better readability */
  color: black;
  transition: margin-bottom 0.3s ease;
  margin-bottom: 0; /* Initially no margin */
}

.value-card:hover .card-content h2 {
  margin-bottom: 20px; /* Add margin to make space for the quote */
}

.card-content p {
  font-style: italic;
  color: grey;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(20px); /* Hidden below the view initially */
  position: relative;
  z-index: 1;
}

.value-card:hover .card-content p {
  opacity: 1;
  color: grey; 
  z-index: 10;
  transform: translateY(0); /* Slide up into view on hover */
}

/* Media Query for Small Screens */
@media (max-width: 768px) {
  .value-card {
    font-size: 14px;
    padding: 12px;
    max-width: 100%;
    height: auto;
    transform: scale(1) !important; /* Prevent scaling on small screens */
    flex: 1 1 100%; /* Ensure cards stack vertically */
    margin-bottom: 20px;
  }

  .profile-image {
    width: 80px;
    height: 80px;
  }

  .card-content h2 {
    font-size: 18px;
  }

  .value-card:hover {
    transform: scale(1.05); /* Minor scaling for small screens */
  }
}

</style>
