// https://github.com/nangongpo/Print.js/tree/master
import printJS from '@nangongpo/print-js'
import defaultSettings from '@/settings'
import { getPublicUrl, isNotEmpty } from './index.js'

const getPrintStyle = (filename) => getPublicUrl(`print/${filename}`)

/**
 * @param {printJS.Configuration} configuration
 * @param {defaultSettings} settings
 */
export default function (configuration = {}, settings = defaultSettings) {
  // 与界面样式保持一致
  const cssList = [
    getPublicUrl('resource/primeicons/primeicons.css'),
    getPublicUrl('resource/primeflex/primeflex.css'),
    getPublicUrl(`resource/theme/theme-${settings.theme}.css`),
    getPrintStyle('main.css')
  ]

  if (Array.isArray(configuration.css)) {
    for (const item of configuration.css) {
      cssList.push(getPrintStyle(item))
    }
  }
  if (isNotEmpty(configuration.css)) {
    cssList.push(getPrintStyle(configuration.css))
  }

  printJS({
    scanStyles: false,
    ...configuration,
    css: cssList
  })
}
