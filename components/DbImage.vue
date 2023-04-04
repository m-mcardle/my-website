<template>
  <img :src="safeSrc" :alt="alt">
</template>

<script lang="ts">
import Vue from 'vue'

const notFoundImage = require('~/assets/images/NotFound.jpg')

export default Vue.extend({
  name: 'DbImage',

  props: {
    src: {
      type: String,
      default: '~/assets/images/NotFound.jpg'
    },
    alt: {
      type: String,
      default: 'Image not found'
    }
  },

  computed: {
    safeSrc (): string {
      try {
        return require(`~/assets/images/${this.src}`)
      } catch (ex) {
        return notFoundImage
      }
    }
  }

})
</script>
