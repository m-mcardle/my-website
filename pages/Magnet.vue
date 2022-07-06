<template>
  <div class="main bg-black text-white h-screen p-8">
    <div class="header flex flex-row p-8">
      <img class="w-72 h-72 p-4" alt="Magnet Forensics" :src="require('~/assets/images/Magnet-Logo.png')">
      <div class="titles flex flex-col p-4">
        <h1>Magnet Forensics</h1>
        <h2>Software Developer (Co-op)</h2>
        <h3 class="mb-0 mt-auto">
          May 2021 - December 2021
        </h3>
      </div>
    </div>
    <hr>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MagnetPage'

})
</script>

<style>
  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 16px;
  }

  hr {
    border-color: #00B9E1;
    margin: 8px 0;
  }
</style>
