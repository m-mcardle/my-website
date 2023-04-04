<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <ProjectContainer :title="title" :github="github" :updated-at="updatedAt" :raw-markdown="rawMarkdown" />
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
      updatedAt: 0,
      rawMarkdown: '# Loading...'
    }
  },

  async fetch () {
    const response = await this.$fire.firestore.collection('Projects').where('link', '==', this.project).get()
    const data = response.docs[0].data()

    if (data) {
      this.title = data.title
      this.github = data.github
      this.updatedAt = data.updatedAt
    }

    try {
      this.rawMarkdown = require(`~/assets/markdown/${this.project}.md`).default
    } catch (ex) {
      if (ex.message.includes('Cannot find module')) {
        this.rawMarkdown = '## Error - Project Not Found :('
      } else {
        this.rawMarkdown = '## Error fetching data :('
      }
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
  }
})
</script>
