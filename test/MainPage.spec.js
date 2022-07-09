import { mount } from '@vue/test-utils'
import MainPage from '../pages/index'

describe('Main Page', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MainPage)
    expect(wrapper.vm).toBeTruthy()
  })
})
