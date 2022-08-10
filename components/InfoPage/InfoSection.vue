<template>
  <div class="skills-interests w-full grid grid-cols-1 2xl:grid-cols-2 px-64 gap-16 pb-16">
    <SkillsSection />
    <InterestsSection />
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
