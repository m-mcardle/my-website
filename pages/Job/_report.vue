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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
      loaded: false
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
    }
  },

  mounted () {
    this.$fetch()
  }
})
</script>
