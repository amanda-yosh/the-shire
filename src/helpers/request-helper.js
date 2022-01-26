import axios from 'axios'

/**
 * Performs a HTTP GET request and returns a promise that will be resolved by function's clients
 * @param {string} url - The URL to be used on request
 * @param { Object } headers - The header used on request
 * @returns { Promise }
 */
export function get(url, headers = {}) {
  return axios.get(url, {
    headers: {
      'x-domain': 'www.zapimoveis.com.br',
      ...headers,
    },
  })
}