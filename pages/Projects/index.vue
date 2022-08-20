<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <h1 class="text-center w-full pb-16">
      My Projects
    </h1>
    <div
      v-if="!loaded"
      class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12"
    >
      <div
        v-for="(i) in [0, 1, 2]"
        :key="i"
        class="loading flex flex-col w-[90%] h-[450px] md:w-[500px] md:h-[625px] bg-gray-600 mx-auto p-4"
      />
    </div>
    <div
      v-else
      class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12"
    >
      <NuxtLink
        v-for="(project) in allProjects"
        :key="project.title"
        class="flex flex-col w-[90%] md:w-[500px] md:h-[625px] bg-gray-600 mx-auto p-4 hover:shadow-lg hover:shadow-blue"
        :to="project.link ? `/Projects/${project.link}` : ''"
      >
        <p class="self-end">
          {{ project.year }}
        </p>
        <h3 class="text-center w-full mb-4">
          {{ project.title }}
        </h3>
        <div class="w-full h-[125px] md:h-[250px]">
          <DbImage class="max-h-[125px] md:max-h-[250px] w-[175px] md:w-[350px] mx-auto" :alt="project.image.alt" :src="project.image.path" />
        </div>
        <p class="mt-8 mb-4">
          {{ project.content }}
        </p>
        <div class="flex flex-row w-full justify-around mt-auto mb-0">
          <div
            v-for="(item) in project.infrastructure"
            :key="item.text"
            class="flex flex-col justify-evenly items-center"
          >
            <DbImage class="h-8 w-auto bg-white" :alt="item.image.alt" :src="item.image.path" />
            <p
              class="font-bold"
            >
              {{ item.text }}
            </p>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink
        v-if="admin"
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
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'VidyardPage',

  data () {
    return {
      allProjects: [] as Project[],
      loaded: false
    }
  },

  async fetch () {
    const response = await this.$axios.$get('/api/projects')

    if (response) {
      this.allProjects = response
      this.loaded = true
    }
  },

  computed: {
    ...mapState(['admin'])
  },

  // Needed to remove `ERROR  Error in fetch(): connect ECONNREFUSED 127.0.0.1:80`
  // Can't fetch on server because we are fetching TO the server
  fetchOnServer: false,

  mounted () {
    this.$fetch()
  }

})
</script>

<style scoped>
@keyframes blink {
  0% {
    opacity: 30%;
  }
  50% {
    opacity: 100%;
  }
  100% {
    opacity: 30%;
  }
}

.loading {
  animation: blink 2s infinite linear;
}
</style>
