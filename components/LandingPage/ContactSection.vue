<template>
  <div class="image p-16 ml-auto mr-0">
    <img :class="`${lgImageClass}`" alt="Matt McArdle" src="~/assets/images/MatthewMcArdleIcon.jpg">
    <div class="contact-info flex flex-row my-5">
      <LinkedinBoxFill :class="`${smImageClass} fill-[#0072b1] bg-white`" />
      <MailFill :class="`${smImageClass} fill-black bg-white`" />
      <PhoneFill :class="`${smImageClass} fill-black bg-white`" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import { LinkedinBoxFill, MailFill, PhoneFill } from 'vue-icon-packs/ri'

export default Vue.extend({
  name: 'ContactSection',

  components: {
    LinkedinBoxFill,
    MailFill,
    PhoneFill
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
