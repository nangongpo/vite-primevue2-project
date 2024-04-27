<template>
  <div class="layout-wrapper" :class="containerClass" @click="onDocumentClick">
    <div class="layout-wrapper-content">
      <AppTopBar
        :topbar-menu-active="topbarMenuActive"
        :profile-mode="profileMode"
        :horizontal="layoutMode === 'horizontal'"
        :active-topbar-item="activeTopbarItem"
        @menubutton-click="onMenuButtonClick"
        @topbar-menubutton-click="onTopbarMenuButtonClick"
        @topbar-item-click="onTopbarItemClick" />

      <transition name="layout-menu-container">
        <div v-show="isMenuVisible()" :class="menuClass" @click="onMenuClick">
          <div class="menu-scroll-content">
            <AppInlineProfile
              v-if="profileMode === 'inline' && layoutMode !== 'horizontal'"
              :expanded="profileExpanded"
              @profile-click="onProfileClick" />

            <AppMenu
              :model="menu"
              :layout-mode="layoutMode"
              :active="menuActive"
              @menuitem-click="onMenuItemClick"
              @root-menuitem-click="onRootMenuItemClick" />
          </div>
        </div>
      </transition>
      <tags-view v-if="needTagsView" />
      <div :class="{ hasTagsView: needTagsView }" class="layout-main">
        <router-view />
      </div>
      <AppConfig />
      <div class="layout-mask" />

      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppTopBar from './AppTopbar.vue'
