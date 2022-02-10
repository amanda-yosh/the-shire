import { getListings } from '../../api/glue-api'

const setHref = (state, {id, href}) => { state.href.set(id, href) }

const setListings = async (state, searchTerm) => { state.listings = await getListings(searchTerm) }

export default {
  setHref,
  setListings,
}