import axios from 'axios'
import qs from 'qs'

const ROOT_URL = 'https://glue-api.zapimoveis.com.br/v2/listings?categoryPage=RESULT'
// https://glue-api.zapimoveis.com.br/v2/listings?business=SALE&listingType=USED&portal=ZAP&categoryPage=RESULT&unitSubTypes=VILLAGE_HOUSE&unitTypes=HOME&usageTypes=RESIDENTIAL&unitTypesV3=VILLAGE_HOUSE&text=Casa+de+Vila&addressCountry=&addressState=&addressCity=&addressZone=&addressNeighborhood=&addressStreet=&addressAccounts=&addressType=&addressLocationId=&addressPointLat=&addressPointLon=&addressUrl=&size=24&from=0

export function getAdvertisers(searchTerm) {
  const searchTermStringified = qs.stringify(searchTerm)

  axios
    .get(`${ROOT_URL}&unitSubTypes=${searchTermStringified}`, {
      headers: {
        'x-domain': 'www.zapimoveis.com.br',
      },
    }) // return a promise
    .then(response => {
      console.log(response.data)
      return response.data
    })
}
