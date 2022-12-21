export const state = () => ({
  admin: false,
  user: {}
})

export const getters = {
  getIsAdmin (state) {
    return state.admin
  },

  getUser (state) {
    return state.user
  }
}

export const mutations = {
  clearUser (state) {
    state.admin = false
    state.user = {}
  },

  setAdmin (state, isAdmin) {
    state.admin = isAdmin
  },

  ON_AUTH_STATE_CHANGED_MUTATION (state, { authUser }) {
    if (!authUser) {
      state.admin = false
      state.user = {}
    } else {
      const { uid, email, emailVerified } = authUser
      state.user = { uid, email, emailVerified }
    }
  }
}

export const actions = {
  async checkIsUserAdmin ({ commit, state }) {
    if (!state.user.uid) {
      commit('setAdmin', false)
      return false
    }

    // make request
    const response = await fetch(`/api/validate-user/${state.user.uid}`)
    const isAdmin = await response.json()
    commit('setAdmin', isAdmin)
    return isAdmin
  },

  onAuthStateChangedAction ({ dispatch }) {
    dispatch('checkIsUserAdmin')
  }
}
