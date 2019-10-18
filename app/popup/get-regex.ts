export const getRegex = (string: string): RegExp | null => {
  if (!string || typeof string !== 'string') return null

  const searchValues = string
    .split(',')
    .map((term: string) => term.toString())
    .join('|')

  return searchValues ? new RegExp(searchValues, 'gm') : null
}
