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
    <hr>
    <GoalsSection :goals="goals" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { goalRatings } from '~/src/goals'

export default Vue.extend({
  name: 'VidyardPage',

  data () {
    return {
      content: [
        {
          title: 'Welcome!',
          body: 'My name is Matthew McArdle and I am a Software Engineering Student at the University of Guelph. On this page I will be going into great detail about my co-op placement during my time at the amazing Kitchener company Vidyard.',
          images: [require('assets/images/Vidyard-Logo.png')]
        }
      ],
      goals: [
        {
          title: 'Personal Projects',
          description: 'Apply myself outside of work to enhance my portfolio',
          outcome: goalRatings.Outstanding,
          body: "foobarbaz'"
        },
        {
          title: 'Project Lead',
          description: 'Lead a phase of a project',
          outcome: goalRatings.Outstanding,
          body: "foobarbaz'"
        },
        {
          title: 'Test Driven Development',
          description: 'Gain experience with TDD',
          outcome: goalRatings.Success,
          body: "foobarbaz'"
        },
        {
          title: 'Technical Proficiency',
          description: 'Ruby Vue.js',
          outcome: goalRatings.Outstanding,
          body: "foobarbaz'"
        },
        {
          title: 'Internal Project',
          description: 'GIF Police Guild',
          outcome: goalRatings.Outstanding,
          body: "foobarbaz'"
        }
      ]
    }
  }

})
</script>
