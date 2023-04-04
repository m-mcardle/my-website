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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'

export default Vue.extend({
  name: 'ProjectContainer',

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
    ...mapState(['admin']),
    parsedMarkdown (): string {
      const markdown = sanitizeHtml(this.rawMarkdown)
      return marked.parse(markdown)
    },

    project (): string {
      return this.$route.params.project
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
}

@media screen and (min-width: 800px) {
  .icon {
    width: 16rem;
    height: 16rem;
  }
}
</style>
