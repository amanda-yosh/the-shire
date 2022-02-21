const getHrefFromId = (state) => (id) => state.href.get(id)

const getListings = (state) => state.listings ?? []

export default {
  getHrefFromId,
  getListings,
}
