import request from '@/utils/request'

export default class IconService {
  getIcons() {
    return request.get('/demo/data/icons.json').then(res => {
      const icons = res.data.icons
      icons.sort((icon1, icon2) => {
        if (icon1.properties.name < icon2.properties.name) { 
          return -1 
        } else if (icon1.properties.name === icon2.properties.name)  { 
          return 1 
        } else { 
          return 0
        }
      })
      return icons
    })
  }
}
