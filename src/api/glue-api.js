import { get } from '../helpers/request-helper'
import { BASE_URL } from '../settings/constants'

const villageHouse = '&unitSubTypes=VILLAGE_HOUSE&unitTypes=HOME&usageTypes=RESIDENTIAL&unitTypesV3=VILLAGE_HOUSE'

export async function getListings(searchTerm) {
  const searchTermStringified = new URLSearchParams(searchTerm)
  const response = await get(`${BASE_URL}${villageHouse}${searchTermStringified}`)
  return response.data.search.result.listings
}
