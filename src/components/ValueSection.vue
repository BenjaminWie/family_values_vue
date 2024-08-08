<template>
    <div
        class="relative flex flex-col justify-center items-center bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden h-72 md:h-80 glow-card">
        <img :src="value.image" alt="Value Image" class="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
        <div class="relative z-10 text-center p-4 md:p-6">
            <h2 class="text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-orange-500">{{ value.name }}</h2>
            <blockquote class="text-xl md:text-2xl font-light italic mb-4 md:mb-6">“{{ value.quote }}”</blockquote>
            <p class="text-lg md:text-xl">- {{ value.author }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ValueSection',
    props: {
        value: {
            type: Object,
            required: true,
            validator: (value) => ['name', 'quote', 'author', 'image'].every(key => key in value)
        }
    }
}
</script>

<style scoped>
.glow-card {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.1);
    transition: box-shadow 0.3s ease;
}

.glow-card:hover {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3);
}
</style>