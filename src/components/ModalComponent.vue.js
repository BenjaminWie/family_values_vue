export default (await import('vue')).defineComponent({
    props: {
        show: Boolean,
        selectedValue: Object
    },
    methods: {
        close() {
            this.$emit('close-modal');
        }
    }
});
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
    if (__VLS_ctx.show) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.close) }, ...{ class: ("modal-backdrop") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("modal-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.close) }, ...{ class: ("close-button") }, "aria-label": ("closeModal"), });
        // @ts-ignore
        [show, close, close,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("value-header") }, ...{ style: (({ background: __VLS_ctx.selectedValue.gradient })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.selectedValue.image)), alt: ("Value Image"), ...{ class: ("value-image") }, });
        // @ts-ignore
        [selectedValue, selectedValue,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("value-text") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("value-title") }, });
        (__VLS_ctx.selectedValue.name);
        // @ts-ignore
        [selectedValue,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("value-quote") }, });
        (__VLS_ctx.selectedValue.quote);
        // @ts-ignore
        [selectedValue,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("value-author") }, });
        (__VLS_ctx.selectedValue.author);
        // @ts-ignore
        [selectedValue,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("story-section") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("section-title") }, });
        for (const [story, index] of __VLS_getVForSourceType((__VLS_ctx.selectedValue.stories))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("story-card") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("story-content") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
            (story.title);
            // @ts-ignore
            [selectedValue,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (story.content);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("narrative-section") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("section-title") }, });
        for (const [narrative, index] of __VLS_getVForSourceType((__VLS_ctx.selectedValue.narratives))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), ...{ class: ("narrative-card") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("narrative-content") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
            (narrative.title);
            // @ts-ignore
            [selectedValue,];
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (narrative.content);
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['modal-backdrop'];
        __VLS_styleScopedClasses['modal-content'];
        __VLS_styleScopedClasses['close-button'];
        __VLS_styleScopedClasses['value-header'];
        __VLS_styleScopedClasses['value-image'];
        __VLS_styleScopedClasses['value-text'];
        __VLS_styleScopedClasses['value-title'];
        __VLS_styleScopedClasses['value-quote'];
        __VLS_styleScopedClasses['value-author'];
        __VLS_styleScopedClasses['story-section'];
        __VLS_styleScopedClasses['section-title'];
        __VLS_styleScopedClasses['story-card'];
        __VLS_styleScopedClasses['story-content'];
        __VLS_styleScopedClasses['narrative-section'];
        __VLS_styleScopedClasses['section-title'];
        __VLS_styleScopedClasses['narrative-card'];
        __VLS_styleScopedClasses['narrative-content'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
