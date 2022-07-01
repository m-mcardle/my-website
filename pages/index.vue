<template>
  <div class="body bg-black text-white">
    <div class="landing-page h-[125vh]">
      <div class="main w-full flex flex-row">
        <Greeting />
        <ContactSection />
      </div>
      <Footer />
    </div>
    <div class="info-page h-screen w-full flex flex-col">
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

export default Vue.extend({
  name: 'IndexPage',

  components: {
    Footer,
    ContactSection,
    Greeting,
    InfoSection,
    TimelineSection
  },

  data () {
    return {
      lgImageClass: 'w-32 h-32 md:w-64 md:h-64',
      mdImageClass: 'w-16 h-16 md:w-32 md:h-32',
      smImageClass: 'w-4 h-4 md:w-8 md:h-8'
    }
  }
})
</script>
