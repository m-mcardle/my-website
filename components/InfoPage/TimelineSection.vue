<template>
  <div class="timeline fade-in w-full px-16 lg:px-64 flex justify-center mt-auto mb-64">
    <div class="w-full flex flex-col">
      <h2 class="text-center">
        TIMELINE
      </h2>
      <div class="timeline-box flex flex-col bg-grey text-black h-64 w-full overflow-x-hidden">
        <div class="timeline-bar shrink-0 bg-blue min-h-[3px] mt-24 mb-32 w-full" />
        <div class="timeline-items relative bottom-0 w-full">
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
            class="group absolute bottom-8 w-72"
            :style="{ left: getPosition(element.year) }"
          >
            <div class="timeline-element group absolute bottom-0 left-[32px] h-24 w-72 text-center p-2 flex flex-col content-center">
              <img :alt="element.name" :src="element.image" class="w-16 h-16 mx-auto">
              <p class="text-sm font-bold bg-gray-500 invisible group-hover:visible ">
                {{ element.name }}
              </p>
              <p class="text-xs bg-gray-500 invisible group-hover:visible ">
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
          year: 2018,
          image: require('~/assets/images/Highschool.jpeg')
        },
        {
          name: 'Start of University',
          body: 'Began studies at the University of Guelph as a Software Engineering Student (Co-op)',
          year: 2019,
          image: require('~/assets/images/University.png')
        },
        {
          name: 'Second Year of University',
          body: 'Studied important concepts such as data structures and algorithms',
          year: 2020,
          image: require('~/assets/images/University.png')
        },
        {
          name: 'Magnet Forensics',
          body: 'First Co-op term in which I worked with Kubernetes, C#, and Cloud Infrastructure',
          year: 2021,
          image: require('~/assets/images/Magnet-Logo.png')
        },
        {
          name: 'Vidyard',
          body: 'Second Co-op placement in which I worked with Vue and Ruby',
          year: 2022,
          image: require('~/assets/images/Vidyard-Logo.png')
        }
      ]
    }
  },

  mounted () {
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
  transform: translateX(-50%);
}

@keyframes timeline {
  0% {transform: translateX(0)}
  50% {transform: translateX(-45%)}
  100% {transform: translateX(0)}
}

.timeline-items {
  animation-name: timeline;
  animation-duration: 60s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.timeline-box:hover > .timeline-items {
  animation-play-state: paused;
}
</style>
