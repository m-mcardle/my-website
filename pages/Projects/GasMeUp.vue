<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <ProjectContainer :title="title" :github="github" :updated-at="updatedAt" :raw-markdown="rawMarkdown" />
    <div
      class="mt-24"
      data-snack-id="@mmcardle/github.com-m-mcardle-gasmeup"
      data-snack-platform="ios"
      data-snack-preview="true"
      data-snack-theme="dark"
      style="overflow:hidden;background:#212121;border:1px solid var(--color-border);border-radius:4px;height:750px;width:100%"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

export default Vue.extend({
  name: 'ProjectPage',

  data () {
    return {
      title: '',
      github: '',
      updatedAt: null as Date | null,
      rawMarkdown: '# Loading...'
    }
  },

  async fetch () {
    const response = await this.$axios.$get('/api/project/GasMeUp')

    if (response) {
      this.title = response.title
      this.github = response.github
      this.updatedAt = new Date(response.updatedAt)
    }
  },

  fetchOnServer: false,

  head () {
    return {
      script: [
        {
          src: 'https://snack.expo.dev/embed.js',
          async: true
        }
      ]
    }
  },

  computed: {
    parsedMarkdown (): string {
      const markdown = sanitizeHtml(this.rawMarkdown)
      return marked.parse(markdown)
    },

    project (): string {
      return this.$route.params.project
    }
  },

  mounted () {
    this.$fetch()
    try {
      this.rawMarkdown = require('~/assets/markdown/GasMeUp.md').default
    } catch (ex) {
      if (ex.message.includes('Cannot find module')) {
        this.rawMarkdown = '## Error - Project Not Found :('
      } else {
        this.rawMarkdown = '## Error fetching data :('
      }
    }
  }
})
</script>
