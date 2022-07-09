<template>
  <div class="skills-interests w-full flex flex-row justify-around">
    <SkillsSection class="fade-in" />
    <InterestsSection class="fade-in" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import InterestsSection from './InterestsSection.vue'
import SkillsSection from './SkillsSection.vue'

export default Vue.extend({
  name: 'InfoSection',

  components: {
    InterestsSection,
    SkillsSection
  }
})
</script>
