export const findMatch = (regex: RegExp, elCollection: Element[]) => elCollection.filter((el: any) => regex.test(el.innerText))
