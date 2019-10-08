export const getRegex = (string: string): RegExp | null => {
  const searchTermSanitized = string
    .split(',')
    .map((term: string) => term.trim())
    .join('|')

  return searchTermSanitized ? new RegExp(searchTermSanitized, 'gm') : null
}
