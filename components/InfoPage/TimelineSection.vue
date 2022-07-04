<template>
  <div class="timeline w-full flex justify-center mt-auto mb-64">
    <div class="w-[70%] flex flex-col">
      <h2 class="text-center">
        TIMELINE
      </h2>
      <div class="flex flex-col bg-grey text-black h-64 w-full px-16 overflow-x-scroll">
        <div class="timeline-bar shrink-0 bg-blue min-h-[3px] mt-16 mb-32" :style="{ width: getPosition(2023) }" />
        <div class="relative bottom-0 w-full">
          <div
            v-for="(year) in years"
            :key="year"
            class="year-element absolute bottom-32"
            :style="{ left: getPosition(year) }"
          >
            <div class="year-box bg-black h-16 min-w-[4rem] text-white text-center">
              {{ year }}
            </div>
          </div>
          <div
            v-for="(element) in timeline"
            :key="element.name"
            class="timeline-element absolute bottom-8"
            :style="{ left: getPosition(element.year) }"
          >
            <div class="bg-gray-500 h-24 w-64 text-center p-1">
              <p class="text-sm font-bold">
                {{ element.name }}
              </p>
              <p class="text-xs">
                {{ element.body }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TimelineSection',

  data () {
    return {
      years: [
        2018,
        2019,
        2020,
        2021,
        2022
      ],
      timeline: [
        {
          name: 'Highschool',
          body: 'Began software development journey through learning Swift to build Arcade Game App and Grocery Shopping Companion App',
          year: 2018
        },
        {
          name: 'Start of University',
          body: 'Began studies at the University of Guelph as a Software Engineering Student (Co-op)',
          year: 2019
        },
        {
          name: 'Magnet Forensics (Co-op)',
          body: 'First Co-op term in which I worked with Kubernetes, C#, and Cloud Infrastructure',
          year: 2021
        },
        {
          name: 'Vidyard',
          body: 'Second Co-op placement in which I worked with Vue, and Ruby',
          year: 2022
        }
      ]
    }
  },

  methods: {
    getPosition: (year: number) => {
      return `${(90 + (year - 2018) * 360)}px`
    }
  }

})
</script>

<style>
.timeline-element {
  transform: translateX(-33.333333%);
}
</style>
