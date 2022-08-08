<template>
  <div class="p-16 ml-auto mr-0">
    <img class="image" alt="Matt McArdle" src="~/assets/images/MatthewMcArdleIcon.jpg">
    <div class="contact-info flex flex-row my-5 justify-between">
      <a href="https://www.linkedin.com/in/matthew-j-mcardle/">
        <FontAwesomeIcon class="icon" icon="fa-brands fa-linkedin" />
      </a>
      <a href="https://www.github.com/m-mcardle">
        <FontAwesomeIcon class="icon" icon="fa-brands fa-github" />
      </a>
      <a href="mailto:matthew.j.mcardle@gmail.com">
        <FontAwesomeIcon class="icon" icon="fa-solid fa-envelope" />
      </a>
      <a href="tel:519-500-3440">
        <FontAwesomeIcon class="icon" icon="fa-solid fa-phone fa-9x" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactSection'
})
</script>

<style scoped>
.icon {
  width: 1rem;
  height: 1rem;
}

.image {
  height: 8rem;
  width: 8rem;
}

@media screen and (min-width: 800px) {
  .icon {
    width: 2rem;
    height: 2rem;
  }

  .image {
    height: 16rem;
    width: 16rem;
  }
}
</style>
