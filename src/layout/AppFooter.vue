<template>
  <div class="layout-footer">
    <div class="card clearfix">
      <span class="footer-text-left">
        {{ title }}
      </span>
      <span class="footer-text-right">
        <span class="ui-icon ui-icon-copyright" />
        <span>All Rights Reserved</span>
      </span>
    </div>
  </div>
</template>

<script>
import settings from '@/settings'
const { title } = settings

export default {
  name: 'AppFooter',
  created() {
    this.title = title
  }
}
</script>
