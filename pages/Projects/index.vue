<template>
  <div class="main bg-black text-white min-h-screen h-fit p-8">
    <NavHeader />
    <h1 class="text-center w-full pb-16">
      My Projects
    </h1>
    <div class="w-full py-8 flex flex-row">
      <div class="min-h-[100px]">
        <label for="search-bar">Search</label>
        <div class="search-container border rounded">
          <input id="search-bar" v-model="searchQuery" class="search-bar p-2 w-72 h-10 text-black" type="text" placeholder="Search">
        </div>
      </div>
      <div class="min-h-[100px] mx-8">
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
    <div v-else class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-12">
      <ProjectCard
        v-for="(project) in allProjects"
        :key="project.title"
        :project="project"
      />
      <Card
        v-if="admin"
        link="/Projects/AddProject"
      >
        <h1 class="text-center">
          Add Project
        </h1>
        <p class="text-8xl my-auto mx-auto text-center">
          +
        </p>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import MultiSelect from 'vue-multiselect'

import ProjectCard from '~/components/Projects/ProjectCard.vue'
import Card from '~/components/Card.vue'

export default Vue.extend({
  name: 'ProjectsPage',

  components: {
    MultiSelect,
    ProjectCard,
    Card
  },

  data () {
    return {
      allProjects: [] as Project[],
      filterValue: [] as string[],
      filterOptions: [] as string[],
      searchQuery: '',
      loaded: false
    }
  },

  async fetch () {
    const projects = await this.$axios.$get('/api/projects/') as Project[]

    if (projects) {
      this.allProjects = projects
      this.loaded = true
    }

    const technologies = await this.$axios.$get('/api/tech') as Tech[]

    if (technologies) {
      this.filterOptions = technologies.map(tech => tech.text)
    }
  },

  computed: {
    ...mapState(['admin'])
  },

  watch: {
    async filterValue () {
      await this.fetchFilteredProjects()
    },

    async searchQuery () {
      await this.fetchFilteredProjects()
    }
  },

  // Needed to remove `ERROR  Error in fetch(): connect ECONNREFUSED 127.0.0.1:80`
  // Can't fetch on server because we are fetching TO the server
  fetchOnServer: false,

  mounted () {
    this.$fetch()
  },

  methods: {
    async fetchFilteredProjects () {
      const projects = await this.$axios.$get('/api/projects/', {
        params: {
          technologies: this.filterValue,
          searchQuery: this.searchQuery
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

.search-bar {
  font-weight: 400;
  font-size: 14px;
}

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
