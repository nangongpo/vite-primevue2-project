!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,u(r.key),r)}}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}System.register(["./app.fullcalendar-legacy-DCyi_NYx.js","./app.component-legacy-BIUfPD9B.js"],(function(e,n){"use strict";var o,u,l,i;return{setters:[function(e){o=e.F,u=e._},function(e){l=e.n,i=e.d}],execute:function(){var n={themeSystem:"standard",locales:[u],locale:"zh-cn"};e("_",l({name:"FullCalendar",components:{FullCalendarVue:o},props:{options:{type:Object,default:null},events:{type:Array,default:function(){return[]}}},computed:{calendarOptions:function(e){var t=e.options,o=e.events;return t?r(r({},t),{},{events:o},n):n}},mounted:function(){var e=this.$refs.fullCalendar.getApi();new ResizeObserver((function(){return e.updateSize()})).observe(this.$el)}},(function(){var e=this;return(0,e._self._c)("FullCalendarVue",{ref:"fullCalendar",attrs:{options:e.calendarOptions},scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,n){return{key:n,fn:function(t){return[e._t(n,null,null,t)]}}}))],null,!0)})}),[],!1,null,null,null,null).exports);e("E",function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(n=[{key:"getEvents",value:function(){return i.get("/demo/data/events.json").then((function(e){return e.data.data}))}}])&&t(e.prototype,n),r&&t(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n,r}())}}}))}();
//# sourceMappingURL=EventService-legacy-DS_4jvlu.js.map
