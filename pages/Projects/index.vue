<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <h1 class="text-center w-full pb-16">
      My Projects
    </h1>
    <div class="w-full py-2 flex flex-col lg:flex-row justify-between items-center">
      <div>
        <FontAwesomeIcon
          class="bg-gray-600 hover:bg-gray-500 text-white font-bold py-5 px-4 rounded h-20px"
          icon="fa-solid fa-filter"
          @click="showFilters = !showFilters"
        />
      </div>
      <div v-if="showFilters" class="min-h-[100px]">
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
      <div class="">
        {{ allProjects.length }} projects found
      </div>
    </div>
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
      <ProjectCard
        v-for="(project) in allProjects"
        :key="project.title"
        :project="project"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import MultiSelect from 'vue-multiselect'

import ProjectCard from '~/components/Projects/ProjectCard.vue'

export default Vue.extend({
  name: 'ProjectsPage',

  components: {
    MultiSelect,
    ProjectCard
  },

  data () {
    return {
      allProjects: [] as Project[],
      filterValue: [] as string[],
      filterOptions: [] as string[],
      loaded: false,
      showFilters: false
    }
  },

  async fetch () {
    const projectDocs = (await this.$fire.firestore.collection('Projects').orderBy('year', 'desc').get()).docs
    const projects = projectDocs.map(doc => doc.data()) as Project[]

    if (projects) {
      this.allProjects = projects
      this.loaded = true
    }

    const technologyDocs = (await this.$fire.firestore.collection('Technologies').orderBy('id', 'asc').get()).docs
    const technologies = technologyDocs.map(doc => doc.data()) as Tech[]

    if (technologies) {
      this.filterOptions = technologies.map(tech => tech.text)
    }
  },

  watch: {
    async filterValue () {
      await this.fetchFilteredProjects()
    }
  },

  mounted () {
    this.$fetch()
  },

  methods: {
    async fetchFilteredProjects () {
      if (this.filterValue.length === 0) {
        this.$fetch()
        return
      }

      this.loaded = false
      const projectDocs = (await this.$fire.firestore.collection('Projects').where('technologies', 'array-contains-any', this.filterValue).get()).docs
      const projects = projectDocs.map(doc => doc.data()) as Project[]

      if (projects) {
        this.allProjects = projects
        this.loaded = true
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
@keyframes blink {
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}

.loading {
  animation: blink 2s infinite linear;
}

.tech-filter {
  width: 400px !important;
  z-index: 1;
}

.tech-filter :deep(.multiselect__tag) {
  background: #00B9E1;
}

.tech-filter :deep(.multiselect__option--highlight) {
  background: #00B9E1;
}
</style>
