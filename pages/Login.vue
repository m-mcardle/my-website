<template>
  <div class="body bg-black text-white">
    <div id="signin" class="sign-in-page flex h-screen w-full">
      <div class="flex flex-col w-full h-full">
        <div class="flex flex-row w-full h-full p-64 bg-black items-center justify-evenly">
          <div class="flex flex-col w-[50%]">
            <label for="email">Email</label>
            <input id="email" v-model="email" type="email" name="email">
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" name="password">
            <div class="flex flex-row mt-8 justify-evenly">
              <button :disabled="!!user" class="bg-blue mx-auto py-2 px-16 h-16 w-64 rounded-md border-2 hover:bg-gray-200" @click="signIn">
                Sign In
              </button>
              <p>OR</p>
              <button :disabled="!!user" class="bg-blue mx-auto py-2 px-16 h-16 w-64 rounded-md border-2 hover:bg-gray-200" @click="googleSignIn">
                Sign in with Google
              </button>
            </div>
          </div>
          <button :disabled="!user" class="bg-blue mx-auto py-4 px-16 h-16 rounded-md border-2 hover:bg-gray-200" @click="logOut">
            Log Out
          </button>
          <p>Current user: {{ user?.email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { GoogleAuthProvider } from '@firebase/auth'
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',

  data () {
    return {
      provider: new GoogleAuthProvider(),
      email: '',
      password: '',
      user: null as null | firebase.default.User
    }
  },

  mounted () {
    this.user = this.$fire.auth.currentUser
  },

  methods: {
    async googleSignIn () {
      try {
        const result = await this.$fire.auth.signInWithPopup(this.provider)
        this.user = this.$fire.auth.currentUser
        console.log(result)
      } catch (e) {
        console.log(e)
      }
    },
    async signIn () {
      try {
        const result = await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
        this.user = this.$fire.auth.currentUser
        console.log(result)
      } catch (e) {
        console.log(e)
      }
    },
    async logOut () {
      try {
        await this.$fire.auth.signOut()
        this.user = this.$fire.auth.currentUser
      } catch (e) {
        console.log(e)
      }
    }
  }
})
</script>

<style scoped>
label {
  padding: 4px;
}

input {
  padding: 4px;
  height: 30px;
  width: 100%;
  color: black;
  border-radius: 8px;
}

:disabled {
  background-color: gray;
}
</style>
