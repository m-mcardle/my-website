<template>
  <NuxtLink
    class="flex flex-col w-[500px] h-[600px] bg-gray-600 mx-auto p-4 hover:shadow-lg hover:shadow-blue"
    :to="link"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'BasicCard',

  props: {
    link: {
      type: String,
      default: ''
    }
  }
})
</script>
