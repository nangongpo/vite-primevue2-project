import { defineFakeRoute } from 'vite-plugin-fake-server/client'

import events from './data/events.json'

export default defineFakeRoute([
  {
    url: '/demo/data/events.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data: events
      }
    }
  }
])
