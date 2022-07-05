<template>
  <div class="w-[30%] flex flex-col">
    <h2 class="text-center">
      INTERESTS
    </h2>
    <div class="bg-grey text-black w-full p-8 flex flex-row flex-wrap justify-around">
      <div
        v-for="(interest) in interests"
        :key="interest.name"
        class="flex flex-col"
      >
        <img class="w-8 h-8 mx-auto" :alt="interest.name" :src="require(`~/assets/images/${interest.image}`)">
        <p class="text-xs">
          {{ interest.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InterestsSection',

  data () {
    return {
      interests: [
        { name: 'Automation', image: 'Automation.png' },
        { name: 'Cloud Computing', image: 'Cloud.png' },
        { name: 'Testing', image: 'Testing.png' },
        { name: 'Learning', image: 'University.png' }
      ]
    }
  }
})
</script>
