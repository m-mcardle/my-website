<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <JobHeader
      title="Vidyard"
      job-title="Software Developer (Co-op)"
      date-string="May 2022 - August 2022"
      :image-url="require('~/assets/images/Vidyard-Logo.png')"
    />
    <JobContent :content="content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import JobHeader from '../components/JobHeader.vue'
import NavHeader from '~/components/NavHeader.vue'
import JobContent from '~/components/JobContent.vue'

export default Vue.extend({
  name: 'VidyardPage',

  components: {
    JobHeader,
    NavHeader,
    JobContent
  },

  data () {
    return {
      content: [
        {
          title: 'Welcome!',
          body: 'My name is Matthew McArdle and I am a Software Engineering Student at the University of Guelph. On this page I will be going into great detail about my co-op placement during my time at the amazing Kitchener company Vidyard.',
          images: [require('assets/images/Vidyard-Logo.png')]
        }
      ]
    }
  }

})
</script>
