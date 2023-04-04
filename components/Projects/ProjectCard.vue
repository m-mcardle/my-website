<template>
  <Card :link="`/Projects/${project.link}`">
    <p class="self-end">
      {{ project.year }}
    </p>
    <h3 class="text-center w-full mb-4">
      {{ project.title }}
    </h3>
    <div class="w-full h-[250px]">
      <LazyDbImage class="max-h-[250px] w-[350px] mx-auto" :alt="project.image.alt" :src="project.image.path" />
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
        <LazyDbImage class="h-8 w-auto bg-white" :alt="item.image.alt" :src="item.image.path" />
        <p
          class="font-bold"
        >
          {{ item.text }}
        </p>
      </div>
    </div>
  </Card>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProjectCard',

  props: {
    project: {
      type: Object as () => Project,
      required: true
    }
  }
})
</script>
