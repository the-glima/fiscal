export const mutationObserver = (callback: any) => {
  const MutationObserver: any = window[<any>'MutationObserver'] || window[<any>'WebKitMutationObserver'] || window[<any>'MozMutationObserver']

  const mutationCallback = (mutations: MutationRecord[]) =>
    mutations.forEach((mutation: MutationRecord) => {
      console.log(mutation)

      if (mutation.type === 'childList') {
        callback()
      }
    })

  return new MutationObserver(mutationCallback)
}
