export const addStyle = (matches: Element[], targetElement: string, style: string) =>
  matches.forEach((el: Element) =>
    el.querySelectorAll(targetElement).forEach((child: any) => {
      child.style.cssText = style
    })
  )
