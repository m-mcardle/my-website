<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <div class="flex flex-row w-full">
      <!-- Disable no-v-html rule because we are sanitizing it, the rule is to protect from XSS attacks -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown w-[60%]" v-html="parsedMarkdown" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

import NavHeader from '~/components/NavHeader.vue'

export default Vue.extend({
  name: 'ProjectPage',

  components: {
    NavHeader
  },

  data () {
    return {
      input: '# Loading...'
    }
  },

  computed: {
    parsedMarkdown (): string {
      const markdown = sanitizeHtml(this.input)
      return marked.parse(markdown)
    },

    project (): string {
      return this.$route.params.project
    }
  },

  mounted () {
    try {
      this.input = require(`~/assets/markdown/${this.project}.md`).default
    } catch (ex) {
      this.input = 'Error fetching data :('
    }
  }
})
</script>

<style scoped>
::v-deep(.markdown > h1) {
  text-align: center;
}

::v-deep(.markdown > h2) {
  text-align: center;
}

::v-deep(.markdown > h3) {
  padding: 16px 0;
}

::v-deep(.markdown > a) {
  font-weight: bold;
}
</style>
