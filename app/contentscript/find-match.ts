export const findMatch = (regex: RegExp, elCollection: any[]): Element[] => elCollection.filter((el: any) => regex.test(el.innerText))
