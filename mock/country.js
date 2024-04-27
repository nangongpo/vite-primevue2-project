import { defineFakeRoute } from 'vite-plugin-fake-server/client'

import countries from './data/countries.json'

export default defineFakeRoute([
  {
    url: '/demo/data/countries.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data: countries
      }
    }
  }
])
