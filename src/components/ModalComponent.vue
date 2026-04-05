<template>
  <transition name="fade">
    <div v-if="show" class="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-hidden">
      <!-- Backdrop with heavy blur -->
      <div @click="closeModal" class="absolute inset-0 bg-obsidian-dark/95 backdrop-blur-3xl cursor-pointer"></div>

      <!-- Modal Container -->
      <transition name="slide-up">
        <div class="relative w-full h-full md:max-h-[90vh] max-w-7xl bg-obsidian-light/50 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] rounded-none md:rounded-[3rem] overflow-hidden flex flex-col md:flex-row backdrop-blur-md">
          
          <!-- Close Button -->
          <button @click="closeModal" class="absolute top-8 right-8 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-orange-500 text-white border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Left Column: Hero/Identity (Fixed on desktop) -->
          <div class="w-full md:w-2/5 relative min-h-[40vh] md:min-h-full">
            <img :src="selectedValue.image" alt="" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-obsidian-dark via-obsidian-dark/40 to-transparent"></div>
            
            <div class="absolute bottom-12 left-12 right-12 z-10">
              <h2 class="text-6xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.8]">
                {{ selectedValue.name }}
              </h2>
              <div class="h-1.5 w-24 bg-orange-500 rounded-full mb-8"></div>
              <blockquote class="text-2xl font-serif italic text-gray-200 mb-6 leading-relaxed">
                "{{ selectedValue.quote }}"
              </blockquote>
              <cite class="text-sm font-bold uppercase tracking-[0.3em] text-orange-400 not-italic">— {{ selectedValue.author }}</cite>
            </div>
          </div>

          <!-- Right Column: Narratives & Stories (Scrollable) -->
          <div class="w-full md:w-3/5 overflow-y-auto custom-scrollbar bg-obsidian-dark/40">
            <div class="p-8 md:p-16 space-y-24">
              
              <!-- Narrative Section -->
              <div v-if="selectedValue.narratives?.length" class="space-y-12">
                <header class="flex items-center gap-6">
                  <span class="text-4xl font-black text-white/10 uppercase">01</span>
                  <h3 class="text-3xl font-bold tracking-tight text-white uppercase italic">Der Kontext</h3>
                </header>
                
                <div v-for="(narrative, index) in selectedValue.narratives" :key="index" class="group relative space-y-8 p-8 rounded-3xl bg-white/5 border border-white/5 transition-all hover:border-white/10 hover:bg-white/10">
                  <div class="aspect-video overflow-hidden rounded-2xl border border-white/10">
                    <img :src="narrative.image" alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div class="space-y-4">
                    <h4 class="text-xl font-bold text-orange-400">{{ narrative.title }}</h4>
                    <p class="text-lg text-gray-400 leading-relaxed font-light">{{ narrative.content }}</p>
                    <a v-if="narrative.dataLink" :href="narrative.dataLink" target="_blank" class="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-orange-400 transition-colors">
                      Studie ansehen
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Stories Section -->
              <div v-if="selectedValue.stories?.length" class="space-y-12">
                <header class="flex items-center gap-6">
                  <span class="text-4xl font-black text-white/10 uppercase">02</span>
                  <h3 class="text-3xl font-bold tracking-tight text-white uppercase italic">Inspiration</h3>
                </header>
                
                <div v-for="(story, index) in selectedValue.stories" :key="index" class="space-y-12">
                  <div class="flex flex-col gap-8 group">
                    <div class="aspect-square w-full md:w-48 overflow-hidden rounded-full border-4 border-white/10 group-hover:border-orange-500 transition-colors duration-500 shrink-0 mx-auto md:mx-0">
                      <img :src="story.image" alt="" class="w-full h-full object-cover" />
                    </div>
                    <div class="space-y-6">
                      <h4 class="text-2xl font-black text-white">{{ story.title }}</h4>
                      <p class="text-lg text-gray-400 leading-relaxed font-light italic">
                        {{ story.content }}
                      </p>
                      <a v-if="story.dataLink" :href="story.dataLink" target="_blank" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-white/10 hover:border-orange-500 hover:text-orange-500 transition-all">
                        Biografie
                      </a>
                    </div>
                  </div>
                  <hr v-if="index < selectedValue.stories.length - 1" class="border-white/5" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
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
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.2);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(1.02);
}
</style>
