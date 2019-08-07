export const onReady = (elCollection: Element[], callback: any): any => {
  if (document.body && elCollection.length > 1) {
    callback()
    return
  }

  const recursive = onReady(elCollection, callback)

  window.requestAnimationFrame(recursive)
}
