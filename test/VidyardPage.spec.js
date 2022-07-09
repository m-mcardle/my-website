import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import VidyardPage from '../pages/Vidyard'

describe('Vidyard Page', () => {
  const mount = () => shallowMount(VidyardPage, {
    stubs: {
      NuxtLink: RouterLinkStub
    }
  })

  test('is a Vue instance', () => {
    const wrapper = mount()
    expect(wrapper.vm).toBeTruthy()
  })
})