import {getRegex} from '../../app/popup/get-regex'

describe('Popup: Get Regex', () => {
  test('should return regex from form input value', async () => {
    const string = 'console.log("Foo"),bAr,//,"'
    const result = /console.log("Foo")|bAr|\/\/|"/

    expect(getRegex(string)).toStrictEqual(result)
  })
})
