import {findMatch} from '../../app/contentscript/find-match'

describe.only('Content Script: Find Match Element', () => {
  test('should return match element', async () => {
    const wrapper = document.createElement('div')
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    const span3 = document.createElement('span')
    const span4 = document.createElement('span')
    const div = document.createElement('div')

    wrapper.className = 'wrapper-class'
    span1.innerText = 'Foo Bar'
    span2.innerText = '// This is a comment'
    span3.innerText = 'console.log("GorillaZ")'
    span4.innerText = '() =>'
    div.innerText = 'I am a div'

    wrapper.appendChild(span1)
    wrapper.appendChild(span2)
    wrapper.appendChild(span3)
    wrapper.appendChild(span4)
    wrapper.appendChild(div)
    document.body.appendChild(wrapper)

    const regex = new RegExp('Foo Bar|//|console.log("gorillaz")|() =>')
    const elCollection = [...document.querySelectorAll(`.${wrapper.className}`)]
    const result = findMatch(regex, elCollection)

    expect(result.length).toBe(3)
    expect(result.every(el => el.tagName === 'SPAN')).toBeTruthy()
    expect(result[0].innerText).toBe('Foo Bar')
    expect(result[1].innerText).toBe('// This is a comment')
    expect(result[2].innerText).toBe('() =>')
  })

  test('should return no element', async () => {
    const wrapper = document.createElement('div')
    const span = document.createElement('span')

    wrapper.className = 'wrapper-class'
    span.innerText = 'GorillaZ'

    wrapper.appendChild(span)
    document.body.appendChild(wrapper)

    const regex = new RegExp('Blur')
    const elCollection = [...document.querySelectorAll(`.${wrapper.className}`)]
    const result = findMatch(regex, elCollection)

    expect(result.length).toBe(0)
  })

  test('should return no element if there is no span child', async () => {
    const wrapper = document.createElement('div')

    wrapper.className = 'wrapper-class'
    wrapper.innerText = 'Dad?'

    document.body.appendChild(wrapper)

    const regex = new RegExp('Dad?')
    const elCollection = [...document.querySelectorAll(`.${wrapper.className}`)]
    const result = findMatch(regex, elCollection)

    expect(result.length).toBe(0)
  })
})
