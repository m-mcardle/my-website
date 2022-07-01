<template>
  <div class="main bg-black text-white h-screen">
    <div class="main w-full flex flex-row">
      <div class="intro flex flex-col p-16 ml-0 mr-auto">
        <h2 class="py-8">
          Hi there! 👋
        </h2>
        <h3>My name is</h3>
        <h1>Matt McArdle</h1>
        <hr>
        <p>Software Engineer / Student</p>
      </div>
      <div class="image p-16 ml-auto mr-0">
        <img class="w-64 h-64" alt="Matt McArdle" src="~/assets/images/MatthewMcArdleIcon.jpg">
      </div>
    </div>
    <div class="bottom-0 absolute p-16 w-full">
      <h3>Come read about my <b>skills</b>, <b>experiences</b>, and <b>interests</b>!</h3>
      <hr>
      <div class="logo-images flex flex-row justify-between">
        <img class="w-32 h-32" alt="University of Guelph Logo" src="~/assets/images/UoG-Logo.jpeg">
        <img class="w-32 h-32" alt="Magnet Forensics Logo" src="~/assets/images/Magnet-Logo.png">
        <img class="w-32 h-32" alt="Vidyard Logo" src="~/assets/images/Vidyard-Logo.png">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage'
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

  img {
    background-color: white;
  }
</style>
