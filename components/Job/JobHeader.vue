<template>
  <div class="header flex flex-row p-8">
    <img class="w-72 bg-white" :alt="title" :src="imageUrl">
    <div class="titles flex flex-col pl-12">
      <h1>{{ title }}</h1>
      <h2>{{ jobTitle }}</h2>
      <h3 class="mb-0 mt-auto">
        {{ dateString }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'JobHeader',

  props: {
    imageUrl: {
      type: String,
      required: true
    },

    title: {
      type: String,
      required: true
    },

    jobTitle: {
      type: String,
      required: true
    },

    dateString: {
      type: String,
      required: true
    }
  }
})
</script>
