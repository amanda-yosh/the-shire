import { router } from '../router'

function normalizeImageUrl(url, replaceValue) {
  return url.replace('/{action}/{width}x{height}/', `${replaceValue}`)
}

function goToPage(page) {
  return router.push({name: page})
}

export default {
  normalizeImageUrl,
  goToPage
}