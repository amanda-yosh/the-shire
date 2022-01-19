import axios from 'axios'
// import qs from 'qs'

const ROOT_URL = 'https://glue-api.zapimoveis.com.br/v2/listings?categoryPage=RESULT'
const villageHouse = '&unitSubTypes=VILLAGE_HOUSE&unitTypes=HOME&usageTypes=RESIDENTIAL&unitTypesV3=VILLAGE_HOUSE'
// &business=SALE
// &listingType=USED
// &portal=ZAP
// &text=Casa+de+Vila
// &addressCountry=
// &addressState=
// &addressCity=
// &addressZone=
// &addressNeighborhood=
// &addressStreet=
// &addressAccounts=
// &addressType=
// &addressLocationId=
// &addressPointLat=
// &addressPointLon=
// &addressUrl=
// &size=24
// &from=0

export async function getAdvertisers(searchTerm) {
  // const searchTermStringified = qs.stringify(searchTerm)
  const searchTermStringified = new URLSearchParams(searchTerm)
  const response = await axios
    .get(`${ROOT_URL}${villageHouse}${searchTermStringified}`, {
      headers: {
        'x-domain': 'www.zapimoveis.com.br',
      },
    }) // return a promise
    return response.data.search.result.listings
}
