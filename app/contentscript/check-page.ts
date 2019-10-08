import {settings} from '../settings'

export const checkPage = (urlToCheck: string[]): boolean => settings.url.some(url => urlToCheck.includes(url))
