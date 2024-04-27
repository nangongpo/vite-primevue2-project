import request from '@/utils/request'

export default class CountryService {
  getCountries() {
    return request.get('/demo/data/countries.json').then(res => res.data.data)
  }
}
