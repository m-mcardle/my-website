<template>
  <div class="bottom-0 absolute p-16 pb-0 w-full">
    <h3>Come read about my <b>skills</b>, <b>experiences</b>, and <b>interests</b>!</h3>
    <hr>
    <div class="logo-images flex flex-row justify-between">
      <img :class="`${mdImageClass}`" alt="University of Guelph Logo" src="~/assets/images/UoG-Logo.jpeg">
      <img :class="`${mdImageClass}`" alt="Magnet Forensics Logo" src="~/assets/images/Magnet-Logo.png">
      <img :class="`${mdImageClass}`" alt="Vidyard Logo" src="~/assets/images/Vidyard-Logo.png">
    </div>
    <div class="w-full">
      <ChevronDownSolid class="scroll-icon w-32 h-32 mx-auto" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import { ChevronDownSolid } from 'vue-icon-packs/hi'

export default Vue.extend({
  name: 'FooterSection',

  components: {
    ChevronDownSolid
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
  animation: blink 2s infinite linear;
}
</style>
