<template>
  <div class="bar-container bg-white w-full h-4 m-2 rounded-r-lg">
    <div class="bar bg-gradient-to-r from-blue to-green-400 h-full rounded-r-lg" :style="{ width: percentage + '%' }" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SkillbarWidget',

  props: {
    percentage: {
      type: Number,
      default: 0
    }
  }
})
</script>
