import settings from '@/settings'
import { encrypt, decrypt } from '@/utils/crypto'

/**
 * project=null时存储不加密
 * opts = { project: null, namespace: '', storage: window.localStorage || window.sessionStorage }
 */
export default class WebStorage {
  constructor(opts) {
    const { project = settings.name, namespace = '', storage = window.localStorage } = opts || {}
    this.opts = {
      project,
      namespace: project ? `${project}__${namespace}` : `__${namespace}__`,
      storage
    }
  }

  /**
   * Get item
   *
   * @param {string} name
   * @param {*} def - default value
   * @returns {*}
   */
  get(name, def = null) {
    const { project, namespace, storage } = this.opts
    const item = project === null ? storage.getItem(namespace + name) : decrypt(storage.getItem(namespace + name))
    if (item !== null) {
      try {
        const data = JSON.parse(item)

        if (data.expire === null) {
          return data.value
        }

        if (data.expire >= new Date().getTime()) {
          return data.value
        }

        this.remove(name)
      } catch (err) {
        return def
      }
    }
  }


  getAll() {
    const { storage, namespace } = this.opts
    if (storage.length === 0) {
      return
    }

    const tmpObj = {}

    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i)
      const regexp = new RegExp(`^${namespace}.+`, 'i')

      if (!regexp.test(key)) {
        continue
      }

      const name = key.replace(namespace, '')
      tmpObj[name] = this.get(name)
    }

    return tmpObj
  }

  /**
   * Set item
   *
   * @param {string} name
   * @param {*} value
   * @param {number} expire - millsecond
   */
  set(name, value, expire = null) {
    const { project, namespace, storage } = this.opts
    const stringifyValue = JSON.stringify({
      value,
      expire: expire !== null ? new Date().getTime() + expire : null
    })

    storage.setItem(namespace + name, project === null ? stringifyValue : encrypt(stringifyValue))
  }

  /**
   * Remove item
   *
   * @param {string} name
   * @return {boolean}
   */
  remove(name) {
    const { namespace, storage } = this.opts
    storage.removeItem(namespace + name)
  }

  /**
   * Clear storage
   */
  clear() {
    const { storage, namespace } = this.opts
    if (storage.length === 0) {
      return
    }

    const removedKeys = []

    for (let i = 0; i < storage.length; i++) {
      const key = storage.key(i)
      const regexp = new RegExp(`^${namespace}.+`, 'i')

      if (regexp.test(key) === false) {
        continue
      }

      removedKeys.push(key)
    }

    for (const key in removedKeys) {
      storage.removeItem(removedKeys[key])
    }
  }
}

export const shareStorage = new WebStorage({ project: null, namespace: 'share' })

export const globalStorage = new WebStorage({ namespace: 'global' })

export const authStorage = new WebStorage({ namespace: 'auth' })
