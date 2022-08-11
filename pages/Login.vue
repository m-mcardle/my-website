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
              <button :disabled="!!user?.uid" class="bg-blue mx-auto py-2 px-16 h-16 w-64 rounded-xl border-2 hover:bg-blue/30" @click="handleSignInClick">
                Sign In
              </button>
              <p>OR</p>
              <button :disabled="!!user?.uid" class="bg-blue mx-auto py-2 px-16 h-16 w-64 rounded-xl border-2 hover:bg-blue/30" @click="handleGoogleClick">
                Sign in with Google
              </button>
            </div>
          </div>
          <button :disabled="!user?.uid" class="bg-blue mx-auto py-4 px-16 h-16 rounded-xl border-2 hover:bg-blue/30" @click="handleLogOutClick">
            Log Out
          </button>
          <p>Current user: {{ user?.email }}</p>
        </div>
        <p v-if="error">
          Error: {{ error }}
        </p>
        <p>
          {{ admin }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'
import { mapState } from 'vuex'

import NavHeader from '../components/NavHeader.vue'

import UserAuth from '../mixins/UserAuth.vue'

export default (Vue as VueConstructor<Vue & InstanceType<typeof UserAuth>>).extend({
  name: 'LoginPage',

  components: {
    NavHeader
  },

  mixins: [
    UserAuth
  ],

  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },

  computed: {
    ...mapState(['user', 'admin'])
  },

  methods: {
    async handleGoogleClick () {
      try {
        await this.googleLogin()
        this.error = ''
      } catch (e) {
        this.error = e
      }
    },
    async handleSignInClick () {
      try {
        await this.login(this.email, this.password)
        this.error = ''
      } catch (e) {
        this.error = e
      }
    },
    async handleLogOutClick () {
      try {
        await this.signOut()
        this.error = ''
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
