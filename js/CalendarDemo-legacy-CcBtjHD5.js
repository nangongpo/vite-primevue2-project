System.register(["./primevue2-legacy-CstrOyJM.js","./EventService-legacy-DS_4jvlu.js","./app.fullcalendar-legacy-DCyi_NYx.js","./app.component-legacy-BIUfPD9B.js","./tslib-legacy-UqbBzbCc.js","./app.core-legacy-4IoIb6Gd.js","./@nangongpo-legacy-DNMPug1-.js","./preact-legacy-D7Jvwh8t.js","./whatwg-fetch-legacy-CCzU3kzf.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./prismjs-legacy-hFI0QxJU.js"],(function(e,t){"use strict";var n,l,a,i,s,c,d,r,v,o;return{setters:[function(e){n=e.O,l=e.f,a=e.n,i=e.g},function(e){s=e.E,c=e._},function(e){d=e.m,r=e.a,v=e.c},function(e){o=e.n},null,null,null,null,null,null,null],execute:function(){e("default",o({data:function(){var e=this;return{eventDialog:!1,clickedEvent:null,changedEvent:{title:"",start:null,end:"",allDay:null},options:{plugins:[d,r,v],headerToolbar:{left:"prev,next",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},initialDate:"2024-01-01",editable:!0,eventClick:function(t){e.eventDialog=!0,e.clickedEvent=t.event,e.changedEvent.title=e.clickedEvent.title,e.changedEvent.start=e.clickedEvent.start,e.changedEvent.end=e.clickedEvent.end}},events:null}},eventService:null,created:function(){this.eventService=new s},mounted:function(){var e=this;this.eventService.getEvents().then((function(t){return e.events=t}))},methods:{findIndexById:function(e){for(var t=-1,n=0;n<this.events.length;n++)if(this.events[n].id===e){t=n;break}return t},save:function(){this.eventDialog=!1,this.clickedEvent.setProp("title",this.changedEvent.title),this.clickedEvent.setStart(this.changedEvent.start),this.clickedEvent.setEnd(this.changedEvent.end),this.clickedEvent.setAllDay(this.changedEvent.allDay),this.changedEvent={title:"",start:null,end:"",allDay:null}},reset:function(){this.changedEvent.title=this.clickedEvent.title,this.changedEvent.start=this.clickedEvent.start,this.changedEvent.end=this.clickedEvent.end}}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"grid"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"card"},[t(c,{attrs:{events:e.events,options:e.options}}),t(n,{style:{width:"450px"},attrs:{visible:e.eventDialog,header:"Event Details",modal:!0,closable:!0},on:{"update:visible":function(t){e.eventDialog=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[t("Button",{staticClass:"p-button-text",attrs:{label:"Save",icon:"pi pi-check"},on:{click:e.save}}),t("Button",{staticClass:"p-button-text",attrs:{label:"Reset",icon:"pi pi-refresh"},on:{click:e.reset}})]},proxy:!0}])},[t("div",{staticClass:"p-fluid"},[t("div",{staticClass:"field"},[t("label",{attrs:{for:"title"}},[e._v("Title")]),e.clickedEvent?t(l,{attrs:{id:"title",required:"true",autofocus:""},model:{value:e.changedEvent.title,callback:function(t){e.$set(e.changedEvent,"title",t)},expression:"changedEvent.title"}}):e._e()],1),t("div",{staticClass:"field"},[t("label",{attrs:{for:"start"}},[e._v("From")]),e.clickedEvent?t(a,{attrs:{id:"start","show-time":!0,"append-to":"body"},model:{value:e.changedEvent.start,callback:function(t){e.$set(e.changedEvent,"start",t)},expression:"changedEvent.start"}}):e._e()],1),t("div",{staticClass:"field"},[t("label",{attrs:{for:"end"}},[e._v("To")]),e.clickedEvent?t(a,{attrs:{id:"end","show-time":!0,"append-to":"body"},model:{value:e.changedEvent.end,callback:function(t){e.$set(e.changedEvent,"end",t)},expression:"changedEvent.end"}}):e._e()],1),t("div",{staticClass:"field-checkbox"},[t(i,{attrs:{id:"allday",name:"allday",value:"All Day"},model:{value:e.changedEvent.allDay,callback:function(t){e.$set(e.changedEvent,"allDay",t)},expression:"changedEvent.allDay"}}),t("label",{attrs:{for:"allday"}},[e._v("All Day")])],1)])])],1)])])}),[],!1,null,"3fd3ea3e",null,null).exports)}}}));
//# sourceMappingURL=CalendarDemo-legacy-CcBtjHD5.js.map
