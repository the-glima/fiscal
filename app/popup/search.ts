import {getData} from '../data/get-set.data'
import {CustomObjectValues} from '../models/custom-object-values.model'

const dataObject = getData('popupData')

const dataArray: CustomObjectValues = Object.values(dataObject)

const searchValues = dataArray
  .filter((x: string) => !!x)
  .map((a: string) => a.split(','))
  .map((b: []) => b.map((c: string) => c.trim()))
  .flat()
  .join('|')

const searchRegex = new RegExp(searchValues, 'gm')

export {searchRegex}
 