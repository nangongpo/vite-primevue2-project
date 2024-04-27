import request from '@/utils/request'

export default class ProductService {
  getProductsSmall() {
    return request.get('/demo/data/products-small.json').then(res => res.data.data)
  }

  getProducts() {
    return request.get('/demo/data/products.json').then(res => res.data.data)
  }

  getProductsWithOrdersSmall() {
    return request.get('/demo/data/products-orders-small.json').then(res => res.data.data)
  }
}
