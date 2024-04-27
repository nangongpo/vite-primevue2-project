<template>
  <ul v-if="items" role="menu">
    <template v-for="(item, i) of items">
      <li
        v-if="visible(item) && !item.separator"
        :key="item.label || i"
        :class="[{ 'active-menuitem': activeIndex === i && !item.to && !item.disabled }]"
        role="none">
        <div v-if="item.items && root === true" class="arrow" />
        <router-link
          v-if="item.to"
          v-ripple
          :to="item.to"
          :style="item.style"
          :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
          :target="item.target"
          exact
          role="menuitem"
          @click.native="onMenuItemClick($event, item, i)"
          @mouseenter.native="onMenuItemMouseEnter(i)">
          <i :class="item.icon" />
          <span>{{ item.label }}</span>
          <i v-if="item.items" class="pi pi-fw pi-angle-down menuitem-toggle-icon" />
          <span v-if="item.badge" class="menuitem-badge">{{ item.badge }}</span>
        </router-link>
        <a
          v-if="!item.to"
          v-ripple
          :href="item.url || '#'"
          :style="item.style"
          :class="[item.class, 'p-ripple', { 'p-disabled': item.disabled }]"
          :target="item.target"
          role="menuitem"
          @mouseenter="onMenuItemMouseEnter(i)"
          @click="onMenuItemClick($event, item, i)">
          <i :class="item.icon" />
          <span>{{ item.label }}</span>
          <i v-if="item.items" class="pi pi-fw pi-angle-down menuitem-toggle-icon" />
          <span v-if="item.badge" class="menuitem-badge">{{ item.badge }}</span>
        </a>
        <div v-if="root" class="layout-menu-tooltip">
          <div class="layout-menu-tooltip-arrow" />
          <div class="layout-menu-tooltip-text">
            {{ item.label }}
          </div>
        </div>
        <transition name="layout-submenu-container">
          <AppSubmenu
            v-show="activeIndex === i"
            :items="visible(item) && item.items"
            :menu-active="menuActive"
            :layout-mode="layoutMode"
            :parent-menu-item-active="activeIndex === i"
            @menuitem-click="$emit('menuitem-click', $event)" />
        </transition>
      </li>
      <li
        v-if="visible(item) && item.separator"
        :key="'separator' + i"
        class="p-menu-separator"
        :style="item.style"
        role="separator" />
    </template>
  </ul>
</template>
<script>
import EventBus from '@/utils/event-bus'

export default {
  name: 'AppSubmenu',
  props: {
    items: Array,
    layoutMode: String,
    menuActive: Boolean,
    root: {
      type: Boolean,
      default: false
    },
    parentMenuItemActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeIndex: null
    }
  },
  mounted() {
    EventBus.$on('reset_active_index', () => {
      if (this.layoutMode === 'horizontal' || this.layoutMode === 'slim') {
        this.activeIndex = null
      }
    })
  },
  methods: {
    onMenuItemClick(event, item, index) {
      if (item.disabled) {
        event.preventDefault()
        return
      }

      // execute command
      if (item.command) {
        item.command({ originalEvent: event, item: item })
        event.preventDefault()
      }

      if (item.items) {
        event.preventDefault()
      }

      if (this.root) {
        this.$emit('root-menuitem-click', {
          originalEvent: event
        })
      }

      if (item.items) {
        this.activeIndex = index === this.activeIndex ? null : index
      }

      this.$emit('menuitem-click', {
        originalEvent: event,
        item: item
      })
    },
    isMobile() {
      return window.innerWidth <= 1025
    },
    onMenuItemMouseEnter(index) {
      if (
        this.root &&
        this.menuActive &&
        (this.layoutMode === 'horizontal' || this.layoutMode === 'slim') &&
        !this.isMobile()
      ) {
        this.activeIndex = index
      }
    },
    visible(item) {
      return typeof item.visible === 'function'
        ? item.visible()
        : item.visible !== false
    }
  },
  components: {
    AppSubmenu: this
  }
}
</script>

<style scoped></style>
