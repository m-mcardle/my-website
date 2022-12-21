<template>
  <div class="navbar text-sm md:text-base  flex flex-row fixed top-0 left-0 w-screen justify-end space-x-8 z-50 bg-white text-black pr-8 border-b-2 border-blue rounded-md">
    <NuxtLink to="/" class="link home-link">
      Home
    </NuxtLink>
    <NuxtLink to="/Job/Magnet" class="link magnet-link">
      Magnet Report
    </NuxtLink>
    <NuxtLink to="/Job/Vidyard" class="link vidyard-link">
      Vidyard Report
    </NuxtLink>
    <NuxtLink to="/Projects" class="link projects-link">
      Projects
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavHeader'

})
</script>

<style scoped>
.link:hover {
  color: #00B9E1;
}

a.nuxt-link-exact-active {
  color: #00B9E1;
  text-decoration-line: underline;
}

</style>
