<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <h1 class="text-center w-full pb-16">
      My Projects
    </h1>
    <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12">
      <NuxtLink
        v-for="(project) in allProjects"
        :key="project.title"
        class="flex flex-col w-[500px] h-[600px] bg-gray-600 mx-auto p-4 hover:shadow-lg hover:shadow-blue"
        :to="project.link ? `/Projects/${project.link}` : ''"
      >
        <p class="self-end">
          {{ project.year }}
        </p>
        <h3 class="text-center w-full mb-4">
          {{ project.title }}
        </h3>
        <div class="w-full h-[250px]">
          <img class="max-h-[250px] w-[350px] mx-auto" :alt="project.image.alt" :src="require(`~/assets/images/${project.image.path}`) || ''">
        </div>
        <p class="mt-8">
          {{ project.content }}
        </p>
        <div class="flex flex-row w-full justify-around mt-auto mb-0">
          <div
            v-for="(item) in project.infrastructure"
            :key="item.text"
            class="flex flex-col justify-evenly items-center"
          >
            <img class="h-8 w-auto bg-white" :alt="item.image.alt" :src="require(`~/assets/images/${item.image.path}`)">
            <p
              class="font-bold"
            >
              {{ item.text }}
            </p>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink
        v-if="isAdmin"
        class="flex flex-col w-[500px] h-[600px] bg-gray-600 mx-auto p-4 hover:shadow-lg hover:shadow-blue"
        to="/Projects/AddProject"
      >
        <h1 class="text-center">
          Add Project
        </h1>
        <p class="text-8xl my-auto mx-auto text-center">
          +
        </p>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

import UserAuth from '~/mixins/UserAuth.vue'

export default (Vue as VueConstructor<Vue & InstanceType<typeof UserAuth>>).extend({
  name: 'VidyardPage',

  mixins: [
    UserAuth
  ],

  data () {
    return {
      allProjects: [] as Project[]
    }
  },

  async fetch () {
    const response = await this.$axios.$get('/api/projects')

    if (response) {
      this.allProjects = response
    }
  },

  fetchOnServer: false,

  mounted () {
    this.$fetch()
  }

})
</script>
