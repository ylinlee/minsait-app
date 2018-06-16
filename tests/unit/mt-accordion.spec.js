import { mount } from '@vue/test-utils'
import MtAccordion from '@/components/mt-accordion.vue'

describe('MtAccordion.vue', () => {
  const title = 'new title'
  const items = ['message 0', 'message 1']
  const wrapper = mount(MtAccordion, {
    propsData: { title, items },
    slot: {
      item: '<p>{{ item.message }}</p>'
    }
  })

  it('renders props.title when passed', () => {
    expect(wrapper.text()).toMatch(title)
  })

  it('contracts all items content when no passed props.initialExpandedItem', () => {
    expect(wrapper.findAll('.mt-slot-wrapper').length).toBe(0)
  })

  it('espands item content when no passed props.initialExpandedItem', () => {
    expect(wrapper.findAll('.mt-slot-wrapper').length).toBe(0)
  })

  it('espands only item content wich index is the same as props.initialExpandedItem', () => {
    const lastIndex = items.length - 1
    const initialExpandedItem = lastIndex
    const wrapperWithInitialExpandItem = mount(MtAccordion, {
      propsData: { title, items, initialExpandedItem },
      slot: {
        item: '<p>{{ item.message }}</p>'
      }
    })
    expect(wrapperWithInitialExpandItem.find(`.mt-item-${lastIndex} .mt-slot-wrapper`).exists()).toBe(true)
  })

  it('renders the same number of items as the list that is passed', () => {
    expect(wrapper.findAll('.mt-item').length).toBe(items.length)
  })

  it('expands or contracts item content when click item label', () => {
    expect(wrapper.find('.mt-item-0 .mt-slot-wrapper').exists()).toBe(false)
    const element = wrapper.find('.mt-item-0 .mt-label')
    element.trigger('click')
    expect(wrapper.find('.mt-item-0 .mt-slot-wrapper').exists()).toBe(true)
    element.trigger('click')
    expect(wrapper.find('.mt-item-0 .mt-slot-wrapper').exists()).toBe(false)
  })
})
