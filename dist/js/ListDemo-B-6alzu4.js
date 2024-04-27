import{x as r,h as c,y as o,q as s,z as n,A as d}from"./primevue2-z8ODENUo.js";import{P as l}from"./ProductService-Cwx0hge7.js";import{n as u}from"./app.component-DQmWytpG.js";import"./whatwg-fetch-DzgvNDjV.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./app.core-BOMZqaWx.js";import"./@nangongpo-5I40lFwe.js";import"./prismjs-CUvZdSMw.js";const v={data(){return{picklistValue:[[{name:"旧金山",code:"SF"},{name:"伦敦",code:"LDN"},{name:"巴黎",code:"PRS"},{name:"伊斯坦布尔",code:"IST"},{name:"柏林",code:"BRL"},{name:"巴塞罗那",code:"BRC"},{name:"罗马",code:"RM"}],[]],orderlistValue:[{name:"旧金山",code:"SF"},{name:"伦敦",code:"LDN"},{name:"巴黎",code:"PRS"},{name:"伊斯坦布尔",code:"IST"},{name:"柏林",code:"BRL"},{name:"巴塞罗那",code:"BRC"},{name:"罗马",code:"RM"}],dataviewValue:null,layout:"grid",sortKey:null,sortOrder:null,sortField:null,sortOptions:[{label:"从高到低",value:"!price"},{label:"从低到告",value:"price"}]}},productService:null,created(){this.productService=new l},mounted(){this.productService.getProducts().then(i=>this.dataviewValue=i)},methods:{onSortChange(i){const t=i.value.value,a=i.value;t.indexOf("!")===0?(this.sortOrder=-1,this.sortField=t.substring(1,t.length),this.sortKey=a):(this.sortOrder=1,this.sortField=t,this.sortKey=a)}}};var p=function(){var t=this,a=t._self._c;return a("div",{staticClass:"grid"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("h5",[t._v("DataView 数据视图")]),a(r,{attrs:{value:t.dataviewValue,layout:t.layout,paginator:!0,rows:9,"sort-order":t.sortOrder,"sort-field":t.sortField},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"grid p-nogutter"},[a("div",{staticClass:"col-6",staticStyle:{"text-align":"left"}},[a(c,{attrs:{options:t.sortOptions,"option-label":"label",placeholder:"按价格排序"},on:{change:function(e){return t.onSortChange(e)}},model:{value:t.sortKey,callback:function(e){t.sortKey=e},expression:"sortKey"}})],1),a("div",{staticClass:"col-6",staticStyle:{"text-align":"right"}},[a(o,{model:{value:t.layout,callback:function(e){t.layout=e},expression:"layout"}})],1)])]},proxy:!0},{key:"list",fn:function(e){return[a("div",{staticClass:"col-12"},[a("div",{staticClass:"product-list-item"},[a("img",{attrs:{src:t.$publicUrl("resource/demo/images/product/"+e.data.image),alt:e.data.name}}),a("div",{staticClass:"product-list-detail"},[a("div",{staticClass:"product-name"},[t._v(" "+t._s(e.data.name)+" ")]),a("div",{staticClass:"product-description"},[t._v(" "+t._s(e.data.description)+" ")]),a(s,{attrs:{value:e.data.rating,readonly:!0,cancel:!1}}),a("i",{staticClass:"pi pi-tag product-category-icon"}),a("span",{staticClass:"product-category"},[t._v(t._s(e.data.category))])],1),a("div",{staticClass:"product-list-action"},[a("span",{staticClass:"product-price"},[t._v("$"+t._s(e.data.price))]),a("Button",{attrs:{icon:"pi pi-shopping-cart",label:"Add to Cart",disabled:e.data.inventoryStatus==="缺货"}}),a("span",{class:"product-badge status-"+e.data.inventoryStatus.toLowerCase()},[t._v(t._s(e.data.inventoryStatus))])],1)])])]}},{key:"grid",fn:function(e){return[a("div",{staticClass:"col-12 md:col-4"},[a("div",{staticClass:"product-grid-item card"},[a("div",{staticClass:"product-grid-item-top"},[a("div",[a("i",{staticClass:"pi pi-tag product-category-icon"}),a("span",{staticClass:"product-category"},[t._v(t._s(e.data.category))])]),a("span",{class:"product-badge status-"+e.data.inventoryStatus.toLowerCase()},[t._v(t._s(e.data.inventoryStatus))])]),a("div",{staticClass:"product-grid-item-content"},[a("img",{attrs:{src:t.$publicUrl("resource/demo/images/product/"+e.data.image),alt:e.data.name}}),a("div",{staticClass:"product-name"},[t._v(" "+t._s(e.data.name)+" ")]),a("div",{staticClass:"product-description"},[t._v(" "+t._s(e.data.description)+" ")]),a(s,{attrs:{value:e.data.rating,readonly:!0,cancel:!1}})],1),a("div",{staticClass:"product-grid-item-bottom"},[a("span",{staticClass:"product-price"},[t._v("$"+t._s(e.data.price))]),a("Button",{attrs:{icon:"pi pi-shopping-cart",disabled:e.data.inventoryStatus==="缺货"}})],1)])])]}}])})],1)]),a("div",{staticClass:"col-12 lg:col-8"},[a("div",{staticClass:"card"},[a("h5",[t._v("PickList 穿梭框")]),a(n,{attrs:{"data-key":"code"},scopedSlots:t._u([{key:"sourceHeader",fn:function(){return[t._v(" 可选 ")]},proxy:!0},{key:"targetHeader",fn:function(){return[t._v(" 已选 ")]},proxy:!0},{key:"item",fn:function(e){return[a("div",[t._v(t._s(e.item.name))])]}}]),model:{value:t.picklistValue,callback:function(e){t.picklistValue=e},expression:"picklistValue"}})],1)]),a("div",{staticClass:"col-12 lg:col-4"},[a("div",{staticClass:"card"},[a("h5",[t._v("OrderList 排序列表")]),a(d,{staticClass:"p-orderlist-responsive",attrs:{"list-style":"height:250px","data-key":"code",rows:10},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" 城市 ")]},proxy:!0},{key:"item",fn:function(e){return[a("div",[t._v(t._s(e.item.name))])]}}]),model:{value:t.orderlistValue,callback:function(e){t.orderlistValue=e},expression:"orderlistValue"}})],1)])])},_=[],m=u(v,p,_,!1,null,"db9d1a84",null,null);const x=m.exports;export{x as default};
//# sourceMappingURL=ListDemo-B-6alzu4.js.map
