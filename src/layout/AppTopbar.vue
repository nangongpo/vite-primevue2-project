<template>
  <div class="topbar clearfix">
    <div class="topbar-left">
      <router-link v-slot="{ navigate }" to="/" custom>
        <Logo class="topbar-logo" @click="navigate" @keypress.enter="navigate"/>
      </router-link>
    </div>

    <div class="topbar-right">
      <button class="p-link menu-button" @click="onMenuButtonClick">
        <i class="pi pi-angle-left" />
      </button>
      <button class="p-link topbar-menu-button" @click="onTopbarMenuButtonClick">
        <i class="pi pi-bars" />
      </button>

      <ul :class="topbarItemsClass">
        <li
          v-if="profileMode === 'top' || horizontal"
          :class="['profile-item', { 'active-top-menu': activeTopbarItem === 'profile' }]"
          @click="$emit('topbar-item-click', { originalEvent: $event, item: 'profile' })">
          <button class="p-link">
            <img alt="User" class="profile-image" :src="$publicUrl('resource/layout/images/avatar.png')" />
            <span class="topbar-item-name">Admin</span>
            <span class="topbar-item-role">管理员</span>
          </button>

          <transition name="layout-submenu-container">
            <ul v-show="activeTopbarItem === 'profile'" class="layout-menu fadeInDown">
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-user" />
                  <span>个人资料</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-lock" />
                  <span>修改密码</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-cog" />
                  <span>系统设置</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link" @click="logout">
                  <i class="pi pi-fw pi-sign-out" />
                  <span>退出</span>
                </button>
              </li>
            </ul>
          </transition>
        </li>
        <li
          v-tooltip.top="'设置'"
          :class="[{ 'active-top-menu': activeTopbarItem === 'settings' }]"
          @click="$emit('topbar-item-click', { originalEvent: $event, item: 'settings' })">
          <button class="p-link">
            <i class="topbar-icon pi pi-fw pi-cog" />
            <span class="topbar-item-name">系统设置</span>
          </button>
          <transition name="layout-submenu-container">
            <ul v-show="activeTopbarItem === 'settings'" class="layout-menu fadeInDown">
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-palette" />
                  <span>修改主题</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-star" />
                  <span>收藏</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-lock" />
                  <span>锁屏</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-image" />
                  <span>壁纸</span>
                </button>
              </li>
            </ul>
          </transition>
        </li>
        <li
          v-tooltip.top="'全屏'"
          :class="[{ 'active-top-menu': activeTopbarItem === 'screenfull' }]"
          @click="$emit('topbar-item-click', { originalEvent: $event, item: 'screenfull' })">
          <screenfull />
        </li>
        <li
          v-tooltip.top="'邮件'"
          :class="[{ 'active-top-menu': activeTopbarItem === 'messages' }]"
          @click="$emit('topbar-item-click', { originalEvent: $event, item: 'messages' })">
					<button class="p-link">
						<i class="topbar-icon pi pi-fw pi-envelope"></i>
						<span class="topbar-badge">5</span>
						<span class="topbar-item-name">邮件</span>
					</button>


          <transition name="layout-submenu-container">
            <ul v-show="activeTopbarItem === 'messages'" class="layout-menu fadeInDown">
              <li role="menuitem">
                <button class="p-link topbar-message">
                  <img alt="Avatar 1" :src="$publicUrl('resource/layout/images/avatar1.png')" width="35" />
                  <span>给我打电话</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link topbar-message">
                  <img alt="Avatar 2" :src="$publicUrl('resource/layout/images/avatar2.png')" width="35" />
                  <span>附有销售报告</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link topbar-message">
                  <img alt="Avatar 3" :src="$publicUrl('resource/layout/images/avatar3.png')" width="35" />
                  <span>关于发票</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link topbar-message">
                  <img alt="Avatar 4" :src="$publicUrl('resource/layout/images/avatar2.png')" width="35" />
                  <span>今晚10点开会</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link topbar-message">
                  <img alt="Avatar 5" :src="$publicUrl('resource/layout/images/avatar4.png')" width="35" />
                  <span>不在办公室</span>
                </button>
              </li>
            </ul>
          </transition>
        </li>

        <li
          v-tooltip.top="'通知'"
          :class="[{ 'active-top-menu': activeTopbarItem === 'notifications' }]"
          @click="$emit('topbar-item-click', { originalEvent: $event, item: 'notifications' })">
          <button class="p-link">
            <i class="topbar-icon pi pi-fw pi-bell" />
            <span class="topbar-badge animated rubberBand">4</span>
            <span class="topbar-item-name">消息</span>
          </button>

          <transition name="layout-submenu-container">
            <ul v-show="activeTopbarItem === 'notifications'" class="layout-menu fadeInDown">
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-sliders-h" />
                  <span>待处理的任务</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-calendar" />
                  <span>今天下午三点开会</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-download" />
                  <span>下载文件</span>
                </button>
              </li>
              <li role="menuitem">
                <button class="p-link">
                  <i class="pi pi-fw pi-bookmark" />
                  <span>预定航班</span>
                </button>
              </li>
            </ul>
          </transition>
        </li>

        <li
          :class="['search-item', { 'active-top-menu': activeTopbarItem === 'search' }]"
          @click="$emit('topbar-item-click', { originalEvent: $event, item: 'search' })">
          <div class="topbar-search">
            <input type="text" placeholder="检索" />
            <i class="pi pi-search" />
          </div>
        </li>

        <li v-tooltip.top="'帮助文档'" :class="[{ 'active-top-menu': activeTopbarItem === 'help' }]">
          <a href="https://www.primefaces.org/primevue-v2" target="_blank" class="p-link">
            <i class="topbar-icon pi pi-fw pi-question-circle"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo/index.vue'
import Screenfull from '@/components/Screenfull/index.vue'

export default {
  components: {
    Logo,
    Screenfull
  },
  props: {
    topbarMenuActive: Boolean,
    profileMode: String,
    horizontal: Boolean,
    activeTopbarItem: String
  },
  computed: {
    topbarItemsClass() {
      return ['topbar-items fadeInDown', {
        'topbar-items-visible': this.topbarMenuActive
      }]
    }
  },
  methods: {
    onMenuButtonClick(event) {
      this.$emit('menubutton-click', event)
    },
    onTopbarMenuButtonClick(event) {
      this.$emit('topbar-menubutton-click', event)
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
