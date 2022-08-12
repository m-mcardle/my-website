import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import MainPage from '../pages/index'

describe('Main Page', () => {
  const mount = () => shallowMount(MainPage, {
    stubs: {
      NuxtLink: RouterLinkStub,
      FontAwesomeIcon: true
    }
  })

  test('is a Vue instance', () => {
    const wrapper = mount()
    expect(wrapper.vm).toBeTruthy()
  })
})
