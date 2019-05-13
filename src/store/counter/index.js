export const state = () => ({
  counter: 0
})

export const getters = {
  sum(state) {
    return state.counter
  }
}

export const mutations = {
  INCREMENT(state) {
    state.counter++
  }
}

export const actions = {
  increment({ commit }) {
    commit('INCREMENT')
  }
}
