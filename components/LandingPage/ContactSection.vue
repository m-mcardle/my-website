<template>
  <div class="image p-16 ml-auto mr-0">
    <img :class="`${lgImageClass}`" alt="Matt McArdle" src="~/assets/images/MatthewMcArdleIcon.jpg">
    <div class="contact-info flex flex-row my-5">
      <a href="https://www.linkedin.com/in/matthew-j-mcardle/">
        <LinkedinBoxFill :class="`${smImageClass} fill-[#0072b1] bg-white`" />
      </a>
      <a href="https://www.github.com/m-mcardle">
        <GithubFill :class="`${smImageClass} fill-black bg-white`" />
      </a>
      <a href="mailto:matthew.j.mcardle@gmail.com">
        <MailFill :class="`${smImageClass} fill-black bg-white`" />
      </a>
      <a href="tel:519-500-3440">
        <PhoneFill :class="`${smImageClass} fill-black bg-white`" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// @ts-ignore
import { LinkedinBoxFill, MailFill, PhoneFill, GithubFill } from 'vue-icon-packs/ri'

export default Vue.extend({
  name: 'ContactSection',

  components: {
    LinkedinBoxFill,
    MailFill,
    PhoneFill,
    GithubFill
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
