import Home from '../../src/pages/Home/Home.vue'

describe('Home', () => {
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof Home.data).toBe('function')
  })
})