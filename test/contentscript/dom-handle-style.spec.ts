import {DOMAddStyle} from '../../app/contentscript/dom-handle-style'

describe('Content Script: DOM Handle Style', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  test('DOMAddStyle: should add default style to matched element', async () => {
    const wrapper = document.createElement('div')
    const element = document.createElement('span')
    wrapper.appendChild(element)
    const style = `color: white !important; border-top: 1px solid #953131 !important; background-color: rgb(239, 77, 77) !important;`

    DOMAddStyle({contentMatches: [wrapper]})

    expect(element.className).toBe('FiscalCS-item-found')
    expect(element.style.cssText).toBe(style)
  })

  test('DOMAddStyle: should add custom style to matched element', async () => {
    const wrapper = document.createElement('div')
    const element = document.createElement('h1')
    wrapper.appendChild(element)
    const style = `color: red; width: 100%; content: 'foo'; border-top: 0;`

    DOMAddStyle({
      contentMatches: [wrapper],
      targetElement: 'h1',
      className: 'foo-bar',
      style
    })

    expect(element.className).toBe('foo-bar')
    expect(element.style.cssText).toBe(style)
  })

  test('DOMAddStyle: should do nothing if no contentMatches is passed', async () => {
    const wrapper = document.createElement('div')
    const element = document.createElement('span')
    wrapper.appendChild(element)
    const style = `color: blue;`

    DOMAddStyle({
      contentMatches: undefined,
      targetElement: 'h1',
      className: 'foo-bar',
      style
    })

    expect(element.className).toBe('')
    expect(element.style.color).toBe('')
  })
})
