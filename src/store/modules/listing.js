const state = {
  href: new Map(), // initial state
}

const getters = {
  getHrefFromId: (state) => (id) => {
    return state.href.get(id)
  },
}

const mutations = {
  setHref(state, {id, href}) {
    state.href.set(id, href)
  }
}

export default {
  state,
  getters,
  mutations,
}