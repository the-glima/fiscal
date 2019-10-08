import {CustomObjectValues, PopupData} from '../models/popup.model'

export const getRegex = (data: any): RegExp | null => {
  const dataArray: CustomObjectValues = Object.values(data.popupData)

  const searchValues = dataArray
    .filter((x: PopupData) => !!x)
    .map((a: string) => a.split(','))
    .map((b: []) => b.map((c: string) => c.trim()))
    .flat()
    .join('|')

  return searchValues ? new RegExp(searchValues, 'gm') : null
}
