<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <FullCalendar
          :events="events"
          :options="options"
        />

        <Dialog
          :visible.sync="eventDialog"
          :style="{ width: '450px' }"
          header="Event Details"
          :modal="true"
          :closable="true"
        >
          <div class="p-fluid">
            <div class="field">
              <label for="title">Title</label>
              <InputText
                v-if="clickedEvent"
                id="title"
                v-model="changedEvent.title"
                required="true"
                autofocus
              />
            </div>
            <div class="field">
              <label for="start">From</label>
              <Calendar
                v-if="clickedEvent"
                id="start"
                v-model="changedEvent.start"
                :show-time="true"
                append-to="body"
              />
            </div>
            <div class="field">
              <label for="end">To</label>
              <Calendar
                v-if="clickedEvent"
                id="end"
                v-model="changedEvent.end"
                :show-time="true"
                append-to="body"
              />
            </div>
            <div class="field-checkbox">
              <Checkbox
                id="allday"
                v-model="changedEvent.allDay"
                name="allday"
                value="All Day"
              />
              <label for="allday">All Day</label>
            </div>
          </div>
          <template #footer>
            <Button
              label="Save"
              icon="pi pi-check"
              class="p-button-text"
              @click="save"
            />
            <Button
              label="Reset"
              icon="pi pi-refresh"
              class="p-button-text"
              @click="reset"
            />
          </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from '@/api/EventService'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  data() {
    return {
      eventDialog: false,
      clickedEvent: null,
      changedEvent: { title: '', start: null, end: '', allDay: null },
      options: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        headerToolbar: {
          left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialDate: '2024-01-01',
        editable: true,
        eventClick: (e) => {
          this.eventDialog = true

          this.clickedEvent = e.event

          this.changedEvent.title = this.clickedEvent.title
          this.changedEvent.start = this.clickedEvent.start
          this.changedEvent.end = this.clickedEvent.end
        }
      },
      events: null
    }
  },
  eventService: null,
  created() {
    this.eventService = new EventService()
  },
  mounted() {
    this.eventService.getEvents().then((data) => (this.events = data))
  },
  methods: {
    findIndexById(id) {
      let index = -1
      for (let i = 0; i < this.events.length; i++) {
        if (this.events[i].id === id) {
          index = i
          break
        }
      }

      return index
    },
    save() {
      this.eventDialog = false

      this.clickedEvent.setProp('title', this.changedEvent.title)
      this.clickedEvent.setStart(this.changedEvent.start)
      this.clickedEvent.setEnd(this.changedEvent.end)
      this.clickedEvent.setAllDay(this.changedEvent.allDay)

      this.changedEvent = { title: '', start: null, end: '', allDay: null }
    },
    reset() {
      this.changedEvent.title = this.clickedEvent.title
      this.changedEvent.start = this.clickedEvent.start
      this.changedEvent.end = this.clickedEvent.end
    }
  }
}
</script>

<style scoped></style>
