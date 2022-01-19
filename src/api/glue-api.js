import { get } from '../helpers/request-helper'

const ROOT_URL = 'https://glue-api.zapimoveis.com.br/v2/listings?categoryPage=RESULT'
const villageHouse = '&unitSubTypes=VILLAGE_HOUSE&unitTypes=HOME&usageTypes=RESIDENTIAL&unitTypesV3=VILLAGE_HOUSE'

export async function getListings(searchTerm) {
  const searchTermStringified = new URLSearchParams(searchTerm)
  const response = await get(`${ROOT_URL}${villageHouse}${searchTermStringified}`)
  return response.data.search.result.listings
}
