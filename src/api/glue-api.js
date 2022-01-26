import { get } from '../helpers/request-helper'
import { BASE_URL } from '../settings/constants'

const resultPage = '/listings?categoryPage=RESULT'
const listingPage = '/page'
const villageHouse = '&unitSubTypes=VILLAGE_HOUSE&unitTypes=HOME&usageTypes=RESIDENTIAL&unitTypesV3=VILLAGE_HOUSE'

export async function getListings(searchTerm) {
  const searchTermStringified = new URLSearchParams(searchTerm)

  try {
    const response = await get(`${BASE_URL}${resultPage}${villageHouse}${searchTermStringified}`)
    return response.data.search.result.listings
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getListing(href) {
  try {
    const response = await get(`${BASE_URL}${listingPage}${href}`)
    return response
  } catch (error) {
    console.log(error)
    return {}
  }
}
