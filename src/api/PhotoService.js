import request from '@/utils/request'

export default class PhotoService {
  getImages() {
    return request.get('/demo/data/photos.json')
      .then(res => res.data.data)
  }
}
