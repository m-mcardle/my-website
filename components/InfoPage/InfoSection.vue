<template>
  <div class="skills-interests w-full grid grid-cols-1 2xl:grid-cols-2 px-16 lg:px-64 gap-16 pb-16">
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
