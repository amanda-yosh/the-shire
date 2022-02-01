export default function normalizeImageUrl(url, replaceValue) {
  return url.replace('{action}/{width}x{height}', `${replaceValue}`)
}