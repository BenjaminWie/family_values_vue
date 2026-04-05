<template>
  <div
    class="relative group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-700 hover:border-white/20 hover:bg-white/10 shadow-2xl h-full flex flex-col"
  >
    <!-- Background Image with dynamic zoom -->
    <div class="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-110">
      <img :src="value.image" alt="" class="w-full h-full object-cover opacity-20" />
      <div class="absolute inset-0 bg-gradient-to-br from-obsidian-dark via-transparent to-black/60"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 p-8 md:p-12 flex flex-col h-full">
      <div class="mb-auto">
        <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <div class="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          <span class="text-xs font-bold tracking-[0.2em] uppercase text-white/60">Core Value</span>
        </div>
        
        <h2 class="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-none group-hover:text-orange-400 transition-colors duration-500">
          {{ value.name }}
        </h2>
        
        <div class="relative">
          <span class="absolute -top-6 -left-4 text-6xl font-serif text-white/5 select-none font-black italic">“</span>
          <p class="text-xl md:text-2xl font-serif italic text-gray-300 leading-relaxed relative z-10">
            {{ value.quote }}
          </p>
        </div>
      </div>

      <div class="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
        <span class="text-sm font-medium text-gray-500 uppercase tracking-widest">— {{ value.author }}</span>
        <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-orange-500 group-hover:border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-white transform translate-x-px group-hover:translate-x-1 transition-transform">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </div>

    <!-- Inner Glow effect -->
    <div class="absolute inset-0 pointer-events-none rounded-[2rem] border border-white/5 group-hover:border-white/20 transition-colors duration-700"></div>
  </div>
</template>

<script>
export default {
  name: 'ValueSection',
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
/* Any extra component-specific tweaks */
</style>
