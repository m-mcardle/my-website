<script lang="ts">
import Vue, { VueConstructor } from 'vue'

import { GoogleAuthProvider } from '@firebase/auth'

export default (Vue as VueConstructor<Vue>).extend({
  data () {
    return {
      provider: new GoogleAuthProvider()
    }
  },

  methods: {
    async login (email: string, password: string): Promise<firebase.default.User | null> {
      let user = null
      const loadingToast = this.$toast.show('Logging in..')
      try {
        user = (await this.$fire.auth.signInWithEmailAndPassword(email, password)).user
        this.$toast.success('Sucessfully Logged In!')
      } catch (ex) {
        this.$toast.error('Error while authenticating')
      } finally {
        loadingToast.goAway(0)
      }

      return user
    },

    async googleLogin (): Promise<firebase.default.User | null> {
      let user = null
      const loadingToast = this.$toast.show('Logging in with Google...')
      try {
        user = (await this.$fire.auth.signInWithPopup(this.provider)).user
        this.$toast.success('Sucessfully Logged In!')
      } catch (ex) {
        this.$toast.error('Error while authenticating')
      } finally {
        loadingToast.goAway(0)
      }

      return user
    },

    async signOut (): Promise<boolean> {
      let success = false
      const loadingToast = this.$toast.show('Logging out...')
      try {
        await this.$fire.auth.signOut()
        this.$toast.success('Sucessfully Logged Out!')
        success = true
      } catch (e) {
        this.$toast.error('Error while signing out')
      } finally {
        loadingToast.goAway(0)
      }

      return success
    }
  }
})
</script>
