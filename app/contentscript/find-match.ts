export const findMatch = (regex: RegExp, elCollection: HTMLElement[]): HTMLElement[] =>
  elCollection.filter((el: any) => regex.test(el.innerText))
