<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <h1 class="text-center w-full pb-16">
      My Projects
    </h1>
    <div class="w-full py-8 flex flex-row">
      <div class="min-h-[100px]">
        <label for="tech-filter">Technologies</label>
        <MultiSelect
          id="tech-filter"
          v-model="filterValue"
          class="tech-filter"
          multiple
          open-direction="bottom"
          :close-on-select="false"
          :clear-on-select="false"
          :limit="2"
          :limit-text="limitText"
          :options="filterOptions"
        >
          <template #noResult>
            No results
          </template>
        </MultiSelect>
      </div>
      <div class="ml-auto mr-0">
        {{ allProjects.length }} projects found
      </div>
    </div>
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
import MultiSelect from 'vue-multiselect'

import UserAuth from '~/mixins/UserAuth.vue'

export default (Vue as VueConstructor<Vue & InstanceType<typeof UserAuth>>).extend({
  name: 'VidyardPage',

  components: {
    MultiSelect
  },

  mixins: [
    UserAuth
  ],

  data () {
    return {
      allProjects: [] as Project[],
      filterValue: [] as Array<string>,
      filterOptions: [] as Array<string>
    }
  },

  async fetch () {
    const projects = await this.$axios.$get('/api/projects/')

    if (projects) {
      this.allProjects = projects
    }

    const technologies = await this.$axios.$get('/api/tech') as Array<Tech>

    if (technologies) {
      this.filterOptions = technologies.map(tech => tech.text)
    }
  },

  watch: {
    async filterValue () {
      await this.fetchFilteredProjects()
    }
  },

  fetchOnServer: false,

  mounted () {
    this.$fetch()
  },

  methods: {
    async fetchFilteredProjects () {
      const projects = await this.$axios.$get('/api/projects/', {
        params: {
          technologies: this.filterValue
        }
      })

      if (projects) {
        this.allProjects = projects
      }
    },

    limitText (count: number) {
      return `+ ${count} more`
    }
  }
})
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"/>

<style scoped>
.tech-filter {
  min-width: 350px !important;
  max-width: 450px !important;
  z-index: 1;
}

.tech-filter :deep(.multiselect__tag) {
  background: #00B9E1;
}

.tech-filter :deep(.multiselect__option--highlight) {
  background: #00B9E1;
}

</style>
