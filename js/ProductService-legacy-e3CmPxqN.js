!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}function n(e){var n=function(e,n){if("object"!=t(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==t(n)?n:n+""}System.register(["./app.component-legacy-BIUfPD9B.js"],(function(t,n){"use strict";var r;return{setters:[function(t){r=t.d}],execute:function(){t("P",function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},(n=[{key:"getProductsSmall",value:function(){return r.get("/demo/data/products-small.json").then((function(t){return t.data.data}))}},{key:"getProducts",value:function(){return r.get("/demo/data/products.json").then((function(t){return t.data.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return r.get("/demo/data/products-orders-small.json").then((function(t){return t.data.data}))}}])&&e(t.prototype,n),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,n,o}())}}}))}();
//# sourceMappingURL=ProductService-legacy-e3CmPxqN.js.map
