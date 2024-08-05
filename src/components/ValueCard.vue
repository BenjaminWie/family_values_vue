<template>
    <div class="value-card" @mouseover="onHover" @mouseleave="onLeave" @click="openModal">
        <div class="card-content">
            <h2>{{ value.name }}</h2>
            <img :src="value.image" alt="Profile Image" class="profile-image" />
            <p class="quote">"{{ value.quote }}" - {{ value.author }}</p>
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
/* Base Card Styling */
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
    z-index: 1;
    max-width: 80vw;
    max-height: 80vh;
}

/* Hover Effect */
.value-card:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    z-index: 5;
    transform: scale(1.1);
    /* Adjusted scale to avoid taking too much space */
}

.value-card:hover .card-content h2,
.value-card:hover .card-content .profile-image,
.value-card:hover .card-content p {
    opacity: 1;
    transform: translateY(0);
}

/* Card Content */
.card-content {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card-content h2 {
    margin: 0;
    font-size: 22px;
    color: black;
    margin-bottom: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.card-content .profile-image {
    width: 150px;
    height: 150px;
    border-radius: 20%;
    margin-top: 20px;
    opacity: 0;
    transition: opacity 0.3s ease, transform 2.3s ease-in-out;
    transform: translateY(-20px);
    position: relative;
    z-index: 2;
}

.card-content p {
    font-style: italic;
    color: grey;
    opacity: 0;
    transition: opacity 0.3s ease, transform 1.3s ease;
    transform: translateY(20px);
    position: relative;
    z-index: 1;
    margin-top: 10px;
}

/* Hover for Siblings */
.value-card:hover~.value-card {
    opacity: 0.8;
    transition: transform 0.6s ease-out 0.2s, opacity 0.3s ease 0.2s;
}

/* Media Query for Small Screens */
@media (max-width: 768px) {
    .value-card {
        font-size: 14px;
        padding: 12px;
        max-width: 100%;
        height: auto;
        transform: scale(1) !important;
        /* Prevent scaling on small screens */
        flex: 1 1 100%;
        /* Ensure cards stack vertically */
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
        transform: scale(1.05);
        /* Minor scaling for small screens */
    }
}
</style>