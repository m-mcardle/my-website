<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <JobHeader
      v-if="loaded"
      :title="company"
      :job-title="jobTitle"
      :date-string="period"
      :image-url="require(`~/assets/images/${image}`)"
    />
    <!-- Disable no-v-html rule because we are sanitizing it, the rule is to protect from XSS attacks -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="markdown w-full" v-html="parsedMarkdown" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

import JobHeader from '~/components/Job/JobHeader.vue'
import NavHeader from '~/components/NavHeader.vue'

export default Vue.extend({
  name: 'JobPage',

  components: {
    JobHeader,
    NavHeader
  },

  data () {
    return {
      company: '',
      jobTitle: '',
      period: '',
      image: 'NotFound.png',
      loaded: false,
      rawMarkdown: '# Loading...'
    }
  },

  async fetch (): Promise<void> {
    const response = await this.$axios.$get(`/api/report/${this.report}`)

    if (response) {
      this.company = response.company
      this.period = response.period
      this.jobTitle = response.job
      this.image = response.image.path
      this.loaded = true
    }
  },

  // Needed to remove `ERROR  Error in fetch(): connect ECONNREFUSED 127.0.0.1:80`
  // Can't fetch on server because we are fetching TO the server
  fetchOnServer: false,

  computed: {
    report (): string {
      return this.$route.params.report
    },

    parsedMarkdown (): string {
      const markdown = sanitizeHtml(this.rawMarkdown)
      return marked.parse(markdown)
    }
  },

  mounted () {
    this.$fetch()
    try {
      this.rawMarkdown = require('~/assets/markdown/Magnet.md').default
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

::v-deep(.markdown > ul) {
  list-style: disc inside;
}

::v-deep(.markdown > p > a) {
  color: lightskyblue;
}

::v-deep(.markdown > hr) {
  margin: 16px 0;
}
</style>
