const getHrefFromId = (state) => (id) => { return state.href.get(id) }

const getListings = (state) => { return state.listings ?? [] }

export default {
  getHrefFromId,
  getListings,
}
