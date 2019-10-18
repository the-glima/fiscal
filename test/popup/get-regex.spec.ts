import {getRegex} from '../../app/popup/get-regex'

describe('Popup: Get Regex', () => {
  test('should return regex from form input value', async () => {
    const string = 'console.log("Foo"), bAr, //, "'
    const result = /console.log("Foo")| bAr| \/\/| "/gm

    expect(getRegex(string)).toStrictEqual(result)
  })

  test('should return null if nothing is passed', async () => {
    expect(getRegex(null)).toBeNull()
    expect(getRegex(undefined)).toBeNull()
  })
})
