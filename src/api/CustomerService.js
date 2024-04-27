import request from '@/utils/request'

export default class CustomerService {
  getCustomersSmall() {
    return request.get('/demo/data/customers-small.json').then(res => res.data.data)
  }

  getCustomersMedium() {
    return request.get('/demo/data/customers-medium.json').then(res => res.data.data)
  }

  getCustomersLarge() {
    return request.get('/demo/data/customers-large.json').then(res => res.data.data)
  }

  getCustomersXLarge() {
    return request.get('/demo/data/customers-xlarge.json').then(res => res.data.data)
  }
}
