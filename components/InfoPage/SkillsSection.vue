<template>
  <div class="w-full flex flex-col 2xl:flex-row">
    <h2 class="skills-title self-center">
      SKILLS
    </h2>
    <div class="bg-grey text-black w-full p-8">
      <ul>
        <SkillWidget
          v-for="(skill, index) in skills"
          :key="index"
          :name="skill.name"
          :value="skill.value"
          :image="skill.image"
        />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SkillsSection',

  data () {
    return {
      skills: [
        { name: 'Vue', value: 95, image: require('~/assets/images/Logos/Vue.png') },
        { name: 'React', value: 95, image: require('~/assets/images/Logos/React.png') },
        { name: 'Python', value: 90, image: require('~/assets/images/Logos/Python.png') },
        { name: 'Ruby', value: 88, image: require('~/assets/images/Logos/Ruby.png') },
        { name: 'CSharp', value: 85, image: require('~/assets/images/Logos/CSharp.png') }
      ]
    }
  }
})
</script>

<style scoped>

@media screen and (min-width: 1536px) {
  .skills-title {
    transform: rotate(-90deg);
  }
}
</style>
