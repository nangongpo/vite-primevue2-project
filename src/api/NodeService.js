import request from '@/utils/request'

export default class NodeService {
  getTreeTableNodes() {
    return request.get('/demo/data/treetablenodes.json')
      .then(res => res.data.root)
  }

  getTreeNodes() {
    return request.get('/demo/data/treenodes.json')
      .then(res => res.data.root)
  }
}
