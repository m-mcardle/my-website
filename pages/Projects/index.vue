<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <h1 class="text-center w-full pt-16 pb-32">
      My Projects
    </h1>
    <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12">
      <NuxtLink
        v-for="(project) in projects"
        :key="project.name"
        class="flex flex-col w-[500px] h-[500px] bg-gray-600 mx-auto p-4"
        :to="project.page ? `/Projects/${project.page}` : ''"
      >
        <p class="self-end">
          {{ project.year }}
        </p>
        <h3 class="text-center w-full mb-4">
          {{ project.name }}
        </h3>
        <img class="w-[150px] mx-auto" :alt="project.name" :src="require('~/assets/images/Magnet-Logo.png')">
        <p class="mt-8">
          {{ project.description }}
        </p>
        <div class="flex flex-row w-full justify-around mt-auto mb-0">
          <div
            v-for="(name) in project.infrastructure"
            :key="name"
            class="flex flex-col justify-between items-center"
          >
            <img class="h-8 w-fit bg-white" alt="Something" :src="require('~/assets/images/Vidyard-Logo.png')">
            <p
              class="font-bold"
            >
              {{ name }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavHeader from '~/components/NavHeader.vue'

export default Vue.extend({
  name: 'VidyardPage',

  components: {
    NavHeader
  },

  data () {
    return {
      projects: [
        {
          name: 'Personal Website (V2)',
          description: 'Porfolio website for providing information about my work experience and personal projects. Built using Nuxt (Vue) and Tailwind CSS.',
          infrastructure: ['Nuxt', 'Vue.js', 'Tailwind CSS'],
          year: '2022'
        },
        {
          name: 'GasMeUp',
          description: 'React Native mobile app to calculate gas cost of trips and easily calculate the cost for each rider when carpooling. Built using the Expo React Native infrastructure for the client and a Node.js Express API server for the backend. Utilizes the Google Maps API for calculating trip distance and autocompleting locations and my own Gas Price API for getting current gas prices.',
          infrastructure: ['React Native', 'Node.js', 'Express API', 'Google Maps API'],
          year: '2022'
        },
        {
          name: 'Gas Price Alerting Service',
          description: 'Notification service built using AWS SNS to notify subscribers of large changes in predicted gas prices. Built using a Ruby script to hit my API and hosted on AWS.',
          infrastructure: ['Ruby', 'AWS'],
          year: '2022'
        },
        {
          name: 'Gas Prices API',
          description: 'Express Node.js API hosted on AWS to provide information about current gas prices in Canada and the USA. Done through a combination of simple web-scraping and networking between already publicly available servers.',
          infrastructure: ['Node.js', 'Express API', 'AWS'],
          year: '2022'
        },
        {
          name: 'Personal Website (V1)',
          description: 'Porfolio website for providing information about my work experience and personal projects. Built using React.js and Tailwind CSS.',
          infrastructure: ['React.js', 'Tailwind CSS'],
          year: '2021'
        },
        {
          name: 'F1 Standings Visualizer',
          description: 'Python app built using Plot.ly to visualize the progression of F1 championship standings for all seasons to date. Built using a public F1 database API (Ergast) and the Python Plot.ly framework to visualize the data script hosted via Heroku.',
          infrastructure: ['Python', 'Plot.ly', 'Heroku'],
          year: '2021',
          page: 'F1-Visualizer'
        },
        {
          name: 'Twitch Chat Embedding - Chrome Extension',
          description: 'Chrome extension that embeds a Twitch Chat into the official players for F1TV or ESPN+ to allow viewers to easily communciate with other fans during events. Built with just JavaScript, HTML, and CSS.',
          infrastructure: ['Chrome Extension', 'JavaScript'],
          year: '2021'
        }
      ]
    }
  }

})
</script>

<style>
  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }

  hr {
    border-color: #00B9E1;
    margin: 8px 0;
  }
</style>
