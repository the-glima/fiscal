export const findMatch = (regex: RegExp, elCollection: Element[]): HTMLSpanElement[] =>
  elCollection.reduce((acc: any, cur: any) => {
    acc += [...cur.querySelectorAll('span')]

    return acc.filter((el: any) => regex.test(el.innerText))
  }, [])
