<template>
  <div class="flex flex-col p-8">
    <h2>My Goals / Outcomes</h2>
    <div
      v-for="(goal) in goals"
      :key="goal.title"
      class="section flex flex-col p-8"
    >
      <h3>
        {{ goal.title }}
      </h3>
      <h4>
        {{ goal.description }}
      </h4>
      <p>
        {{ goal.body }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GoalsSection',

  props: {
    goals: {
      type: Array as () => Array<Goal>,
      required: true
    }
  }
})
</script>
