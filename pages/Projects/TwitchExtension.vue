<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <h1 class="text-center w-full pb-32">
      Twitch Chat Chrome Extension
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavHeader from '~/components/NavHeader.vue'

export default Vue.extend({
  name: 'TwitchExtensionPage',

  components: {
    NavHeader
  }
})
</script>
