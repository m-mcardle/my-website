<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <h1 class="text-center w-full pb-32">
      F1 Visualizer
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavHeader from '~/components/NavHeader.vue'

export default Vue.extend({
  name: 'F1VisualizerPage',

  components: {
    NavHeader
  }
})
</script>

<style>
  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }

  hr {
    border-color: #00B9E1;
    margin: 8px 0;
  }
</style>
