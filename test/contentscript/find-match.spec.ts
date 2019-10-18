import {findMatch} from '../../app/contentscript/find-match'

describe('Content Script: Find Match Element', () => {
  test('should return match element', async () => {
    const wrapper = document.createElement('div')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    const span3 = document.createElement('span')

    wrapper.className = 'vc-diff-viewer'
    span1.className = 'code-line'
    span2.className = 'code-line'
    span3.className = 'code-lines'
    span1.innerText = 'console.log("Foo")'
    span2.innerText = 'console.log("Bar")'
    span3.innerText = 'Foo'
    wrapper.appendChild(span1)
    wrapper.appendChild(span2)
    wrapper.appendChild(span3)
    document.body.appendChild(wrapper)

    const regex = new RegExp('Foo', 'gm')
    const nodelist = [...document.querySelectorAll('.vc-diff-viewer .code-line')]
    const result: any = findMatch(regex, nodelist)

    expect(result.length).toBe(1)
    expect(result[0].innerText).toBe('console.log("Foo")')
  })
})
