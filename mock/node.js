import { defineFakeRoute } from 'vite-plugin-fake-server/client'

import treetablenodes from './data/treetablenodes.json'
import treenodes from './data/treenodes.json'

export default defineFakeRoute([
  {
    url: '/demo/data/treetablenodes.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data:  treetablenodes
      }
    }
  },
  {
    url: '/demo/data/treenodes.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data:  treenodes
      }
    }
  }
])
