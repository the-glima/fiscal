interface DOMAddStyleParams {
  contentMatches: HTMLElement[] | undefined
  targetElement?: string
  className?: string
  itemFoundProps?: {
    element: ItemFoundProps;
    icon: ItemFoundProps;
  }
}

interface ItemFoundProps {
  className: string
  style: string
  content?: string
}

export {DOMAddStyleParams}
