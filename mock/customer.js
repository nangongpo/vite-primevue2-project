import { defineFakeRoute } from 'vite-plugin-fake-server/client'

import customers_small from './data/customers-small.json'
import customers_medium from './data/customers-medium.json'
import customers_large from './data/customers-large.json'
import customers_xlarge from './data/customers-xlarge.json'

export default defineFakeRoute([
  {
    url: '/demo/data/customers-small.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data: customers_small
      }
    }
  },
  {
    url: '/demo/data/customers-medium.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data: customers_medium
      }
    }
  },
  {
    url: '/demo/data/customers-large.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data: customers_large
      }
    }
  },
  {
    url: '/demo/data/customers-xlarge.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data: customers_xlarge
      }
    }
  }
])
