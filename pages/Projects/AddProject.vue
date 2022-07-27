<template>
  <div class="body bg-black text-white">
    <NavHeader />
    <div class="py-8 h-screen w-full">
      <h1 class="text-center mb-8">
        Add Project
      </h1>
      <div class="flex flex-col mx-auto items-center">
        <label for="title">Title</label>
        <input id="title" v-model="title" placeholder="Title">
        <label for="github">GitHub Link</label>
        <input id="github" v-model="github" placeholder="GitHub Link">
        <label for="content">Description</label>
        <input id="content" v-model="content" placeholder="Description">
        <label for="image">Image Path</label>
        <input id="image" v-model="image" placeholder="Image Path">
        <label for="year">Year</label>
        <input id="year" v-model="year" placeholder="Year">
        <button class="bg-blue hover:bg-blue/30" :disabled="submitDisabled" @click="submit">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavHeader from '~/components/NavHeader.vue'

export default Vue.extend({
  name: 'AddProjectPage',

  components: {
    NavHeader
  },

  data (): Project {
    return {
      title: '',
      github: '',
      content: '',
      image: '',
      year: ''
    }
  },

  computed: {
    validImage (): boolean {
      if (!this.image) { return true }

      try {
        require(`~/assets/images/${this.image}`)
        return true
      } catch (error) {
        return false
      }
    },

    submitDisabled (): boolean {
      return !this.validImage || !this.title || !this.github || !this.content
    }
  },

  methods: {
    async submit () {
      const response = await this.$axios.$post('/api/project', {
        title: this.title,
        github: this.github,
        content: this.content,
        image: this.image || undefined,
        year: this.year
      })

      if (response) {
        this.$router.push('../Projects')
      }
    }
  }
})
</script>

<style scoped>
input {
  color: black;
  padding: 4px 8px;
  margin: 8px;
  width: 30%;
  border-radius: 4px;
}

label {
  font-weight: 800;
}

button {
  padding: 8px;
  border-radius: 4px;
  margin: 16px;
  width: 15%;
}

button:disabled {
  background-color: gray;
}
</style>
