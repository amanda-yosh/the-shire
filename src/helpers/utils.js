import { router } from '../router'

export function normalizeImageUrl(url, replaceValue) {
  return url.replace('/{action}/{width}x{height}/', `${replaceValue}`)
}

export function goToPage(page) {
  return router.push({name: page})
}
