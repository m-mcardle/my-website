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

  created () {
    this.isUserAdmin()
  },

  methods: {
    async login (email: string, password: string): Promise<void> {
      const loadingToast = this.$toast.show('Logging in..')
      try {
        await this.$fire.auth.signInWithEmailAndPassword(email, password)
        this.$toast.success('Sucessfully Logged In!')
        this.userError = ''
      } catch (ex) {
        this.userError = ex
        this.$toast.error('Error while authenticating')
      } finally {
        loadingToast.goAway(0)
      }

      this.user = this.$fire.auth.currentUser
    },

    async googleLogin (): Promise<void> {
      const loadingToast = this.$toast.show('Logging in with Google...')
      try {
        await this.$fire.auth.signInWithPopup(this.provider)
        this.$toast.success('Sucessfully Logged In!')
        this.userError = ''
      } catch (ex) {
        this.userError = ex
        this.$toast.error('Error while authenticating')
      } finally {
        loadingToast.goAway(0)
      }

      this.user = this.$fire.auth.currentUser
    },

    async signOut (): Promise<void> {
      const loadingToast = this.$toast.show('Logging out...')
      try {
        await this.$fire.auth.signOut()
        this.$toast.success('Sucessfully Logged Out!')
        this.userError = ''
      } catch (e) {
        this.userError = e
        this.$toast.error('Error while signing out')
      } finally {
        loadingToast.goAway(0)
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
