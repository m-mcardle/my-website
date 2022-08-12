<template>
  <div class="flex flex-col p-8 mt-24">
    <h2>My Goals / Outcomes</h2>
    <p>
      In this section I will give a summary of the goals I set out to accomplish over the term and reflect on their outcomes. There are five seperate success levels I will be using to describe my success in achieving each goal. These levels are Failure, Difficulty, Success, and Outstanding.
    </p>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-16 mt-16">
      <div
        v-for="(goal) in goals"
        :key="goal.title"
        class="section flex flex-col"
      >
        <div class="flex flex-row w-full items-end">
          <h3>
            {{ goal.title }}
          </h3>
          <h4 class="mx-2">
            {{ goal.description }}
          </h4>
          <div
            class="ml-auto mr-0 border rounded-md p-1"
            :style="{ 'background': getGoalColour(goal.outcome) }"
          >
            <p>
              {{ goal.outcome }}
            </p>
          </div>
        </div>
        <hr>
        <div class="flex flex-row">
          <p class="w-[70%] mr-4">
            {{ goal.body }}
          </p>
          <div class="h-[200px] ml-auto mr-0">
            <img v-if="goal.image" class="h-full w-fit" :src="require(`~/assets/images/${goal.image.path || 'NotFound.png'}`)" :alt="goal.image.alt">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { goalRatings } from '~/src/goals'

export default Vue.extend({
  name: 'GoalsSection',

  props: {
    goals: {
      type: Array as () => Array<Goal>,
      required: true
    }
  },

  methods: {
    getGoalColour (outcome: string) {
      switch (outcome) {
        case goalRatings.Outstanding:
          return '#006319'
        case goalRatings.Success:
          return '#00cc33'
        case goalRatings.Satisfactory:
          return '#fcba03'
        case goalRatings.Difficulty:
          return '#de7300'
        case goalRatings.Failure:
          return '#de0000'
        default:
          return '#00cc33'
      }
    }
  }
})
</script>
