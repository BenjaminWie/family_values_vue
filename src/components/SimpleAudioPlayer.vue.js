import { defineComponent } from 'vue';
const familyAudio = new URL('@/assets/Family.mp3', import.meta.url).href;
export default defineComponent({
    data() {
        return {
            audioSrc: familyAudio,
        };
    },
    mounted() {
        const audioElement = this.$refs.audioPlayer;
        audioElement.play().catch(error => {
            console.log("User interaction required to play audio.", error);
        });
    }
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.audio, __VLS_intrinsicElements.audio)({ ref: ("audioPlayer"), src: ((__VLS_ctx.audioSrc)), autoplay: (true), controls: (true), });
    // @ts-ignore
    (__VLS_ctx.audioPlayer);
    // @ts-ignore
    [audioSrc, audioPlayer,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
