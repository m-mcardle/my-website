<template>
  <div class="body bg-black w-full text-white">
    <NavHeader />
    <div id="home" class="landing-page flex flex-col min-h-[860px] h-[125vh]">
      <div class="main w-full flex flex-row">
        <GreetingSection class="fade-in-immediate" />
        <ContactSection class="fade-in-immediate" />
      </div>
      <FooterSection class="fade-in-immediate" />
    </div>
    <div id="info" class="info-page pt-16 h-[120vh] w-full flex flex-col">
      <LazyInfoSection />
      <LazyTimelineSection />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { init, trackPages } from 'insights-js'

export default Vue.extend({
  name: 'IndexPage',

  head () {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://www.mmcardle.ca'
        }
      ]
    }
  },

  mounted () {
    if (process.env.NODE_ENV === 'production') {
      init('XNd5FliNbfQgUWXS')

      trackPages()
    }
  }
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
</style>
