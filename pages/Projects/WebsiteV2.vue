<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <h1 class="text-center w-full pb-32">
      Website V2
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavHeader from '~/components/NavHeader.vue'

export default Vue.extend({
  name: 'WebsiteV2Page',

  components: {
    NavHeader
  }
})
</script>
