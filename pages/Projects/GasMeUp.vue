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

  mixins: [
    UserAuth
  ],

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
