<template>
  <div class="flex flex-col p-8">
    <h2>My Goals / Outcomes</h2>
    <p>
      In this section I will give a summary of the goals I set out to accomplish over the term and reflect on their outcomes. There are five seperate success levels I will be using to describe my success in achieving each goal. These levels are Failure, Difficulty, Success, and Outstanding.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
      <div
        v-for="(goal) in goals"
        :key="goal.title"
        class="section flex flex-col"
      >
        <div class="flex flex-row items-end space-x-2">
          <h3>
            {{ goal.title }}
          </h3>
          <h4>
            {{ goal.description }}
          </h4>
        </div>
        <hr>
        <p>
          {{ goal.body }}
        </p>
        <p :style="{ 'background': getGoalColour(goal.outcome) }">
          {{ goal.outcome }}
        </p>
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
          return 'darkgreen'
        case goalRatings.Success:
          return 'green'
        case goalRatings.Satisfactory:
          return 'yellow'
        case goalRatings.Difficulty:
          return 'orange'
        case goalRatings.Failure:
          return 'red'
        default:
          return 'green'
      }
    }
  }
})
</script>
