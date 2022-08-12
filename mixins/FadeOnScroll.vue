<script lang="ts">
import Vue from 'vue'

const array: Array<HTMLElement> = []

const isElemVisible = (el: Element) => {
  const rect = el.getBoundingClientRect()
  const elemTop = rect.top + 100 // 100 = buffer
  const elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
}

/**
 * To use this Mixin you MUST add the following css to your component:
 * ```
 * .fade-in {
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
      fadeInElements: array
    }
  },

  mounted () {
    this.fadeInElements = Array.from(document.getElementsByClassName('fade-in') as HTMLCollectionOf<HTMLElement>)
    document.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll (_: Event) {
      for (let i = 0; i < this.fadeInElements.length; i++) {
        const elem = this.fadeInElements[i]

        if (isElemVisible(elem)) {
          elem.style.opacity = '1'
          elem.style.transform = 'scale(1)'
          this.fadeInElements.splice(i, 1) // only allow it to run once
        }
      }
    }
  }
})
</script>
