import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import MagnetPage from '../pages/Magnet'

describe('Magnet Page', () => {
  const mount = () => shallowMount(MagnetPage, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })

  test('is a Vue instance', () => {
    const wrapper = mount()
    expect(wrapper.vm).toBeTruthy()
  })
})
