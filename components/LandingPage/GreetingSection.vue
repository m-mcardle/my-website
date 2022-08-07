<template>
  <div class="intro flex flex-col p-16 ml-0 mr-auto">
    <div class="greeting flex flex-row py-8">
      <h2>
        Hi there!&nbsp;
      </h2>
      <div class="wave">
        <h2>👋</h2>
      </div>
    </div>
    <h3>My name is</h3>
    <h1>Matt McArdle</h1>
    <hr>
    <p>Software Engineer / Student</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GreetingSection'
})
</script>

<style>
@keyframes waving {
  0% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(20deg);
  }
  100% {
    transform: rotate(-20deg);
  }
}

.wave {
  animation: waving 1.5s infinite linear;
}
</style>
