import request from '@/utils/request'

export default class EventService {
  getEvents() {
    return request.get('/demo/data/events.json').then(res => res.data.data)
  }
}
