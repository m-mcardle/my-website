<script lang="ts">
import Vue from 'vue'

const isElemVisible = (el: Element) => {
  const rect = el.getBoundingClientRect()
  const elemTop = rect.top + 100 // 100 = buffer
  const elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
}

const updateVisibleElements = (elements: Array<HTMLElement>) => {
  for (let i = 0; i < elements.length; i++) {
    const elem = elements[i]

    if (isElemVisible(elem)) {
      elem.style.visibility = 'visible'
      elem.style.opacity = '1'
      elem.style.transform = 'scale(1)'
      elements.splice(i, 1) // only allow it to run once
    }
  }
}

/**
 * To use this Mixin you MUST add the following css to your component:
 * ```
 * .fade-in {
 *  visibility: hidden;
 *  opacity: 0;
 *  transition: 0.8s all ease-out;
 *  transform: scale(0.8);
 * }
 * ```
 */

export default Vue.extend({
  name: 'FadeMixin',

  data () {
    return {
      fadeInElements: [] as Array<HTMLElement>
    }
  },

  mounted () {
    this.fadeInElements = Array.from(document.getElementsByClassName('fade-in') as HTMLCollectionOf<HTMLElement>)
    document.addEventListener('scroll', this.handleScroll)
    updateVisibleElements(this.fadeInElements)
  },

  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (_: Event) {
      updateVisibleElements(this.fadeInElements)
    }
  }
})
</script>
