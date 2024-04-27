<template>
  <AppSubmenu
    class="layout-menu layout-main-menu clearfix"
    :items="model"
    :layout-mode="layoutMode"
    :menu-active="active"
    :root="true"
    :parent-menu-item-active="true"
    @menuitem-click="onMenuItemClick"
    @root-menuitem-click="onRootMenuItemClick"
  />
</template>

<script>
import AppSubmenu from './AppSubmenu.vue'

export default {
  components: {
    AppSubmenu: AppSubmenu
  },
  props: {
    model: Array,
    layoutMode: String,
    active: Boolean
  },
  methods: {
    onMenuItemClick(event) {
      this.$emit('menuitem-click', event)
    },
    onRootMenuItemClick(event) {
      this.$emit('root-menuitem-click', event)
    }
  }
}
</script>

<style scoped></style>
