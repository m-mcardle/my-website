<template>
  <div class="navbar flex flex-row fixed top-0 left-0 w-screen justify-end space-x-8 bg-white text-black pr-8">
    <NuxtLink to="/" class="link home-link">
      Home
    </NuxtLink>
    <NuxtLink to="/Magnet" class="link magnet-link">
      Magnet Co-op Report
    </NuxtLink>
    <NuxtLink to="/Vidyard" class="link vidyard-link">
      Vidyard Co-op Report
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavHeader'

})
</script>

<style>
.link:hover {
  color: #00B9E1;
}

</style>
