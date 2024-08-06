export default (await import('vue')).defineComponent({
    props: {
        value: Object
    },
    data() {
        return {
            isHovered: false
        };
    },
    methods: {
        onHover() {
            this.isHovered = true;
            this.$emit('hover', this.value);
        },
        onLeave() {
            this.isHovered = false;
        },
        openModal() {
            this.$emit('open-modal', this.value);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onMouseover: (__VLS_ctx.onHover) }, ...{ onMouseleave: (__VLS_ctx.onLeave) }, ...{ onClick: (__VLS_ctx.openModal) }, ...{ class: ("value-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    (__VLS_ctx.value.name);
    // @ts-ignore
    [onHover, onLeave, openModal, value,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.value.image)), alt: ("Profile Image"), ...{ class: ("profile-image") }, });
    // @ts-ignore
    [value,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("quote") }, });
    (__VLS_ctx.value.quote);
    (__VLS_ctx.value.author);
    // @ts-ignore
    [value, value,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['value-card'];
        __VLS_styleScopedClasses['card-content'];
        __VLS_styleScopedClasses['profile-image'];
        __VLS_styleScopedClasses['quote'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
