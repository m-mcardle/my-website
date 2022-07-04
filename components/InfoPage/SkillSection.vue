<template>
  <li>
    <p class="skill hidden lg:block lg:w-[30%]">
      {{ name }}
    </p>
    <img :alt="name" :src="image" class="h-4 w-4 my-auto mx-1">
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
    },
    image: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
.skills-title {
  transform: rotate(-90deg);
}

.skill {
  font-weight: 800;
}
</style>
