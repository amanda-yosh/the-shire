import { get } from '../helpers/request-helper'
import { BASE_URL } from '../settings/constants'

const resultPage = '/listings?categoryPage=RESULT'
const listingPage = '/page'

function buildQuerySearchParams() {
  const params = new URLSearchParams({
    unitSubTypes: 'VILLAGE_HOUSE',
    unitTypes: 'HOME',
    usageTypes: 'RESIDENTIAL',
    unitTypesV3: 'VILLAGE_HOUSE',
    text: 'Casa+de+Vila'
  })

  return '&' + params.toString()
}

export async function getListings(searchTerm) {
  try {
    const response = await get(`${BASE_URL}${resultPage}${buildQuerySearchParams()}${searchTerm}`)
    return response.data.search.result.listings
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getListing(href) {
  try {
    const response = await get(`${BASE_URL}${listingPage}${href}`)
    return response.data
  } catch (error) {
    console.log(error)
    return {}
  }
}
