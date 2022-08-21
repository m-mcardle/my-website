<template>
  <div class="header flex flex-row h-[175px] md:h-[350px] p-8">
    <DbImage class="w-32 h-fit md:w-72 bg-white my-auto" :alt="title" :src="imageUrl" />
    <div class="titles flex flex-col pl-12">
      <h1>
        {{ title }}
      </h1>
      <h2>
        {{ jobTitle }}
      </h2>
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

<style scoped>
h1 {
  font-size: 20px;
  font-weight: 700;
  text-shadow: 2px 1px #00B9E1;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 48px;
  }
}

@media screen and (min-width: 1000px) {
  h1 {
    font-size: 64px;
  }
}

h2 {
  font-size: 14px;
}

@media screen and (min-width: 800px) {
  h2 {
    font-size: 24px;
  }
}

@media screen and (min-width: 1000px) {
  h2 {
    font-size: 32px;
  }
}

h3 {
  font-size: 12px;
}

@media screen and (min-width: 800px) {
  h3 {
    font-size: 18px;
  }
}

@media screen and (min-width: 1000px) {
  h3 {
    font-size: 24px;
  }
}
</style>
