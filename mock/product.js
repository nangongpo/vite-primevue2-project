import { defineFakeRoute } from 'vite-plugin-fake-server/client'

import products from './data/products.json'
import products_small from './data/products-small.json'
import products_orders_small from './data/products-orders-small.json'

export default defineFakeRoute([
  {
    url: '/demo/data/products.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data:  products
      }
    }
  },
  {
    url: '/demo/data/products-small.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data:  products_small
      }
    }
  },
  {
    url: '/demo/data/products-orders-small.json',
    method: 'GET',
    response: () => {
      return {
        code: 20000,
        data:  products_orders_small
      }
    }
  }
])
