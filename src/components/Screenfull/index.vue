<template>
  <button class="p-link">
    <i
      class="topbar-icon pi pi-fw "
      :class="isFullscreen?'pi-window-maximize':'pi-window-minimize'"
      @click="click"
    />
    <span class="topbar-item-name">全屏</span>
  </button>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'Screenfull',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeUnmount() {
    this.destroy()
  },
  methods: {
    click() {
      // if (!screenfull.enabled) {
      //   this.$toast.add({severity:'warn', summary: '警告', detail:'你的浏览器不支持全屏！', life: 3000});
      //   return false
      // }
      screenfull.toggle()
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      // if (screenfull.enabled) {
      screenfull.on('change', this.change)
      // }
    },
    destroy() {
      // if (screenfull.enabled) {
      screenfull.off('change', this.change)
      // }
    }
  }
}
</script>

<style scoped>
.screenfull-svg {
  display: inline-block;
  cursor: pointer;
  fill: #5a5e66;;
  width: 20px;
  height: 20px;
  vertical-align: 10px;
}
</style>
