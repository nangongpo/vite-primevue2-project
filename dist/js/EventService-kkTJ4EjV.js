import{F as a,_ as o}from"./app.fullcalendar-CDUeFR2e.js";import{n as u,d as c}from"./app.component-DQmWytpG.js";const r={themeSystem:"standard",locales:[o],locale:"zh-cn"},d={name:"FullCalendar",components:{FullCalendarVue:a},props:{options:{type:Object,default:null},events:{type:Array,default(){return[]}}},computed:{calendarOptions({options:n,events:e}){return n?{...n,events:e,...r}:r}},mounted(){const n=this.$refs.fullCalendar.getApi();new ResizeObserver(()=>n.updateSize()).observe(this.$el)}};var _=function(){var e=this,l=e._self._c;return l("FullCalendarVue",{ref:"fullCalendar",attrs:{options:e.calendarOptions},scopedSlots:e._u([e._l(e.$scopedSlots,function(f,t){return{key:t,fn:function(s){return[e._t(t,null,null,s)]}}})],null,!0)})},i=[],p=u(d,_,i,!1,null,null,null,null);const C=p.exports;class h{getEvents(){return c.get("/demo/data/events.json").then(e=>e.data.data)}}export{h as E,C as _};
//# sourceMappingURL=EventService-kkTJ4EjV.js.map