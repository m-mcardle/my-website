<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <div class="flex flex-row w-full">
      <!-- Disable no-v-html rule because we are sanitizing it, the rule is to protect from XSS attacks -->
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown w-[60%]" v-html="parsedMarkdown" />
      <div class="flex flex-col h-full ml-auto mr-0">
        <a :href="github || 'https://www.github.com/m-mcardle'">
          <FontAwesomeIcon class="icon" icon="fa-brands fa-github" />
        </a>
        <p>{{ title }}</p>
        <p>{{ updatedAt?.toDateString() }}</p>
      </div>
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
      title: '',
      github: '',
      updatedAt: null as Date | null,
      rawMarkdown: '# Loading...'
    }
  },

  async fetch () {
    const response = await this.$axios.$get(`/api/project/${this.project}`)

    if (response) {
      this.title = response.title
      this.github = response.github
      this.updatedAt = new Date(response.updatedAt)
    }
  },

  fetchOnServer: false,

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
      this.rawMarkdown = require(`~/assets/markdown/${this.project}.md`).default
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

.icon {
  width: 8rem;
  height: 8rem;

  @media screen and (min-width: 800px) {
    width: 16rem;
    height: 16rem;
  }
}
</style>
