<template>
  <div id="layout-config" :class="containerClass">
    <a id="layout-config-button" href="#" class="layout-config-button" @click="toggleConfigurator">
      <i class="pi pi-cog" />
    </a>
    <a href="#" class="layout-config-close" @click="hideConfigurator">
      <i class="pi pi-times" />
    </a>

    <div class="layout-config-content">
      <h5 style="margin-top: 0">组件缩放 {{scale}}px </h5>
      <Slider v-model="scale" :step="1" :min="12" :max="16" />

      <h5>输入框样式</h5>
      <div class="formgroup-inline">
        <div class="field-radiobutton">
          <RadioButton id="input_outlined" v-model="inputStyle" name="inputstyle" value="outlined" />
          <label for="input_outlined">带边框</label>
        </div>
        <div class="field-radiobutton">
          <RadioButton id="input_filled" v-model="inputStyle" name="inputstyle" value="filled" />
          <label for="input_filled">背景填充</label>
        </div>
      </div>

      <h5>开启波纹特效</h5>
      <InputSwitch v-model="ripple" />

      <h5>开启多页签</h5>
      <InputSwitch v-model="tagsView" />

      <h5>导航栏位置</h5>
      <div class="formgroup-inline">
        <div class="field-radiobutton">
          <RadioButton id="horizontal" v-model="layoutMode" name="layoutMode" value="static" />
          <label for="static">常规</label>
        </div>
        <div class="field-radiobutton">
          <RadioButton id="overlay" v-model="layoutMode" name="layoutMode" value="overlay" />
          <label for="overlay">覆盖</label>
        </div>
        <div class="field-radiobutton">
          <RadioButton id="horizontal" v-model="layoutMode" name="layoutMode" value="horizontal" />
          <label for="horizontal">顶部</label>
        </div>
        <div class="field-radiobutton">
          <RadioButton id="slim" v-model="layoutMode" name="layoutMode" value="slim" />
          <label for="slim">左侧</label>
        </div>
      </div>

      <h5>侧边栏风格</h5>
      <div class="formgroup-inline">
        <div class="field-radiobutton">
          <RadioButton id="dark" v-model="darkMenu" name="menuColor" :value="true" />
          <label for="dark">暗色</label>
        </div>
        <div class="field-radiobutton">
          <RadioButton id="light" v-model="darkMenu" name="menuColor" :value="false" />
          <label for="light">亮色</label>
        </div>
      </div>

      <h5>用户配置</h5>
      <div class="formgroup-inline">
        <div class="field-radiobutton">
          <RadioButton
            id="top"
            v-model="profileMode"
            name="profileMode"
            value="top"
            :disabled="layoutMode === 'horizontal'" />
          <label for="top">顶栏</label>
        </div>
        <div class="field-radiobutton">
          <RadioButton
            id="inline"
            v-model="profileMode"
            name="profileMode"
            value="inline"
            :disabled="layoutMode === 'horizontal'" />
          <label for="inline">侧边栏</label>
        </div>
      </div>

      <h5>布局颜色</h5>
      <div class="layout-themes">
        <div v-for="l of layoutColors" :key="l.name">
          <a
            href="#"
            :style="{ backgroundImage: `linear-gradient(to right, ${l.color1}, ${l.color2})` }"
            @click="changeLayoutColor($event, l.file, false)">
            <i v-if="layout === l.file" class="pi pi-check" />
          </a>
        </div>
      </div>

      <h5>特殊布局颜色</h5>
      <div class="layout-themes">
        <div v-for="l of layoutSpecialColors" :key="l.name">
          <a
            href="#"
            :style="{ backgroundImage: `linear-gradient(to right, ${l.color1}, ${l.color2})` }"
            @click="changeLayoutColor($event, l.file, true)">
            <i v-if="layout === l.file" class="pi pi-check" />
          </a>
        </div>
      </div>

      <h5>主题</h5>
      <div class="layout-themes">
        <div v-for="t of themeColors" :key="t.name">
          <a href="#" :style="{ backgroundColor: t.color }" @click="changeTheme($event, t.file)">
            <i v-if="theme === t.file" class="pi pi-check" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      scales: [12, 13, 14, 15, 16],
      outsideClickListener: null,
      themeColors: [
        { name: 'Blue', file: 'blue', color: '#007bff' },
        { name: 'Amber', file: 'amber', color: '#F8BD0C' },
        { name: 'Cyan', file: 'cyan', color: '#17A2B8' },
        { name: 'Indigo', file: 'indigo', color: '#6610F2' },
        { name: 'Purple', file: 'purple', color: '#883cae' },
        { name: 'Teal', file: 'teal', color: '#20C997' },
        { name: 'Orange', file: 'orange', color: '#FD7E14' },
        { name: 'Deep Purple', file: 'deeppurple', color: '#612FBE' },
        { name: 'Light Blue', file: 'lightblue', color: '#4DA3FF' },
        { name: 'Green', file: 'green', color: '#28A745' },
        { name: 'Light Green', file: 'lightgreen', color: '#61CC79' },
        { name: 'Brown', file: 'brown', color: '#986839' },
        { name: 'Dark Grey', file: 'darkgrey', color: '#6C757D' },
        { name: 'Pink', file: 'pink', color: '#E83E8C' },
        { name: 'Lime', file: 'lime', color: '#74CD32' }
      ],
      layoutColors: [
        { name: 'Blue', file: 'blue', color1: '#146fd7', color2: '#146fd7' },
        { name: 'Cyan', file: 'cyan', color1: '#0A616F', color2: '#0D7A8B' },
        { name: 'Indigo', file: 'indigo', color1: '#470EA2', color2: '#510DBE' },
        { name: 'Purple', file: 'purple', color1: '#391F68', color2: '#4E2A8F' },
        { name: 'Teal', file: 'teal', color1: '#136E52', color2: '#13956E' },
        { name: 'Pink', file: 'pink', color1: '#771340', color2: '#B12D69' },
        { name: 'Lime', file: 'lime', color1: '#407916', color2: '#569D21' },
        { name: 'Green', file: 'green', color1: '#1F8E38', color2: '#1F8E38' },
        { name: 'Amber', file: 'amber', color1: '#7A5E06', color2: '#C5980F' },
        { name: 'Brown', file: 'brown', color1: '#593E22', color2: '#6F4925' },
        { name: 'Orange', file: 'orange', color1: '#904100', color2: '#CB5C00' },
        { name: 'Deep Purple', file: 'deeppurple', color1: '#341A64', color2: '#46208E' },
        { name: 'Light Blue', file: 'lightblue', color1: '#14569D', color2: '#2A7BD1' },
        { name: 'Light Green', file: 'lightgreen', color1: '#2E8942', color2: '#3EA655' },
        { name: 'Dark Grey', file: 'darkgrey', color1: '#343A40', color2: '#424A51' }
      ],
      layoutSpecialColors: [
        { name: 'Influenza', file: 'influenza', color1: '#a83279', color2: '#f38e00' },
        { name: 'Calm', file: 'calm', color1: '#5f2c82', color2: '#0DA9A4' },
        { name: 'Crimson', file: 'crimson', color1: '#521c52', color2: '#c6426e' },
        { name: 'Night', file: 'night', color1: '#2c0747', color2: '#6441a5' },
        { name: 'Skyline', file: 'skyline', color1: '#2b32b2', color2: '#1488cc' },
        { name: 'Sunkist', file: 'sunkist', color1: '#ee8a21', color2: '#f2c94c' },
        { name: 'Little Leaf', file: 'littleleaf', color1: '#4DB865', color2: '#80D293' },
        { name: 'Joomla', file: 'joomla', color1: '#1e3c72', color2: '#2a5298' },
        { name: 'Firewatch', file: 'firewatch', color1: '#cb2d3e', color2: '#ef473a' },
        { name: 'Suzy', file: 'suzy', color1: '#834d9b', color2: '#d04ed6' }
      ]
    }
  },
  computed: {
    ripple: {
      get() {
        return this.$store.state.settings.ripple
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'ripple',
          value: val
        })
        this.$primevue.config.ripple = val
      }
    },
    tagsView: {
      get() {
        return this.$store.state.settings.tagsView
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'tagsView',
          value: val
        })
      }
    },
    inputStyle: {
      get() {
        return this.$store.state.settings.inputStyle
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'inputStyle',
          value: val
        })
        this.$primevue.config.inputStyle = val
      }
    },
    layoutMode: {
      get() {
        return this.$store.state.settings.layoutMode
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'layoutMode',
          value: val
        })
      }
    },
    darkMenu: {
      get() {
        return this.$store.state.settings.darkMenu
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'darkMenu',
          value: val
        })
      }

    },
    profileMode: {
      get() {
        return this.$store.state.settings.profileMode
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'profileMode',
          value: val
        })
      }
    },
    layout: {
      get() {
        return this.$store.state.settings.layout
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'layout',
          value: val
        })
      }
    },
    theme: {
      get() {
        return this.$store.state.settings.theme
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'theme',
          value: val
        })
      }
    },
    scale: {
      get() {
        return parseInt(this.$store.state.settings.scale)
      },
      set(val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'scale',
          value: val
        })
        document.documentElement.style.fontSize = val + 'px'
      }
    },
    containerClass() {
      return ['layout-config', { 'layout-config-active': this.active }]
    }
  },
  watch: {
    $route() {
      if (this.active) {
        this.active = false
        this.unbindOutsideClickListener()
      }
    }
  },
  mounted() {
    this.changeStyleSheetUrl('layout-css', this.layout, 'layout')
    this.changeStyleSheetUrl('theme-css', this.theme, 'theme')
    document.documentElement.style.fontSize = this.scale + 'px'
  },
  methods: {
    toggleConfigurator(event) {
      this.active = !this.active
      event.preventDefault()

      if (this.active) { this.bindOutsideClickListener() } else { this.unbindOutsideClickListener() }
    },
    hideConfigurator(event) {
      this.active = false
      this.unbindOutsideClickListener()
      event.preventDefault()
    },

    changeLayoutColor(event, layout, special) {
      this.layout = layout
      this.changeStyleSheetUrl('layout-css', layout, 'layout')
      if (special) {
        this.darkMenu = true
      }
      event.preventDefault()
    },
    changeStyleSheetUrl(id, value, prefix) {
      const element = document.getElementById(id)
      const urlTokens = element.getAttribute('href').split('/')
      urlTokens[urlTokens.length - 1] = prefix + '-' + value + '.css'
      const newURL = urlTokens.join('/')

      this.replaceLink(element, newURL)
    },
    replaceLink(linkElement, href) {
      const id = linkElement.getAttribute('id')
      const cloneLinkElement = linkElement.cloneNode(true)

      cloneLinkElement.setAttribute('href', href)
      cloneLinkElement.setAttribute('id', id + '-clone')

      linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling)

      cloneLinkElement.addEventListener('load', () => {
        linkElement.remove()
        cloneLinkElement.setAttribute('id', id)
      })
    },
    changeTheme(event, theme) {
      this.theme = theme
      this.changeStyleSheetUrl('theme-css', theme, 'theme')
      event.preventDefault()
    },
    bindOutsideClickListener() {
      if (!this.outsideClickListener) {
        this.outsideClickListener = (event) => {
          if (this.active && this.isOutsideClicked(event)) {
            this.active = false
          }
        }
        document.addEventListener('click', this.outsideClickListener)
      }
    },
    unbindOutsideClickListener() {
      if (this.outsideClickListener) {
        document.removeEventListener('click', this.outsideClickListener)
        this.outsideClickListener = null
      }
    },
    isOutsideClicked(event) {
      return !(this.$el.isSameNode(event.target) || this.$el.contains(event.target))
    }
  }
}
</script>
