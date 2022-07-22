<script lang="ts">
import Vue, { VueConstructor } from 'vue'

export default (Vue as VueConstructor<Vue>).extend({
  data () {
    return {
      user: null as firebase.default.User | null,
      isAdmin: false,
      userError: ''
    }
  },

  methods: {
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
