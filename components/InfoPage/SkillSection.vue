<template>
  <li>
    <p class="w-[40%]">
      {{ name }}
    </p>
    <SkillbarWidget :percentage="value" />
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
import SkillbarWidget from './SkillbarWidget.vue'

export default Vue.extend({
  name: 'SkillSection',

  components: {
    SkillbarWidget
  },

  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
})
</script>

<style scoped>
.skills-title {
  transform: rotate(-90deg);
}
</style>
