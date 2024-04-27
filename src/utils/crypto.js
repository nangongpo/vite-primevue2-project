import AES from 'crypto-js/aes'
import enc from 'crypto-js/enc-utf8'
import { isNotEmpty } from '@/utils'

export function encrypt(data) {
  if (isNotEmpty(data)) {
    return AES.encrypt(JSON.stringify(data), import.meta.env.VITE_APP_SECRET).toString()
  }
}

export function decrypt(data) {
  if (isNotEmpty(data)) {
    return JSON.parse(AES.decrypt(data, import.meta.env.VITE_APP_SECRET).toString(enc))
  }
}
