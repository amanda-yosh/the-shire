import { mount } from '@vue/test-utils'
import SearchBar from '../../src/components/SearchBar/SearchBar.vue'

describe('SearchBar', () => {
  it('emits an event with no arguments', () => {
    const wrapper = mount(SearchBar)

    wrapper.emitted('termChange')

    console.log('HERE', wrapper.emitted().termChange)
  })
})
