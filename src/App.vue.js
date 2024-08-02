import ValueCard from './components/ValueCard.vue';
import Modal from './components/ModalComponent.vue';
import { valuesContent } from './valuesContent.js';
export default (await import('vue')).defineComponent({
    components: {
        ValueCard,
        Modal
    },
    data() {
        return {
            language: 'de',
            showModal: false,
            selectedValue: null,
            dynamicBackground: 'default-bg'
        };
    },
    computed: {
        translatedValues() {
            return valuesContent[this.language];
        }
    },
    methods: {
        setBackground(value) {
            switch (value.name) {
                case 'Self-Efficacy':
                    this.dynamicBackground = 'self-efficacy-bg';
                    break;
                case 'Togetherness':
                    this.dynamicBackground = 'togetherness-bg';
                    break;
                case 'Responsibility':
                    this.dynamicBackground = 'responsibility-bg';
                    break;
                case 'Gratitude':
                    this.dynamicBackground = 'gratitude-bg';
                    break;
                default:
                    this.dynamicBackground = 'default-bg';
                    break;
            }
        },
        setLanguage(lang) {
            if (lang = 'de') {
                this.language = lang;
            }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ((['background', __VLS_ctx.dynamicBackground])) }, });
    __VLS_styleScopedClasses = (['background', dynamicBackground]);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-container") }, });
    for (const [value] of __VLS_getVForSourceType((__VLS_ctx.translatedValues))) {
        // @ts-ignore
        const __VLS_0 = {}
            .ValueCard;
        ({}.ValueCard);
        __VLS_components.ValueCard;
        // @ts-ignore
        [ValueCard,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onHover': {} }, ...{ 'onOpenModal': {} }, key: ((value.id)), value: ((value)), }));
        const __VLS_2 = __VLS_1({ ...{ 'onHover': {} }, ...{ 'onOpenModal': {} }, key: ((value.id)), value: ((value)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ ...{ 'onHover': {} }, ...{ 'onOpenModal': {} }, key: ((value.id)), value: ((value)), }));
        let __VLS_6;
        const __VLS_7 = {
            onHover: (...[$event]) => {
                __VLS_ctx.setBackground(value);
                // @ts-ignore
                [dynamicBackground, translatedValues, setBackground,];
            }
        };
        const __VLS_8 = {
            onOpenModal: (...[$event]) => {
                __VLS_ctx.showModal = true,
                    __VLS_ctx.selectedValue = value;
                // @ts-ignore
                [showModal, selectedValue,];
            }
        };
        const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
        let __VLS_3;
        let __VLS_4;
    }
    if (__VLS_ctx.showModal) {
        // @ts-ignore
        const __VLS_9 = {}
            .Modal;
        ({}.Modal);
        __VLS_components.Modal;
        // @ts-ignore
        [Modal,];
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({ ...{ 'onCloseModal': {} }, show: ((__VLS_ctx.showModal)), selectedValue: ((__VLS_ctx.selectedValue)), }));
        const __VLS_11 = __VLS_10({ ...{ 'onCloseModal': {} }, show: ((__VLS_ctx.showModal)), selectedValue: ((__VLS_ctx.selectedValue)), }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        ({}({ ...{ 'onCloseModal': {} }, show: ((__VLS_ctx.showModal)), selectedValue: ((__VLS_ctx.selectedValue)), }));
        let __VLS_15;
        const __VLS_16 = {
            onCloseModal: (...[$event]) => {
                if (!((__VLS_ctx.showModal)))
                    return;
                __VLS_ctx.showModal = false;
                // @ts-ignore
                [showModal, showModal, showModal, selectedValue,];
            }
        };
        const __VLS_14 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_9, __VLS_11));
        let __VLS_12;
        let __VLS_13;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['card-container'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        ValueCard,
        Modal
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
