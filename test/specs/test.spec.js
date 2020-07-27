import { mount } from '@vue/test-utils'
import Test from 'packages/test/src/test'

describe('Test', () => {
  it('create', () => {
    const wrapper = mount(Test, {
      slots: {
        default: 'hello'
      }
    })
    // console.log(wrapper.html())
    expect(wrapper.html()).to.include('div')
  })
})
