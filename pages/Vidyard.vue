<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <JobHeader
      title="Vidyard"
      job-title="Software Developer (Co-op)"
      date-string="May 2022 - August 2022"
      :image-url="require('~/assets/images/Vidyard-Logo.png')"
    />
    <div
      v-for="(section) in content"
      :key="section.title"
      class="section flex flex-col p-8"
    >
      <hr class="w-full">
      <div class="section-body flex flex-row">
        <div class="content flex flex-col w-[40%]">
          <h3 class="title pt-8">
            {{ section.title }}
          </h3>
          <p class="body pt-4">
            {{ section.body }}
          </p>
        </div>
        <div class="images flex flex-col w-[60%] justify-center items-end">
          <div v-if="section.images" class="flex flex-row justify-between">
            <img v-for="(image) in section.images" :key="image" class="h-32 bg-white" :src="image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import JobHeader from '../components/JobHeader.vue'
import NavHeader from '~/components/NavHeader.vue'

export default Vue.extend({
  name: 'VidyardPage',

  components: {
    JobHeader,
    NavHeader
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
