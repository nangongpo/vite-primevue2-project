<template>
  <div style="margin-bottom: 16px">
    <div :class="['profile', {'profile-expanded': expanded}]">
      <button
        class="p-link"
        @click="onClick"
      >
        <img
          alt="Profile"
          class="profile-image"
          :src="$publicUrl('resource/layout/images/avatar.png')"
        >
        <span class="profile-name">Admin</span>
        <i class="pi pi-fw pi-caret-down" />
        <span class="profile-role">管理员</span>
      </button>
    </div>

    <transition name="layout-profile-menu">
      <ul
        v-show="expanded"
        class="layout-menu profile-menu"
      >
        <li role="menuitem">
          <button
            class="p-link"
            :tabIndex="expanded ? null : '-1'"
          >
            <i class="pi pi-fw pi-user" />
            <span>个人资料</span>
          </button>
          <div class="layout-menu-tooltip">
            <div class="layout-menu-tooltip-arrow" />
            <div class="layout-menu-tooltip-text">
              个人资料
            </div>
          </div>
        </li>
        <li role="menuitem">
          <button
            class="p-link"
            :tabIndex="expanded ? null : '-1'"
          >
            <i class="pi pi-fw pi-lock" />
            <span>修改密码</span>
          </button>
          <div class="layout-menu-tooltip">
            <div class="layout-menu-tooltip-arrow" />
            <div class="layout-menu-tooltip-text">
              修改密码
            </div>
          </div>
        </li>
        <li role="menuitem">
          <button
            class="p-link"
            :tabIndex="expanded ? null : '-1'"
          >
            <i class="pi pi-fw pi-cog" />
            <span>系统设置</span>
          </button>
          <div class="layout-menu-tooltip">
            <div class="layout-menu-tooltip-arrow" />
            <div class="layout-menu-tooltip-text">
              系统设置
            </div>
          </div>
        </li>
        <li role="menuitem">
          <button
            class="p-link"
            :tabIndex="expanded ? null : '-1'"
            @click="logout"
          >
            <i class="pi pi-fw pi-sign-out" />
            <span>退出</span>
          </button>
          <div class="layout-menu-tooltip">
            <div class="layout-menu-tooltip-arrow" />
            <div class="layout-menu-tooltip-text">
              退出
            </div>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'AppInlineProfile',
  props: {
    expanded: {
      type: Boolean,
      default: null
    }
  },
  methods: {
    onClick(event) {
      this.$emit('profile-click', event)
      event.preventDefault()
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style scoped>

</style>
