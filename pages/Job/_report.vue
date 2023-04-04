<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <JobHeader
      v-if="loaded"
      :title="company"
      :job-title="jobTitle"
      :date-string="period"
      :image-url="image"
    />
    <div
      v-else
      class="loading flex flex-row h-[350px] p-8"
    >
      <div class="w-72 h-72 bg-gray-600" />
      <div class="titles flex flex-col pl-12">
        <div class="my-2 w-[400px] h-16 bg-gray-600" />
        <div class="my-2 w-[350px] h-10 bg-gray-600" />
        <div class="mb-0 mt-auto w-72 h-6 bg-gray-600" />
      </div>
    </div>
    <!-- TODO: Make sure this is safe -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="markdown p-8 w-full" v-html="parsedMarkdown" />
    <hr>
    <GoalsSection v-if="loaded" :goals="goals" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { marked } from 'marked'

export default Vue.extend({
  name: 'JobPage',

  data () {
    return {
      company: '',
      jobTitle: '',
      period: '',
      image: 'NotFound.png',
      loaded: false,
      rawMarkdown: '# Loading...',
      goals: [] as Goal[]
    }
  },

  async fetch () {
    const docReference = await this.$fire.firestore.collection('Reports').where('link', '==', this.report).get()
    const data = docReference.docs[0].data()

    if (data) {
      this.company = data.company
      this.period = data.period
      this.jobTitle = data.job
      this.image = data.image.path
      this.goals = data.goals
      this.loaded = true
    }

    try {
      this.rawMarkdown = require(`~/assets/markdown/${this.report}.md`).default
    } catch (ex) {
      if (ex.message.includes('Cannot find module')) {
        this.rawMarkdown = '## Error - Project Not Found :('
      } else {
        this.rawMarkdown = '## Error fetching data :('
      }
    }
  },

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
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

@media screen and (min-width: 1000px) {
  ::v-deep(.markdown row) {
    flex-direction: row;
  }
}

::v-deep(.markdown column) {
  display: flex;
  flex-direction: column;
  width: 100%;
}

@media screen and (min-width: 1000px) {
  ::v-deep(.markdown column) {
    width: 50%;
  }
}

::v-deep(.markdown row column:nth-child(2) *) {
  margin-top: 10px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (min-width: 1000px) {
  ::v-deep(.markdown row column:nth-child(2) *) {
    margin-top: auto;
  }
}

@media screen and (min-width: 1000px) {

  ::v-deep(.markdown row column:nth-child(2) *) {
    margin-right: 0;
  }
}

@keyframes blink {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}

.loading {
  animation: blink 2s infinite linear;
}
</style>
