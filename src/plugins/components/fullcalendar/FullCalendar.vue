<template>
  <FullCalendarVue ref="fullCalendar" :options="calendarOptions">
    <template v-for="(_, name) in $scopedSlots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </FullCalendarVue>
</template>

<script>
import '@fullcalendar/core/vdom'
import FullCalendarVue from '@fullcalendar/vue'
import zhCN from '@fullcalendar/core/locales/zh-cn'

const defaultConfig = { 
  themeSystem: 'standard',
  locales: [zhCN],
  locale: 'zh-cn'
}

export default {
  name: 'FullCalendar',
  components: {
    FullCalendarVue
  },
  props: {
    options: {
      type: Object,
      default: null
    },
    events: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    calendarOptions({ options, events }) {
      return options ? { ...options, events, ...defaultConfig } : defaultConfig
    }
  },
  mounted() {
    const calendarApi = this.$refs.fullCalendar.getApi()
    // fix: 日历内容自适应
    const resizeObserver = new ResizeObserver(() => calendarApi.updateSize())
    resizeObserver.observe(this.$el)
  }
}
</script>
