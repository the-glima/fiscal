export const getRegex = (string: any): RegExp | null => {
  const searchValues = string
    .split(',')
    .map((term: string) => term.toString())
    .join('|')

  return searchValues ? new RegExp(searchValues, 'gm') : null
}
