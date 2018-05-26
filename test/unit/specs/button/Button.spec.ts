import { shallowMount } from '@vue/test-utils'

import { Button } from "@ferrymen/fm-ui-vue"

describe('Test TSX Button', () => {
  // let wrapper: any

  beforeEach(() => {
    // wrapper = mount(Button)
  })

  it('render button', () => {
    const Wrapper = shallowMount(Button)
    expect(Wrapper.contains('div')).toBe(true)
    expect(Wrapper).toMatchSnapshot();
  })
})