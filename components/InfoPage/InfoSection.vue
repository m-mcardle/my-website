<template>
  <div class="skills-interests w-full flex flex-row justify-around">
    <div class="w-[40%] flex flex-row">
      <h2 class="skills-title self-center">
        SKILLS
      </h2>
      <div class="bg-grey text-black w-full p-8">
        <ul>
          <li>Vue</li>
          <li>React</li>
          <li>C#</li>
          <li>Ruby</li>
        </ul>
      </div>
    </div>
    <div class="w-[30%] flex flex-col">
      <h2 class="text-center">
        INTERESTS
      </h2>
      <div class="bg-grey text-black w-full p-8 flex-row">
        <p>Automation, Cloud Computing, Testing, Learning</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'InfoSection'

})
</script>

<style scoped>
.skills-title {
  transform: rotate(-90deg);
}
</style>
