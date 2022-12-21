<template>
  <div class="mt-auto mb-[25vh] p-16 pb-0 w-full">
    <h3 class="footer-text text-md">
      Come read about my <b><a href="#info">skills</a></b>, <b>experiences</b>, and <b><a href="#info">interests</a></b>!
    </h3>
    <hr>
    <div class="logo-images flex flex-row justify-between">
      <NuxtLink to="/Projects" class="magnet-link shadow hover:shadow-lg hover:shadow-blue/90 shadow-blue/50">
        <div :class="boxClass + ' flex flex-col bg-white'">
          <img class="w-12 h-12 md:w-24 md:h-24 mx-auto" src="~/assets/images/Idea.jpeg" alt="Black and white lightbulb">
          <p class="text text-black md:font-bold text-tiny md:text-xl text-center mx-auto my-auto">
            My Projects
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/Job/Magnet" class="magnet-link shadow hover:shadow-lg hover:shadow-blue/90 shadow-blue/50">
        <img :class="boxClass" alt="Magnet Forensics Logo" src="~/assets/images/Magnet-Logo.png">
      </NuxtLink>
      <NuxtLink to="/Job/Vidyard" class="vidyard-link shadow hover:shadow-lg hover:shadow-green-400/90 shadow-green-400/50">
        <img :class="boxClass" alt="Vidyard Logo" src="~/assets/images/Vidyard-Logo.png">
      </NuxtLink>
    </div>
    <div class="flex w-full">
      <FontAwesomeIcon class="scroll-icon mx-auto" icon="fa-solid fa-chevron-down" size="2xl" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterSection',

  data () {
    return {
      boxClass: 'w-16 h-16 md:w-32 md:h-32'
    }
  }
})
</script>

<style scoped>
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
}

.scroll-icon {
  width: 2rem;
  height: 2rem;
  animation: blink 2s infinite linear;
}

@media screen and (min-width: 600px) {
  .scroll-icon {
    width: 4rem;
    height: 4rem;
  }
}

@media screen and (min-width: 900px) {
  .scroll-icon {
    width: 8rem;
    height: 8rem;
  }
}

.footer-text {
  font-size: 12px;
}

@media screen and (min-width: 575px) {
  .footer-text {
    font-size: 16px;
  }
}

@media screen and (min-width: 750px) {
  .footer-text {
    font-size: 24px;
  }
}

b {
  font-weight: 800;
}
</style>
