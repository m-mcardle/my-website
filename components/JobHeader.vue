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
