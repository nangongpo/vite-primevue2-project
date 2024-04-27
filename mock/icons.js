import { defineFakeRoute } from 'vite-plugin-fake-server/client'

import icons from './data/icons.json'

export default defineFakeRoute([
  {
    url: '/demo/data/icons.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data: icons
      }
    }
  }
])
