<template>
  <div class="body bg-black text-white">
    <NavHeader />
    <div class="py-8 h-screen">
      Add Project
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavHeader from '~/components/NavHeader.vue'

export default Vue.extend({
  name: 'IndexPage',

  components: {
    NavHeader
  }

})
</script>
