import { defineFakeRoute } from 'vite-plugin-fake-server/client'

import photos from './data/photos.json'

export default defineFakeRoute([
  {
    url: '/demo/data/photos.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data:  photos
      }
    }
  }
])
