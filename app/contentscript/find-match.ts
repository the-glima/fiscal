export const findMatch = (regexes: RegExp[], elCollection: Element[]): Element[] => {
  return elCollection.filter((el: any) => regexes.some(reg => reg.test(el.innerText)))
}
