<script>
import settings from '@/settings'
import { getPublicUrl } from '@/utils'

export default {
  name: 'Logo',
  functional: true,
  props: {
    image: {
      type: String,
      default: getPublicUrl('vite.svg')
    },
    label: {
      type: String,
      default: settings.title
    }
  },
  render(h, context) {
    const { image, label } = context.props
    const vNodes = []
    context.data.staticClass = `logo ${context.data.staticClass || ''}`

    if (image) {
      vNodes.push(h('img', {
        class: 'logo__image',
        attrs: {
          src: image,
          alt: image.split('/').pop()
        }
      }))
    }
    if (label) {
      vNodes.push(h('span', {
        class: 'logo__label'
      }, label))
    }

    return h('div', context.data, vNodes)
  }
}
</script>

<style>
.logo {
  height: 24px;
  display: inline-flex;
  align-items: center;
}
.logo__image {
  height: 100%;
  margin-right: 6px;
}
</style>
