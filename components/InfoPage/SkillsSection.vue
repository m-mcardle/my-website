<template>
  <div class="w-[40%] flex flex-row">
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
import SkillWidget from './SkillWidget.vue'

export default Vue.extend({
  name: 'SkillsSection',

  components: {
    SkillWidget
  },

  data () {
    return {
      skills: [
        { name: 'React', value: 95, image: require('~/assets/images/React.png') },
        { name: 'Vue', value: 90, image: require('~/assets/images/Vue.png') },
        { name: 'Python', value: 88, image: require('~/assets/images/Python.png') },
        { name: 'CSharp', value: 85, image: require('~/assets/images/CSharp.png') },
        { name: 'Ruby', value: 80, image: require('~/assets/images/Ruby.png') }
      ]
    }
  }
})
</script>

<style scoped>
.skills-title {
  transform: rotate(-90deg);
}
</style>
