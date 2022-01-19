import axios from 'axios'

const ROOT_URL = 'https://glue-api.zapimoveis.com.br/v2/listings?categoryPage=RESULT'
const villageHouse = '&unitSubTypes=VILLAGE_HOUSE&unitTypes=HOME&usageTypes=RESIDENTIAL&unitTypesV3=VILLAGE_HOUSE'

export async function getAdvertisers(searchTerm) {
  const searchTermStringified = new URLSearchParams(searchTerm)
  const response = await axios
    .get(`${ROOT_URL}${villageHouse}${searchTermStringified}`, {
      headers: {
        'x-domain': 'www.zapimoveis.com.br',
      },
    }) // return a promise
    return response.data.search.result.listings
}
