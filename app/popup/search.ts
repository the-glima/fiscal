import {CustomObjectValues} from '../models/custom-object-values.model'

export const searchRegex = (data: any) => {
  console.log('=STARTLOG <>================================<> STARTLOG=');
  console.log(Object.values(data));
  console.log('=ENDLOG <>================================<> ENDLOG=');
  const dataArray: CustomObjectValues = Object.values(data.popupData)

  const searchValues = dataArray
    .filter((x: string) => !!x)
    .map((a: string) => a.split(','))
    .map((b: []) => b.map((c: string) => c.trim()))
    .flat()
    .join('|')

  return new RegExp(searchValues, 'gm')
}
