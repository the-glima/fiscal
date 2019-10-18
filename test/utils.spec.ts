import {getPropertySafe} from '../app/utils'

describe('Utils: Get Property Safe', () => {
  test('should return nested property', async () => {
    const nestedObject = {
      foo: {
        bar: {
          value: 'Foo Bar'
        }
      }
    }

    const result = getPropertySafe(() => nestedObject.foo.bar.value)

    expect(result).toBe('Foo Bar')
  })

  test('should return default value when can not find property', async () => {
    const nestedObject = {
      foo: {
        bar: {
          value: 'Foo Bar'
        }
      }
    }

    // tslint:disable-next-line
    const result = getPropertySafe(() => nestedObject.foo.bar.default, 'I am the default')

    expect(result).toBe('I am the default')
  })
})
