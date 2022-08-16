<template>
  <div class="skills-interests w-full grid grid-cols-1 2xl:grid-cols-2 px-16 lg:px-64 gap-16 pb-16">
    <SkillsSection />
    <InterestsSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InfoSection'
})
</script>
