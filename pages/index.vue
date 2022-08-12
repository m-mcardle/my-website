<template>
  <div class="body bg-black w-full text-white">
    <NavHeader />
    <div id="home" class="landing-page h-[125vh]">
      <div class="main w-full flex flex-row">
        <Greeting class="fade-in-immediate" />
        <ContactSection class="fade-in-immediate" />
      </div>
      <Footer class="fade-in-immediate" />
    </div>
    <div id="info" class="info-page pt-16 h-[105vh] w-full flex flex-col">
      <InfoSection class="fade-in" />
      <TimelineSection class="fade-in" />
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

import FadeMixin from '~/mixins/FadeOnScroll.vue'

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

  mixins: [
    FadeMixin
  ]
})
</script>

<style scoped>
@keyframes fade-in {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-in-immediate {
  opacity: 0;
  transform: scale(0.8);
  animation: fade-in 0.8s ease-out 0.5s normal forwards;
}

.icon {
  width: 8em;
  height: 8em;
}
.fade-in {
  opacity: 0;
  transition: 0.8s all ease-out;
  transform: scale(0.8);
}
</style>
