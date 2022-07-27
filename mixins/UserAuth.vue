<script lang="ts">
import Vue, { VueConstructor } from 'vue'

import { GoogleAuthProvider } from '@firebase/auth'

export default (Vue as VueConstructor<Vue>).extend({
  data () {
    return {
      provider: new GoogleAuthProvider(),
      isAdmin: false,
      userError: '',
      user: this.$fire.auth.currentUser as firebase.default.User | null
    }
  },

  watch: {
    async user () {
      await this.isUserAdmin()
    }
  },

  methods: {
    async login (email: string, password: string): Promise<void> {
      try {
        await this.$fire.auth.signInWithEmailAndPassword(email, password)
        this.userError = ''
      } catch (ex) {
        this.userError = ex
      }

      this.user = this.$fire.auth.currentUser
    },

    async googleLogin (): Promise<void> {
      try {
        await this.$fire.auth.signInWithPopup(this.provider)
        this.userError = ''
      } catch (ex) {
        this.userError = ex
      }

      this.user = this.$fire.auth.currentUser
    },

    async signOut (): Promise<void> {
      try {
        await this.$fire.auth.signOut()
        this.userError = ''
      } catch (e) {
        this.userError = e
      }

      this.user = this.$fire.auth.currentUser
    },

    async isUserAdmin (): Promise<void> {
      if (!this.user) {
        this.isAdmin = false
        return
      }

      try {
        this.isAdmin = await this.$axios.$get(`/api/validate-user/${this.user.uid}`)
      } catch (e) {
        this.userError = e
      }
    }
  }
})
</script>
