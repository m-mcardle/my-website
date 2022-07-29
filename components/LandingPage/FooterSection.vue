<template>
  <div class="bottom-0 absolute p-16 pb-0 w-full">
    <h3 class="footer-text text-md">
      Come read about my <b>skills</b>, <b>experiences</b>, and <b>interests</b>!
    </h3>
    <hr>
    <div class="logo-images flex flex-row justify-between">
      <img :class="mdImageClass" alt="University of Guelph Logo" src="~/assets/images/UoG-Logo.jpeg">
      <NuxtLink to="/Magnet" class="magnet-link shadow hover:shadow-lg hover:shadow-blue/90 shadow-blue/50">
        <img :class="mdImageClass" alt="Magnet Forensics Logo" src="~/assets/images/Magnet-Logo.png">
      </NuxtLink>
      <NuxtLink to="/Vidyard" class="vidyard-link shadow hover:shadow-lg hover:shadow-green-400/90 shadow-green-400/50">
        <img :class="mdImageClass" alt="Vidyard Logo" src="~/assets/images/Vidyard-Logo.png">
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
      lgImageClass: 'w-32 h-32 md:w-64 md:h-64',
      mdImageClass: 'w-16 h-16 md:w-32 md:h-32',
      smImageClass: 'w-4 h-4 md:w-8 md:h-8'
    }
  }
})
</script>

<style scoped>
@keyframes blink {
  0% {
    opacity: 0%;
  }
  50% {
    opacity: 100%;
  }
  100% {
    opacity: 0%;
  }
}

.scroll-icon {
  width: 2rem;
  height: 2rem;
  animation: blink 2s infinite linear;

  @media screen and (min-width: 600px) {
    width: 4rem;
    height: 4rem;
  }

  @media screen and (min-width: 900px) {
    width: 8rem;
    height: 8rem;
  }
}

.footer-text {
  font-size: 12px;

  @media screen and (min-width: 575px) {
    font-size: 16px;
  }

  @media screen and (min-width: 750px) {
    font-size: 24px;
  }
}
</style>
