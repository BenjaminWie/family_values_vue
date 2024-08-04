export default (await import('vue')).defineComponent({
    props: {
        value: Object
    },
    data() {
        return {
            isHovered: false,
            expandedOnce: false,
            expandedItem: null,
            floatingItems: [],
            floatingStyles: []
        };
    },
    mounted() {
        this.initializeFloatingItems();
        window.addEventListener('resize', this.initializeFloatingItems);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.initializeFloatingItems);
    },
    methods: {
        hoverValue() {
            this.isHovered = true;
        },
        resetValue() {
            this.isHovered = false;
        },
        toggleExpand() {
            if (!this.expandedOnce) {
                this.expandedOnce = true;
                this.setFloatingStyles();
            }
        },
        initializeFloatingItems() {
            this.floatingItems = [
                ...this.value.narratives.map((narrative) => ({ ...narrative, type: 'narrative' })),
                ...this.value.stories.map((story) => ({ ...story, type: 'story' }))
            ];
        },
        setFloatingStyles() {
            const count = this.floatingItems.length;
            const angleStep = (2 * Math.PI) / count;
            const distanceFromCenter = Math.min(window.innerWidth, window.innerHeight) * 0.3;
            this.floatingStyles = this.floatingItems.map((_, index) => {
                const angle = index * angleStep;
                const x = Math.cos(angle) * distanceFromCenter;
                const y = Math.sin(angle) * distanceFromCenter;
                return {
                    transform: `translate(${x}px, ${y}px)`,
                    animation: `float${index % 2} 4s infinite ease-in-out`,
                    position: 'absolute'
                };
            });
        },
        expandFloatingItem(item) {
            this.expandedItem = this.expandedItem === item ? null : item;
            document.body.classList.toggle('blur-background', !!this.expandedItem);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("value-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onMouseover: (__VLS_ctx.hoverValue) }, ...{ onMouseleave: (__VLS_ctx.resetValue) }, ...{ onClick: (__VLS_ctx.toggleExpand) }, ...{ class: ("value") }, ...{ class: (({ 'expanded-once': __VLS_ctx.expandedOnce })) }, });
    __VLS_styleScopedClasses = ({ 'expanded-once': expandedOnce });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    (__VLS_ctx.value.name);
    // @ts-ignore
    [hoverValue, resetValue, toggleExpand, expandedOnce, value,];
    if (__VLS_ctx.expandedOnce || __VLS_ctx.isHovered) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("quote") }, });
        (__VLS_ctx.value.quote);
        (__VLS_ctx.value.author);
        // @ts-ignore
        [expandedOnce, value, value, isHovered,];
    }
    if (__VLS_ctx.expandedOnce) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.floatingItems))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.expandedOnce)))
                            return;
                        __VLS_ctx.expandFloatingItem(item);
                        // @ts-ignore
                        [expandedOnce, floatingItems, expandFloatingItem,];
                    } }, key: ((item.title)), ...{ style: ((__VLS_ctx.floatingStyles[index])) }, ...{ class: ("floating-item") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ((item.type === 'narrative' ? 'narrative-title' : 'story-title')) }, });
            __VLS_styleScopedClasses = (item.type === 'narrative' ? 'narrative-title' : 'story-title');
            (item.title);
            // @ts-ignore
            [floatingStyles,];
            if (__VLS_ctx.expandedItem === item) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("floating-content") }, });
                (item.content);
                // @ts-ignore
                [expandedItem,];
            }
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['value-container'];
        __VLS_styleScopedClasses['value'];
        __VLS_styleScopedClasses['quote'];
        __VLS_styleScopedClasses['floating-item'];
        __VLS_styleScopedClasses['floating-content'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
