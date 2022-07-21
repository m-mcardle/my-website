<template>
  <div class="body bg-black text-white">
    <NavHeader />
    <div id="signin" class="sign-in-page flex h-screen w-full">
      <div class="flex flex-col w-full h-full">
        <div class="flex flex-row w-full h-full p-64 bg-black items-center justify-evenly">
          <div class="flex flex-col w-[50%]">
            <label for="email">Email</label>
            <input id="email" v-model="email" type="email" name="email">
            <label for="password">Password</label>
            <input id="password" v-model="password" type="password" name="password">
            <div class="flex flex-row mt-8 justify-evenly">
              <button :disabled="!!user" class="bg-blue mx-auto py-2 px-16 h-16 w-64 rounded-xl border-2 hover:bg-blue/30" @click="signIn">
                Sign In
              </button>
              <p>OR</p>
              <button :disabled="!!user" class="bg-blue mx-auto py-2 px-16 h-16 w-64 rounded-xl border-2 hover:bg-blue/30" @click="googleSignIn">
                Sign in with Google
              </button>
            </div>
          </div>
          <button :disabled="!user" class="bg-blue mx-auto py-4 px-16 h-16 rounded-xl border-2 hover:bg-blue/30" @click="logOut">
            Log Out
          </button>
          <p>Current user: {{ user?.email }}</p>
        </div>
        <p v-if="error">
          Error: {{ error }}
        </p>
        <p>
          {{ isAdmin }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { GoogleAuthProvider } from '@firebase/auth'

import NavHeader from '../components/NavHeader.vue'

export default Vue.extend({
  name: 'LoginPage',

  components: {
    NavHeader
  },

  data () {
    return {
      provider: new GoogleAuthProvider(),
      email: '',
      password: '',
      user: null as null | firebase.default.User,
      error: '',
      isAdmin: false
    }
  },

  watch: {
    user () {
      this.isUserAdmin()
    }
  },

  mounted () {
    this.user = this.$fire.auth.currentUser
  },

  methods: {
    async googleSignIn () {
      try {
        await this.$fire.auth.signInWithPopup(this.provider)
        this.user = this.$fire.auth.currentUser
        this.error = ''
      } catch (e) {
        this.error = e
      }
    },
    async signIn () {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
        this.user = this.$fire.auth.currentUser
        this.error = ''
      } catch (e) {
        this.error = e
      }
    },
    async logOut () {
      try {
        await this.$fire.auth.signOut()
        this.user = this.$fire.auth.currentUser
        this.error = ''
      } catch (e) {
        this.error = e
      }
    },
    async isUserAdmin () {
      if (!this.user) { return false }
      try {
        this.isAdmin = await this.$axios.$get(`/api/validate-user/${this.user.uid}`)
      } catch (e) {
        this.error = e
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
