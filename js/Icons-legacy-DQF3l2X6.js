!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,i(r.key),r)}}function i(t){var i=function(t,i){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,i||"default");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==e(i)?i:i+""}System.register(["./primevue2-legacy-CstrOyJM.js","./app.component-legacy-BIUfPD9B.js","./whatwg-fetch-legacy-CCzU3kzf.js","./resize-observer-polyfill-legacy-0iJwNYH9.js","./app.core-legacy-4IoIb6Gd.js","./@nangongpo-legacy-DNMPug1-.js","./prismjs-legacy-hFI0QxJU.js"],(function(e,i){"use strict";var n,r,o,a;return{setters:[function(e){n=e.f},function(e){r=e.d,o=e.n,a=e.C},null,null,null,null,null],execute:function(){var i=document.createElement("style");i.textContent=".icon-filter[data-v-f2be9fe3]{width:100%;padding:1rem;margin:1rem 0 1.5rem}.icons-list[data-v-f2be9fe3]{text-align:center}.icons-list i[data-v-f2be9fe3]{font-size:1.5rem;color:var(--text-color-secondary);margin-bottom:.5rem}.icons-list .icon[data-v-f2be9fe3]{padding-bottom:2rem}[data-v-f2be9fe3] pre[class*=language-]:before,[data-v-f2be9fe3] pre[class*=language-]:after{display:none!important}[data-v-f2be9fe3] pre[class*=language-] code{border-left:10px solid var(--surface-d)!important;box-shadow:none!important;background:var(--surface-b)!important;margin:1em 0;color:var(--text-color);font-size:14px}[data-v-f2be9fe3] pre[class*=language-] code .token.tag,[data-v-f2be9fe3] pre[class*=language-] code .token.keyword,[data-v-f2be9fe3] pre[class*=language-] code .token.attr-name,[data-v-f2be9fe3] pre[class*=language-] code .token.attr-string{color:#2196f3!important}[data-v-f2be9fe3] pre[class*=language-] code .token.attr-value{color:#4caf50!important}[data-v-f2be9fe3] pre[class*=language-] code .token.punctuation{color:var(--text-color)}[data-v-f2be9fe3] pre[class*=language-] code .token.operator,[data-v-f2be9fe3] pre[class*=language-] code .token.string{background:transparent}\n",document.head.appendChild(i);var c=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)},(i=[{key:"getIcons",value:function(){return r.get("/demo/data/icons.json").then((function(e){var t=e.data.icons;return t.sort((function(e,t){return e.properties.name<t.properties.name?-1:e.properties.name===t.properties.name?1:0})),t}))}}])&&t(e.prototype,i),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,i,n}();e("default",o({components:{CodeHighlight:a},data:function(){return{icons:null,filter:null}},computed:{filteredIcons:function(e){var t=e.icons,i=e.filter;return i?t.filter((function(e){return e.properties.name.indexOf(i.toLowerCase())>-1})):t}},created:function(){this.iconService=new c},mounted:function(){var e=this;this.iconService.getIcons().then((function(t){return e.icons=t}))}},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"card icons-demo"},[t("h4",[e._v("图标")]),t("p",[e._v("Avalon使用PrimeTek新的现代图标库PrimeIcons v6。")]),t("h5",[e._v("入门")]),t("p",[e._v("PrimeIcons使用pi pi- {icon}语法，例如pi pi-check。可以使用诸如i或span之类的元素来显示独立图标。")]),t("CodeHighlight",[e._v(' <i class="pi pi-check"></i> <i class="pi pi-times"></i> ')]),t("i",{staticClass:"pi pi-check",staticStyle:{"margin-right":"0.5rem"}}),t("i",{staticClass:"pi pi-times"}),t("h5",[e._v("组件图标")]),t("p",[e._v("具有图标属性的组件使用pi pi- {icon}语法接受PrimeIcons。")]),t("CodeHighlight",[e._v(' <Button label="确认" icon="pi pi-check"></Button> ')]),t("Button",{attrs:{label:"确认",icon:"pi pi-check"}}),t("h5",[e._v("尺寸")]),t("p",[e._v("使用font-size属性可以轻松更改图标的大小。")]),t("CodeHighlight",[e._v(' <i class="pi pi-check"></i> ')]),t("i",{staticClass:"pi pi-check"}),t("CodeHighlight",[e._v(' <i class="pi pi-check" style="fontSize: 2rem"></i> ')]),t("i",{staticClass:"pi pi-check",staticStyle:{fontsize:"2rem"}}),t("h5",[e._v("旋转动画")]),t("p",[e._v("特殊的pi-spin类将连续旋转应用于图标。")]),t("CodeHighlight",[e._v(' <i class="pi pi-spin pi-spinner" style="fontSize: 2rem"></i> ')]),t("i",{staticClass:"pi pi-spin pi-spinner",staticStyle:{fontsize:"2rem"}}),t("h5",[e._v("图标列表")]),t("p",[e._v("这是PrimeIcons的当前列表，会定期添加更多图标。您也可以在问题跟踪器中请求新图标。")]),t(n,{staticClass:"icon-filter",attrs:{placeholder:"搜索图标"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),t("div",{staticClass:"grid icons-list"},e._l(e.filteredIcons,(function(i){return t("div",{key:i.properties.name,staticClass:"col-12 md:col-2 icon"},[t("i",{class:"pi pi-"+i.properties.name}),t("div",[e._v("pi-"+e._s(i.properties.name))])])})),0)],1)}),[],!1,null,"f2be9fe3",null,null).exports)}}}))}();
//# sourceMappingURL=Icons-legacy-DQF3l2X6.js.map