import AppConfig from './AppConfig.vue'
import AppInlineProfile from './AppInlineProfile.vue'
import AppMenu from './AppMenu.vue'
import AppFooter from './AppFooter.vue'
import EventBus from '@/utils/event-bus'
import TagsView from '@/layout/components/TagsView/index.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  data() {
    return {
      overlayMenuActive: false,
      staticMenuDesktopInactive: false,
      staticMenuMobileActive: false,
      topbarMenuActive: false,
      activeTopbarItem: null,
      rotateMenuButton: false,
      menu: [
        { label: '首页', icon: 'pi pi-fw pi-home', to: '/' },
        {
          label: '组件',
          icon: 'pi pi-fw pi-sitemap',
          items: [
            { label: '表单', icon: 'pi pi-fw pi-id-card', to: '/formlayout' },
            { label: '输入框', icon: 'pi pi-fw pi-check-square', to: '/input' },
            { label: '按钮', icon: 'pi pi-fw pi-mobile', to: '/button' },
            { label: '表格', icon: 'pi pi-fw pi-table', to: '/table' },
            { label: '列表', icon: 'pi pi-fw pi-list', to: '/list' },
            { label: '树', icon: 'pi pi-fw pi-share-alt', to: '/tree' },
            { label: '面板', icon: 'pi pi-fw pi-tablet', to: '/panel' },
            { label: '遮罩层', icon: 'pi pi-fw pi-clone', to: '/overlay' },
            { label: '菜单', icon: 'pi pi-fw pi-bars', to: '/menu' },
            { label: '提示', icon: 'pi pi-fw pi-comment', to: '/messages' },
            { label: '文件上传', icon: 'pi pi-fw pi-file', to: '/file' },
            { label: '图表', icon: 'pi pi-fw pi-chart-bar', to: '/chart' },
            { label: '小装饰', icon: 'pi pi-fw pi-circle-off', to: '/misc' }
          ]
        },
        {
          label: '工具',
          icon: 'pi pi-fw pi-globe',
          items: [
            { label: '显示', icon: 'pi pi-fw pi-desktop', to: '/display' },
            {
              label: '阴影',
              icon: 'pi pi-fw pi-external-link',
              to: '/elevation'
            },
            {
              label: 'Flexbox',
              icon: 'pi pi-fw pi-directions',
              to: '/flexbox'
            },
            { label: '图标', icon: 'pi pi-fw pi-search', to: '/icons' },
            { label: '小组件', icon: 'pi pi-fw pi-star', to: '/widgets' },
            { label: '网格', icon: 'pi pi-fw pi-th-large', to: '/grid' },
            { label: '空格', icon: 'pi pi-fw pi-arrow-right', to: '/spacing' },
            {
              label: '段落',
              icon: 'pi pi-fw pi-align-center',
              to: '/typography'
            },
            { label: '文本', icon: 'pi pi-fw pi-pencil', to: '/text' }
          ]
        },
        {
          label: '页面',
          icon: 'pi pi-fw pi-clone',
          items: [
            { label: '表格', icon: 'pi pi-fw pi-pencil', to: '/crud' },
            {
              label: '日历',
              icon: 'pi pi-fw pi-calendar-plus',
              to: '/calendar'
            },
            { label: '登录', icon: 'pi pi-fw pi-sign-in', to: '/login' },
            { label: '打印', icon: 'pi pi-fw pi-dollar', to: '/invoice' },
            { label: '帮助', icon: 'pi pi-fw pi-question-circle', to: '/help' },
            { label: '500', icon: 'pi pi-fw pi-times-circle', to: '/error' },
            {
              label: '404',
              icon: 'pi pi-fw pi-exclamation-circle',
              to: '/notfound'
            },
            { label: '403', icon: 'pi pi-fw pi-lock', to: '/access' },
            { label: '空白', icon: 'pi pi-fw pi-circle-off', to: '/empty' }
          ]
        },
        {
          label: '嵌套菜单',
          icon: 'pi pi-fw pi-sort-amount-down-alt',
          items: [
            {
              label: '菜单 1',
              icon: 'pi pi-fw pi-circle-off',
              items: [
                {
                  label: '菜单 1.1',
                  icon: 'pi pi-fw pi-circle-off',
                  items: [
                    { label: '菜单 1.1.1', icon: 'pi pi-fw pi-circle-off' },
                    { label: '菜单 1.1.2', icon: 'pi pi-fw pi-circle-off' },
                    { label: '菜单 1.1.3', icon: 'pi pi-fw pi-circle-off' }
                  ]
                },
                {
                  label: '菜单 1.2',
                  icon: 'pi pi-fw pi-circle-off',
                  items: [
                    { label: '菜单 1.2.1', icon: 'pi pi-fw pi-circle-off' },
                    { label: '菜单 1.2.2', icon: 'pi pi-fw pi-circle-off' }
                  ]
                }
              ]
            },
            {
              label: '菜单 2',
              icon: 'pi pi-fw pi-circle-off',
              items: [
                {
                  label: '菜单 2.1',
                  icon: 'pi pi-fw pi-circle-off',
                  items: [
                    { label: '菜单 2.1.1', icon: 'pi pi-fw pi-circle-off' },
                    { label: '菜单 2.1.2', icon: 'pi pi-fw pi-circle-off' },
                    { label: '菜单 2.1.3', icon: 'pi pi-fw pi-circle-off' }
                  ]
                },
                {
                  label: '菜单 2.2',
                  icon: 'pi pi-fw pi-circle-off',
                  items: [
                    { label: '菜单 2.2.1', icon: 'pi pi-fw pi-circle-off' },
                    { label: '菜单 2.2.2', icon: 'pi pi-fw pi-circle-off' }
                  ]
                }
              ]
            }
          ]
        },
        {
          label: '文档',
          icon: 'pi pi-fw pi-question',
          command: () => {
            window.location = '#/documentation'
          }
        },
        {
          label: '外链',
          icon: 'pi pi-fw pi-money-bill',
          url: 'https://www.baidu.com',
          target: '_blank'
        }
      ],
      menuActive: false,
      profileExpanded: false
    }
  },
  watch: {
    $route() {
      this.menuActive = false
      this.$toast.removeAllGroups()
    }
  },
  computed: {
    ...mapGetters(['permission_routes', 'sidebar']),
    ...mapState({
      layoutMode: (state) => state.settings.layoutMode,
      darkMenu: (state) => state.settings.darkMenu,
      profileMode: (state) => state.settings.profileMode,
      layout: (state) => state.settings.layout,
      theme: (state) => state.settings.theme,
      needTagsView: (state) => state.settings.tagsView
    }),
    containerClass() {
      return [
        {
          'menu-layout-static': this.layoutMode !== 'overlay',
          'menu-layout-overlay': this.layoutMode === 'overlay',
          'layout-menu-overlay-active': this.overlayMenuActive,
          'menu-layout-slim': this.layoutMode === 'slim',
          'menu-layout-horizontal': this.layoutMode === 'horizontal',
          'layout-menu-static-inactive': this.staticMenuDesktopInactive,
          'layout-menu-static-active': this.staticMenuMobileActive,
          'p-input-filled': this.$primevue.config.inputStyle === 'filled',
          'p-ripple-disabled': this.$primevue.config.ripple === false
        }
      ]
    },
    menuClass() {
      return ['layout-menu-container', { 'layout-menu-dark': this.darkMenu }]
    }
  },
  methods: {
    onDocumentClick() {
      if (!this.topbarItemClick) {
        this.activeTopbarItem = null
        this.topbarMenuActive = false
      }

      if (!this.menuClick) {
        if (this.isHorizontal() || this.isSlim()) {
          this.menuActive = false
          EventBus.$emit('reset_active_index')
        }

        this.hideOverlayMenu()
      }

      this.topbarItemClick = false
      this.menuClick = false
    },
    onProfileClick(event) {
      this.profileExpanded = !this.profileExpanded
      if (this.isHorizontal() || this.isSlim()) {
        EventBus.$emit('reset_active_index')
      }

      event.preventDefault()
    },
    onMenuClick() {
      this.menuClick = true
    },
    onMenuItemClick(event) {
      if (!event.item.items) {
        EventBus.$emit('reset_active_index')
        this.hideOverlayMenu()
      }
      if (!event.item.items && this.isHorizontal()) {
        this.menuActive = false
      }
    },
    onRootMenuItemClick() {
      this.menuActive = !this.menuActive
    },
    onMenuButtonClick(event) {
      this.menuClick = true

      this.rotateMenuButton = !this.rotateMenuButton
      this.topbarMenuActive = false

      if (this.layoutMode === 'overlay') {
        this.overlayMenuActive = !this.overlayMenuActive
      } else {
        if (this.isDesktop()) {
          this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive
        } else {
          this.staticMenuMobileActive = !this.staticMenuMobileActive
        }
      }

      event.preventDefault()
    },
    onTopbarMenuButtonClick(event) {
      this.topbarItemClick = true
      this.topbarMenuActive = !this.topbarMenuActive
      this.hideOverlayMenu()
      event.preventDefault()
    },
    onTopbarItemClick(event) {
      this.topbarItemClick = true

      if (this.activeTopbarItem === event.item) {
        this.activeTopbarItem = null
      } else {
        this.activeTopbarItem = event.item
      }

      event.originalEvent.preventDefault()
    },
    hideOverlayMenu() {
      this.rotateMenuButton = false
      this.overlayMenuActive = false
      this.staticMenuMobileActive = false
    },
    isDesktop() {
      return window.innerWidth > 1024
    },
    isHorizontal() {
      return this.layoutMode === 'horizontal'
    },
    isSlim() {
      return this.layoutMode === 'slim'
    },
    isMenuVisible() {
      if (this.isDesktop()) {
        if (this.layoutMode === 'static') {
          return !this.staticMenuDesktopInactive
        } else if (this.layoutMode === 'overlay') {
          return this.overlayMenuActive
        } else {
          return true
        }
      } else {
        if (this.staticMenuMobileActive) {
          return true
        } else if (this.layoutMode === 'overlay') {
          return this.overlayMenuActive
        } else {
          return true
        }
      }
    }
  },
  components: {
    AppTopBar: AppTopBar,
    AppConfig: AppConfig,
    AppInlineProfile: AppInlineProfile,
    AppMenu: AppMenu,
    AppFooter: AppFooter,
    TagsView: TagsView
  }
}
</script>

<style lang="scss">
@import "./App.scss";
</style>
