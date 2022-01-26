const setHref = (state, {id, href}) => {
  state.href.set(id, href)
}

export default {
  setHref,
}