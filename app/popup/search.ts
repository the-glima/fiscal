import {CustomObjectValues} from '../models/custom-object-values.model'
import {PopupData} from '../models/popup-data.model'

export const searchRegex = (data: any) => {
  const dataArray: CustomObjectValues = Object.values(data.popupData)

  const searchValues = dataArray
    .filter((x: PopupData) => !!x)
    .map((a: string) => a.split(','))
    .map((b: []) => b.map((c: string) => c.trim()))
    .flat()
    .join('|')

  return new RegExp(searchValues, 'gm')
}
