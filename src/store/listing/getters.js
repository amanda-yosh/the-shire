const getHrefFromId = (state) => (id) => {
  return state.href.get(id)
}

export default {
  getHrefFromId
}