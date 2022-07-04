<template>
  <div class="skills-interests w-full flex flex-row justify-around">
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
            :image="require(`~/assets/images/${skill.image}`)"
          />
        </ul>
      </div>
    </div>
    <InterestsSection />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SkillWidget from './SkillWidget.vue'
import InterestsSection from './InterestsSection.vue'

export default Vue.extend({
  name: 'InfoSection',

  components: {
    SkillWidget,
    InterestsSection
  },

  data () {
    return {
      skills: [
        { name: 'React', value: 95, image: 'React.png' },
        { name: 'Vue', value: 90, image: 'Vue.png' },
        { name: 'Python', value: 88, image: 'Python.png' },
        { name: 'CSharp', value: 85, image: 'CSharp.png' },
        { name: 'Ruby', value: 80, image: 'Ruby.png' }
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
