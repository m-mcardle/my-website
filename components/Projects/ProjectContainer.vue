<template>
  <div class="flex flex-row w-full">
    <!-- Disable no-v-html rule because we are sanitizing it, the rule is to protect from XSS attacks -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="markdown w-[60%]" v-html="parsedMarkdown" />
    <div class="flex flex-col h-full ml-auto mr-0">
      <a :href="github ? `https://github.com/${github}` : 'https://www.github.com/m-mcardle'">
        <FontAwesomeIcon class="icon" icon="fa-brands fa-github" />
      </a>
      <p class="text-right">
        Updated: {{ new Date(updatedAt).toDateString() }}
      </p>
      <button
        v-if="isAdmin"
        class="delete ml-auto mr-0 text-red-400 hover:shadow-red-700 hover:shadow-lg bg-white px-1"
        @click="deleteProject(title)"
      >
        <FontAwesomeIcon size="xl" icon="fa-solid fa-xmark" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

import UserAuth from '~/mixins/UserAuth.vue'

export default (Vue as VueConstructor<Vue & InstanceType<typeof UserAuth>>).extend({
  name: 'ProjectContainer',

  mixins: [
    UserAuth
  ],

  props: {
    title: {
      type: String,
      required: true
    },
    github: {
      type: String,
      required: true
    },
    updatedAt: {
      type: Number,
      required: true
    },
    rawMarkdown: {
      type: String,
      required: true
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
