export const checkPage = (urls: string[]): boolean => urls.some(url => window.location.href.match(url))
