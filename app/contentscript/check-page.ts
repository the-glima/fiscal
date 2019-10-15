import {settings} from '../settings'

export const checkPage = (url: string): boolean => settings.background.urlRegex.map(regex => new RegExp(regex, 'gm')).some(regex => regex.test(url))
