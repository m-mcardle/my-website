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
    <!-- TODO: Make sure this is safe -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="markdown p-8 w-full" v-html="parsedMarkdown" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { marked } from 'marked'

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
      return marked.parse(this.rawMarkdown)
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
::v-deep(.markdown h1) {
  text-align: center;
}

::v-deep(.markdown h2) {
  text-align: center;
}

::v-deep(.markdown h3) {
  padding: 16px 0;
}

::v-deep(.markdown a) {
  font-weight: bold;
}

::v-deep(.markdown ul) {
  list-style: disc inside;
}

::v-deep(.markdown a) {
  color: lightskyblue;
}

::v-deep(.markdown hr) {
  margin: 32px 0;
}

::v-deep(.markdown img) {
  display: inline;
  height: 125px;
}

::v-deep(.markdown row) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

::v-deep(.markdown column) {
  display: flex;
  flex-direction: column;
  width: 50%;
}

::v-deep(.markdown row column:nth-child(2) p) {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: 0;
}
</style>
