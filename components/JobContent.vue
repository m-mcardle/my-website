<template>
  <div>
    <div
      v-for="(section) in content"
      :key="section.title"
      class="section flex flex-col p-8"
    >
      <hr class="w-full">
      <div class="section-body flex flex-col md:flex-row space-y-4">
        <div class="content flex flex-col md:w-[40%]">
          <h3 class="title pt-8">
            {{ section.title }}
          </h3>
          <p class="body pt-4">
            {{ section.body }}
          </p>
        </div>
        <div class="images flex flex-col md:w-[60%] justify-center items-center md:items-end">
          <div v-if="section.images" class="flex flex-row justify-between space-x-2">
            <img v-for="(image) in section.images" :key="image" class="h-32 bg-white" :src="image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'JobContent',

  props: {
    content: {
      type: Array as () => Array<Section>,
      required: true
    }
  }

})
</script>
