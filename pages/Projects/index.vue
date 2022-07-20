<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <h1 class="text-center w-full pb-16">
      My Projects
    </h1>
    <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12">
      <NuxtLink
        v-for="(project) in projects"
        :key="project.name"
        class="flex flex-col w-[500px] h-[600px] bg-gray-600 mx-auto p-4 hover:shadow-lg hover:shadow-blue"
        :to="project.page ? `/Projects/${project.page}` : ''"
      >
        <p class="self-end">
          {{ project.year }}
        </p>
        <h3 class="text-center w-full mb-4">
          {{ project.name }}
        </h3>
        <div class="w-full h-[250px]">
          <img class="max-h-[250px] w-[350px] mx-auto" :alt="project.name" :src="project.image">
        </div>
        <p class="mt-8">
          {{ project.description }}
        </p>
        <div class="flex flex-row w-full justify-around mt-auto mb-0">
          <div
            v-for="(item) in project.infrastructure"
            :key="item.name"
            class="flex flex-col justify-evenly items-center"
          >
            <img class="h-8 w-auto bg-white" :alt="item.name" :src="item.image">
            <p
              class="font-bold"
            >
              {{ item.name }}
            </p>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink
        v-for="(project) in allProjects"
        :key="project.title"
        class="flex flex-col w-[500px] h-[600px] bg-gray-600 mx-auto p-4 hover:shadow-lg hover:shadow-blue"
        :to="project.title ? `/Projects/${project.title}` : ''"
      >
        <p class="self-end">
          {{ project.year }}
        </p>
        <h3 class="text-center w-full mb-4">
          {{ project.title }}
        </h3>
        <div class="w-full h-[250px]">
          <img class="max-h-[250px] w-[350px] mx-auto" :alt="project.title" :src="require(`~/assets/images/${project.image}`)">
        </div>
        <p class="mt-8">
          {{ project.content }}
        </p>
        <!-- <div class="flex flex-row w-full justify-around mt-auto mb-0">
          <div
            v-for="(item) in project.infrastructure"
            :key="item.name"
            class="flex flex-col justify-evenly items-center"
          >
            <img class="h-8 w-auto bg-white" :alt="item.name" :src="item.image">
            <p
              class="font-bold"
            >
              {{ item.name }}
            </p>
          </div>
        </div> -->
      </NuxtLink>
    </div>
    <p>
      {{ JSON.stringify(allProjects) }}
    </p>
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
      allProjects: [] as Project[],
      projects: [
        {
          name: 'Personal Website (V2)',
          description: 'Porfolio website for providing information about my work experience and personal projects. Built using Nuxt (Vue) and Tailwind CSS.',
          infrastructure: [
            {
              name: 'Nuxt',
              image: require('~/assets/images/Nuxt.png')
            },
            {
              name: 'Vue.js',
              image: require('~/assets/images/Vue.png')
            },
            {
              name: 'Tailwind CSS',
              image: require('~/assets/images/Tailwind.png')
            }
          ],
          image: require('~/assets/images/Projects/WebsiteV2.png'),
          year: '2022',
          page: 'WebsiteV2'
        },
        {
          name: 'GasMeUp',
          description: 'React Native mobile app to calculate gas cost of trips and easily calculate the cost for each rider when carpooling. Built using the Expo React Native infrastructure for the client and a Node.js Express API server for the backend. Utilizes the Google Maps API for calculating trip distance and autocompleting locations and my own Gas Price API for getting current gas prices.',
          infrastructure: [
            {
              name: 'React Native',
              image: require('~/assets/images/React.png')
            },
            {
              name: 'Node.js',
              image: require('~/assets/images/Node.webp')
            },
            {
              name: 'Maps API',
              image: require('~/assets/images/GoogleMaps.jpeg')
            }
          ],
          image: require('~/assets/images/GoogleMaps.jpeg'),
          year: '2022',
          page: 'GasMeUp'
        },
        {
          name: 'Gas Price Alerting Service',
          description: 'Notification service built using AWS SNS to notify subscribers of large changes in predicted gas prices. Built using a Ruby script to hit my API and hosted on AWS.',
          infrastructure: [
            {
              name: 'Ruby',
              image: require('~/assets/images/Ruby.png')
            },
            {
              name: 'AWS',
              image: require('~/assets/images/AWS.png')
            }
          ],
          image: require('~/assets/images/Projects/EmailNotification.webp'),
          year: '2022',
          page: 'GasPriceAlerting'
        },
        {
          name: 'Gas Prices API',
          description: 'Express Node.js API hosted on AWS to provide information about current gas prices in Canada and the USA. Done through a combination of simple web-scraping and networking between already publicly available servers.',
          infrastructure: [
            {
              name: 'Node.js',
              image: require('~/assets/images/Node.webp')
            },
            {
              name: 'AWS',
              image: require('~/assets/images/AWS.png')
            }
          ],
          image: require('~/assets/images/Node.webp'),
          year: '2022',
          page: 'GasPriceAPI'
        },
        {
          name: 'Personal Website (V1)',
          description: 'Porfolio website for providing information about my work experience and personal projects. Built using React and Tailwind CSS.',
          infrastructure: [
            {
              name: 'React',
              image: require('~/assets/images/React.png')
            },
            {
              name: 'Tailwind CSS',
              image: require('~/assets/images/Tailwind.png')
            }
          ],
          image: require('~/assets/images/Projects/WebsiteV1.png'),
          year: '2021',
          page: 'WebsiteV1'
        },
        {
          name: 'F1 Standings Visualizer',
          description: 'Python app built using Plotly to visualize the progression of F1 championship standings for all seasons to date. Built using a public F1 database API (Ergast) and the Python Plotly framework to visualize the data script hosted via Heroku.',
          infrastructure: [
            {
              name: 'Python',
              image: require('~/assets/images/Python.png')
            },
            {
              name: 'Plotly',
              image: require('~/assets/images/Plotly.webp')
            },
            {
              name: 'Heroku',
              image: require('~/assets/images/Heroku.png')
            }
          ],
          year: '2021',
          image: require('~/assets/images/Projects/F1Visualizer.png'),
          page: 'F1Visualizer'
        },
        {
          name: 'Twitch Chat Embedding - Chrome Extension',
          description: 'Chrome extension that embeds a Twitch Chat into the official players for F1TV or ESPN+ to allow viewers to easily communciate with other fans during events. Built with just JavaScript, HTML, and CSS.',
          infrastructure: [
            {
              name: 'Chrome Extension',
              image: require('~/assets/images/Chrome.png')
            },
            {
              name: 'JavaScript',
              image: require('~/assets/images/JavaScript.png')
            }
          ],
          image: require('~/assets/images/Chrome.png'),
          year: '2021',
          page: 'TwitchExtension'
        }
      ]
    }
  },

  async fetch () {
    const response = await this.$axios.$get('/api/projects')

    if (response) {
      this.allProjects = response
    }
  },

  mounted () {
    this.$fetch()
  }

})
</script>
