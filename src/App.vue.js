import Modal from './components/ModalComponent.vue'
import SimpleAudioPlayer from './components/SimpleAudioPlayer.vue'
import { valuesContent } from './valuesContent.js'
export default (await import('vue')).defineComponent({
  components: {
    Modal,
    SimpleAudioPlayer
  },
  data() {
    return {
      language: 'de',
      showModal: false,
      selectedValue: null
    }
  },
  computed: {
    translatedValues() {
      return valuesContent[this.language]
    }
  },
  methods: {
    setLanguage(lang) {
      this.language = lang
      localStorage.setItem('selectedLanguage', lang) // Persist language choice
    },
    openModal(value) {
      this.showModal = true
      this.selectedValue = value
    },
    closeModal() {
      this.showModal = false
      this.selectedValue = null
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
  )({ ...{ class: 'main-content' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'main-content' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.section,
    __VLS_intrinsicElements.section
  )({ ...{ class: 'welcome-section' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({})
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'logo-container' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.svg,
    __VLS_intrinsicElements.svg
  )({
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 100 100',
    fill: 'none',
    stroke: '#FF4500',
    'stroke-width': '4'
  })
  __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
    d: 'M10 50 L50 10 L90 50 L90 90 L10 90 Z',
    fill: 'none'
  })
  __VLS_elementAsFunction(__VLS_intrinsicElements.path)({
    d: 'M50 55 C40 45, 30 55, 50 75 C70 55, 60 45, 50 55 Z',
    fill: '#FF4500'
  })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.h1,
    __VLS_intrinsicElements.h1
  )({ ...{ class: 'main-header' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.p,
    __VLS_intrinsicElements.p
  )({ ...{ class: 'subtitle' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.section,
    __VLS_intrinsicElements.section
  )({ ...{ class: 'audio-section' } })
  // @ts-ignore
  const __VLS_0 = {}.SimpleAudioPlayer
  ;({}).SimpleAudioPlayer
  __VLS_components.SimpleAudioPlayer
  // @ts-ignore
  ;[SimpleAudioPlayer]
  // @ts-ignore
  const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}))
  const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1))
  ;({})({})
  const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2))
  for (const [value] of __VLS_getVForSourceType(__VLS_ctx.translatedValues)) {
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.section,
      __VLS_intrinsicElements.section
    )({
      ...{
        onClick: (...[$event]) => {
          __VLS_ctx.openModal(value)
          // @ts-ignore
          ;[translatedValues, openModal]
        }
      },
      key: value.id,
      ...{ class: 'value-section' }
    })
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.div,
      __VLS_intrinsicElements.div
    )({ ...{ class: 'value-content' } })
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
      src: value.image,
      alt: 'Value Image',
      ...{ class: 'value-image' }
    })
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.div,
      __VLS_intrinsicElements.div
    )({ ...{ class: 'value-card' } })
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({})
    value.name
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({})
    value.quote
    value.author
  }
  if (__VLS_ctx.showModal) {
    // @ts-ignore
    const __VLS_6 = {}.Modal
    ;({}).Modal
    ;({}).Modal
    __VLS_components.Modal
    __VLS_components.Modal
    // @ts-ignore
    ;[Modal, Modal]
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(
      __VLS_6,
      new __VLS_6({
        ...{ onCloseModal: {} },
        show: __VLS_ctx.showModal,
        selectedValue: __VLS_ctx.selectedValue
      })
    )
    const __VLS_8 = __VLS_7(
      {
        ...{ onCloseModal: {} },
        show: __VLS_ctx.showModal,
        selectedValue: __VLS_ctx.selectedValue
      },
      ...__VLS_functionalComponentArgsRest(__VLS_7)
    )
    ;({})({
      ...{ onCloseModal: {} },
      show: __VLS_ctx.showModal,
      selectedValue: __VLS_ctx.selectedValue
    })
    let __VLS_12
    const __VLS_13 = {
      onCloseModal: __VLS_ctx.closeModal
    }
    const __VLS_11 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8))
    let __VLS_9
    let __VLS_10
      // @ts-ignore
    ;[showModal, showModal, selectedValue, closeModal]
  }
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.footer,
    __VLS_intrinsicElements.footer
  )({ ...{ class: 'footer-section' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'footer-left' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.p,
    __VLS_intrinsicElements.p
  )({ ...{ class: 'footer-header' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.p,
    __VLS_intrinsicElements.p
  )({ ...{ class: 'footer-text' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.p,
    __VLS_intrinsicElements.p
  )({ ...{ class: 'footer-header' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.p,
    __VLS_intrinsicElements.p
  )({ ...{ class: 'footer-text' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'footer-right' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.p,
    __VLS_intrinsicElements.p
  )({ ...{ class: 'footer-legal' } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.br)({})
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    __VLS_styleScopedClasses['main-content']
    __VLS_styleScopedClasses['main-content']
    __VLS_styleScopedClasses['welcome-section']
    __VLS_styleScopedClasses['logo-container']
    __VLS_styleScopedClasses['main-header']
    __VLS_styleScopedClasses['subtitle']
    __VLS_styleScopedClasses['audio-section']
    __VLS_styleScopedClasses['value-section']
    __VLS_styleScopedClasses['value-content']
    __VLS_styleScopedClasses['value-image']
    __VLS_styleScopedClasses['value-card']
    __VLS_styleScopedClasses['footer-section']
    __VLS_styleScopedClasses['footer-left']
    __VLS_styleScopedClasses['footer-header']
    __VLS_styleScopedClasses['footer-text']
    __VLS_styleScopedClasses['footer-header']
    __VLS_styleScopedClasses['footer-text']
    __VLS_styleScopedClasses['footer-right']
    __VLS_styleScopedClasses['footer-legal']
  }
  var __VLS_slots
  return __VLS_slots
  const __VLS_componentsOption = {
    Modal,
    SimpleAudioPlayer
  }
  const __VLS_name = undefined
  let __VLS_internalComponent
}
