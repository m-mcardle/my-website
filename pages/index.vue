<template>
  <div class="body bg-black w-full text-white">
    <NavHeader />
    <div id="home" class="landing-page h-[125vh]">
      <div class="main w-full flex flex-row">
        <Greeting />
        <ContactSection />
      </div>
      <Footer />
    </div>
    <div id="info" class="info-page pt-16 h-[105vh] w-full flex flex-col">
      <InfoSection />
      <TimelineSection />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import Footer from '~/components/LandingPage/FooterSection.vue'
import ContactSection from '~/components/LandingPage/ContactSection.vue'
import Greeting from '~/components/LandingPage/GreetingSection.vue'
import InfoSection from '~/components/InfoPage/InfoSection.vue'
import TimelineSection from '~/components/InfoPage/TimelineSection.vue'
import NavHeader from '~/components/NavHeader.vue'

const array: Array<HTMLElement> = []

const isElemVisible = (el: Element) => {
  const rect = el.getBoundingClientRect()
  const elemTop = rect.top + 200 // 200 = buffer
  const elemBottom = rect.bottom
  return elemTop < window.innerHeight && elemBottom >= 0
}

export default Vue.extend({
  name: 'IndexPage',

  components: {
    Footer,
    ContactSection,
    Greeting,
    InfoSection,
    TimelineSection,
    NavHeader
  },

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

<style scoped>
.icon {
  width: 8em;
  height: 8em;
}
.fade-in {
  opacity: 0;
  transition: 0.3s all ease-out;
  transform: scale(0.8);
}
</style>
