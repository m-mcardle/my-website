<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <ProjectContainer :title="title" :github="github" :updated-at="updatedAt" :raw-markdown="rawMarkdown" />
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

import UserAuth from '~/mixins/UserAuth.vue'

import NavHeader from '~/components/NavHeader.vue'
import ProjectContainer from '~/components/Projects/ProjectContainer.vue'

export default (Vue as VueConstructor<Vue & InstanceType<typeof UserAuth>>).extend({
  name: 'ProjectPage',

  components: {
    NavHeader,
    ProjectContainer
  },

  data () {
    return {
      title: '',
      github: '',
      updatedAt: 0,
      rawMarkdown: '# Loading...'
    }
  },

  async fetch () {
    const response = await this.$axios.$get(`/api/project/${this.project}`)

    if (response) {
      this.title = response.title
      this.github = response.github
      this.updatedAt = response.updatedAt
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
  },

  methods: {
    async deleteProject (title: string) {
      const loadingToast = this.$toast.show('Deleting project...')
      const response = await this.$axios.$delete(`/api/project/${title}`)

      loadingToast.goAway(0)
      if (response) {
        this.$toast.success('Successfully deleted project!')

        setTimeout(() => {
          this.$router.push('../Projects')
        }, 1000)
      } else {
        this.$toast.error('Failed to delete project')
      }
    }
  }
})
</script>
