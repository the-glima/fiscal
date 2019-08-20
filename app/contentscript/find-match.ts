export const findMatch = (regexes: RegExp[], elCollection: Element[]) =>
  elCollection.filter((el: any) => 
    regexes.some(reg => reg.test(el.innerText)
  ))
