import {DOMGetCodeLine, DOMGetContainer} from '../../app/contentscript/dom-getters'

describe('Content Script: DOM Getters', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  test('DOMGetCodeLine: should return Azure code line elements', async () => {
    const wrapper1 = document.createElement('div')
    const wrapper2 = document.createElement('div')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    const span3 = document.createElement('span')
    const span4 = document.createElement('span')
    wrapper1.className = 'vc-diff-viewer'
    wrapper2.className = 'view-lines'
    span1.className = 'code-line'
    span2.className = 'code-Line'
    span3.className = 'view-line'
    span4.className = 'vieW-lines'
    wrapper1.appendChild(span1)
    wrapper1.appendChild(span2)
    wrapper2.appendChild(span3)
    wrapper2.appendChild(span4)
    document.body.appendChild(wrapper1)
    document.body.appendChild(wrapper2)

    const result: any = DOMGetCodeLine()

    expect(result.length).toBe(2)
  })

  test('DOMGetCodeLine: should return GitHub code line elements', async () => {
    const wrapper = document.createElement('div')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')

    span1.className = 'blob-code-marker'
    span2.className = 'blob-code'
    wrapper.appendChild(span1)
    wrapper.appendChild(span2)
    document.body.appendChild(wrapper)

    const result: any = DOMGetCodeLine()

    expect(result.length).toBe(2)
  })

  test('DOMGetContainer: should return container element', async () => {
    const wrapper1 = document.createElement('div')
    const wrapper2 = document.createElement('div')
    const wrapper3 = document.createElement('div')
    wrapper1.className = 'summaryContainer'
    wrapper2.className = 'diff-view'
    wrapper3.className = 'container'
    document.body.appendChild(wrapper1)
    document.body.appendChild(wrapper2)
    document.body.appendChild(wrapper3)

    const result: any = DOMGetContainer()

    expect(result.length).toBe(2)
  })
})
