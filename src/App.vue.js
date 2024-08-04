import ValueCard from './components/ValueCard.vue'
import Modal from './components/ModalComponent.vue'
import { valuesContent } from './valuesContent.js'
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
      dynamicBackground: 'linear-gradient(45deg, #e9c10e, #fc9904ab)' // Default background gradient
    }
  },
  computed: {
    translatedValues() {
      return valuesContent[this.language]
    },
    dynamicStyle() {
      return {
        background: this.dynamicBackground || 'linear-gradient(45deg, #e9c10e, #fc9904ab)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background 0.5s ease'
      }
    }
  },
  methods: {
    setBackground(value) {
      this.dynamicBackground = value.gradient || 'linear-gradient(45deg, #e9c10e, #fc9904ab)'
    },
    resetBackground() {
      this.dynamicBackground = 'linear-gradient(45deg, #e9c10e, #fc9904ab)'
    },
    setLanguage(lang) {
      this.language = lang
      localStorage.setItem('selectedLanguage', lang) // Persist language choice
    },
    openModal(value) {
      this.showModal = true
      this.selectedValue = value
      this.$nextTick(() => {
        const modalElement = this.$refs.modal
        if (modalElement) {
          modalElement.focus() // Set focus to modal for accessibility
        }
      })
    },
    closeModal() {
      this.showModal = false
      this.$nextTick(() => {
        document.activeElement.blur() // Return focus to trigger element
      })
    }
  },
  created() {
    const savedLanguage = localStorage.getItem('selectedLanguage')
    if (savedLanguage) {
      this.language = savedLanguage
    }
  }
})

function __VLS_template() {
  let __VLS_ctx
  /* Components */
  let __VLS_otherComponents
  let __VLS_own
  let __VLS_localComponents
  let __VLS_components
  let __VLS_styleScopedClasses
  // CSS variable injection
  // CSS variable injection end
  let __VLS_resolvedLocalAndGlobalComponents
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ style: __VLS_ctx.dynamicStyle } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'language-switcher' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.button,
    __VLS_intrinsicElements.button
  )({
    ...{
      onClick: (...[$event]) => {
        __VLS_ctx.setLanguage('en')
        // @ts-ignore
        ;[dynamicStyle, setLanguage]
      }
    },
    'aria-label': 'Set language to English'
  })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.button,
    __VLS_intrinsicElements.button
  )({
    ...{
      onClick: (...[$event]) => {
        __VLS_ctx.setLanguage('de')
        // @ts-ignore
        ;[setLanguage]
      }
    },
    'aria-label': 'Set language to German'
  })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'values-container' } })
  for (const [value] of __VLS_getVForSourceType(__VLS_ctx.translatedValues)) {
    // @ts-ignore
    const __VLS_0 = {}.ValueCard
    ;({}).ValueCard
    ;({}).ValueCard
    __VLS_components.ValueCard
    __VLS_components.ValueCard
    // @ts-ignore
    ;[ValueCard, ValueCard]
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(
      __VLS_0,
      new __VLS_0({
        ...{ onMouseenter: {} },
        ...{ onMouseleave: {} },
        ...{ onOpenModal: {} },
        ...{ onKeyup: {} },
        key: value.id,
        value: value,
        tabindex: '0',
        'aria-label': 'Open detailed view of {{ value.name }}'
      })
    )
    const __VLS_2 = __VLS_1(
      {
        ...{ onMouseenter: {} },
        ...{ onMouseleave: {} },
        ...{ onOpenModal: {} },
        ...{ onKeyup: {} },
        key: value.id,
        value: value,
        tabindex: '0',
        'aria-label': 'Open detailed view of {{ value.name }}'
      },
      ...__VLS_functionalComponentArgsRest(__VLS_1)
    )
    ;({})({
      ...{ onMouseenter: {} },
      ...{ onMouseleave: {} },
      ...{ onOpenModal: {} },
      ...{ onKeyup: {} },
      key: value.id,
      value: value,
      tabindex: '0',
      'aria-label': 'Open detailed view of {{ value.name }}'
    })
    let __VLS_6
    const __VLS_7 = {
      onMouseenter: (...[$event]) => {
        __VLS_ctx.setBackground(value)
        // @ts-ignore
        ;[translatedValues, setBackground]
      }
    }
    const __VLS_8 = {
      onMouseleave: __VLS_ctx.resetBackground
    }
    const __VLS_9 = {
      onOpenModal: (...[$event]) => {
        __VLS_ctx.openModal(value)
        // @ts-ignore
        ;[resetBackground, openModal]
      }
    }
    const __VLS_10 = {
      onKeyup: (...[$event]) => {
        __VLS_ctx.openModal(value)
        // @ts-ignore
        ;[openModal]
      }
    }
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2))
    let __VLS_3
    let __VLS_4
  }
  if (__VLS_ctx.showModal) {
    // @ts-ignore
    const __VLS_11 = {}.Modal
    ;({}).Modal
    ;({}).Modal
    __VLS_components.Modal
    __VLS_components.Modal
    // @ts-ignore
    ;[Modal, Modal]
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(
      __VLS_11,
      new __VLS_11({
        ...{ onCloseModal: {} },
        show: __VLS_ctx.showModal,
        selectedValue: __VLS_ctx.selectedValue
      })
    )
    const __VLS_13 = __VLS_12(
      {
        ...{ onCloseModal: {} },
        show: __VLS_ctx.showModal,
        selectedValue: __VLS_ctx.selectedValue
      },
      ...__VLS_functionalComponentArgsRest(__VLS_12)
    )
    ;({})({
      ...{ onCloseModal: {} },
      show: __VLS_ctx.showModal,
      selectedValue: __VLS_ctx.selectedValue
    })
    let __VLS_17
    const __VLS_18 = {
      onCloseModal: __VLS_ctx.closeModal
    }
    const __VLS_16 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_11, __VLS_13))
    let __VLS_14
    let __VLS_15
    // @ts-ignore
    ;[showModal, showModal, selectedValue, closeModal]
  }
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    __VLS_styleScopedClasses['language-switcher']
    __VLS_styleScopedClasses['values-container']
  }
  var __VLS_slots
  return __VLS_slots
  const __VLS_componentsOption = {
    ValueCard,
    Modal
  }
  const __VLS_name = undefined
  let __VLS_internalComponent
}
