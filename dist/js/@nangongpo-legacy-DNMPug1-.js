!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}System.register([],(function(t,n){"use strict";return{execute:function(){t({a:function(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var r=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,r.get?r:{enumerable:!0,get:function(){return e[t]}})})),n},g:n});t("c","undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{});function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var r={exports:{}};!function(t,n){window,t.exports=function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==e(t)&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(o,i,function(e){return t[e]}.bind(null,i));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(t,n,r){r.r(n),r(1);var o={isFirefox:function(){return"undefined"!=typeof InstallTrigger},getFirefoxMajorVersion:function(e){var t=(e=e||navigator.userAgent).toLowerCase().match(/firefox\/(\S+)/);if(t)return t[1].split(".").map((function(e){return parseInt(e)}))[0]},isIE:function(){return-1!==navigator.userAgent.indexOf("MSIE")||!!document.documentMode},isEdge:function(){return!o.isIE()&&!!window.StyleMedia},isChrome:function(){return!!(arguments.length>0&&void 0!==arguments[0]?arguments[0]:window).chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||-1!==navigator.userAgent.toLowerCase().indexOf("safari")},isIOSChrome:function(){return-1!==navigator.userAgent.toLowerCase().indexOf("crios")}},i=o,a={show:function(e){var t=document.createElement("div");t.setAttribute("style","font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;"),t.setAttribute("id","printJS-Modal");var n=document.createElement("div");n.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),n.appendChild(r);var o=document.createElement("span");o.setAttribute("class","printSpinner"),n.appendChild(o);var i=document.createTextNode(e.modalMessage);n.appendChild(i),t.appendChild(n),document.getElementsByTagName("body")[0].appendChild(t),document.getElementById("printClose").addEventListener("click",(function(){a.close()}))},close:function(){var e=document.getElementById("printJS-Modal");e&&e.parentNode.removeChild(e)}},l=a;function d(t){return d="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},d(t)}function c(e){return e.charAt(0).toUpperCase()+e.slice(1)}function s(e,t){for(var n=0;n<e.length;n++)if("object"===d(t)&&-1!==t.indexOf(e[n]))return!0;return!1}function u(e,t){var n=document.createElement("div");if(m(t.header))n.innerHTML=t.header;else{var r=document.createElement("h1"),o=document.createTextNode(t.header);r.appendChild(o),r.setAttribute("style",t.headerStyle),n.appendChild(r)}e.insertBefore(n,e.childNodes[0])}function f(e,t){var n=document.createElement("div");if(m(t.footer))n.innerHTML=t.footer;else{var r=document.createElement("h1"),o=document.createTextNode(t.footer);r.appendChild(o),r.setAttribute("style",t.footerStyle),n.appendChild(r)}e.insertBefore(n,e.childNodes.lastChild)}function p(e){e.showModal&&l.close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable);var t="mouseover";(i.isChrome()||i.isFirefox())&&(t="focus"),window.addEventListener(t,(function n(){window.removeEventListener(t,n),e.onPrintDialogClose();var r=document.getElementById(e.frameId);r&&(e.frameRemoveDelay?setTimeout((function(){r.remove()}),e.frameRemoveDelay):r.remove())}))}function m(e){return new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>").test(e)}function b(e,t){try{if(e.focus(),i.isEdge()||i.isIE())try{e.contentWindow.document.execCommand("print",!1,null)}catch(r){setTimeout((function(){e.contentWindow.print()}),1e3)}else setTimeout((function(){e.contentWindow.print()}),1e3)}catch(o){t.onError(o)}finally{i.isFirefox()&&i.getFirefoxMajorVersion()<110&&(e.style.visibility="hidden",e.style.left="-1px"),p(t)}}function y(e,t){for(var n=e.styleSheets,r=!0,o=0;o<n.length;o++)if(null===n[o].cssRules){r=!1;break}r?(console.log("All styles loaded in iframe"),t&&t()):setTimeout(y,100)}var h={send:function(e,t){document.getElementsByTagName("body")[0].appendChild(t);var n=document.getElementById(e.frameId);n.onload=function(){if("pdf"!==e.type){var t=n.contentWindow||n.contentDocument;if(t.document&&(t=t.document),t.body.appendChild(e.printableElement),"pdf"!==e.type&&e.style){var r=document.createElement("style");r.innerHTML=e.style,t.head.appendChild(r)}var o=t.getElementsByTagName("img");o.length>0?function(e){var t=e.map((function(e){if(e.src&&e.src!==window.location.href)return function(e){return new Promise((function(t){!function n(){e&&void 0!==e.naturalWidth&&0!==e.naturalWidth&&e.complete?t():setTimeout(n,500)}()}))}(e)}));return Promise.all(t)}(Array.from(o)).then((function(){return b(n,e)})):y(t,(function(){b(n,e)}))}else i.isFirefox()&&i.getFirefoxMajorVersion()<110?setTimeout((function(){return b(n,e)}),1e3):b(n,e)}}},g=function(e,t){if(e.base64){-1!==e.printable.indexOf(",")&&(e.printable=e.printable.split(",")[1]);var n=Uint8Array.from(atob(e.printable),(function(e){return e.charCodeAt(0)}));v(e,t,n)}else{e.printable=/^(blob|http|\/\/)/i.test(e.printable)?e.printable:window.location.origin+("/"!==e.printable.charAt(0)?"/"+e.printable:e.printable);var r=new window.XMLHttpRequest;r.responseType="arraybuffer",r.addEventListener("error",(function(){p(e),e.onError(r.statusText,r)})),r.addEventListener("load",(function(){if(-1===[200,201].indexOf(r.status))return p(e),void e.onError(r.statusText,r);v(e,t,r.response)})),r.open("GET",e.printable,!0),r.send()}};function v(e,t,n){var r=new window.Blob([n],{type:"application/pdf"});r=window.URL.createObjectURL(r),t.setAttribute("src",r),h.send(e,t)}function w(t){return w="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},w(t)}var E=function(e,t){var n,r="object"===w(n=e.printable)&&n&&(n instanceof HTMLElement||1===n.nodeType)?e.printable:document.getElementById(e.printable);r?(e.printableElement=S(r,e),e.header&&u(e.printableElement,e),e.footer&&f(e.printableElement,e),h.send(e,t)):window.console.error("Invalid HTML element id: "+e.printable)};function S(e,t){for(var n=e.cloneNode(),r=Array.prototype.slice.call(e.childNodes),o=0;o<r.length;o++)if(-1===t.ignoreElements.indexOf(r[o].id)){var i=S(r[o],t);n.appendChild(i)}switch(t.scanStyles&&1===e.nodeType&&n.setAttribute("style",function(e,t){for(var n="",r=(document.defaultView||window).getComputedStyle(e,""),o=0;o<r.length;o++)(-1!==t.targetStyles.indexOf("*")||-1!==t.targetStyle.indexOf(r[o])||s(t.targetStyles,r[o]))&&r.getPropertyValue(r[o])&&(n+=r[o]+":"+r.getPropertyValue(r[o])+";");return n+"max-width: "+t.maxWidth+"px !important; font-size: "+t.font_size+" !important;"}(e,t)),e.tagName){case"SELECT":n.value=e.value;break;case"CANVAS":n.getContext("2d").drawImage(e,0,0)}return n}var x=function(e,t){e.printableElement=document.createElement("div"),e.printableElement.setAttribute("style","width:100%"),e.printableElement.innerHTML=e.printable,e.header&&u(e.printableElement,e),e.footer&&f(e.printableElement,e),h.send(e,t)},T=function(e,t){e.printable.constructor!==Array&&(e.printable=[e.printable]),e.printableElement=document.createElement("div"),e.printable.forEach((function(t){var n=document.createElement("img");if(n.setAttribute("style",e.imageStyle),n.src=t,i.isFirefox()){var r=n.src;n.src=r}var o=document.createElement("div");o.appendChild(n),e.printableElement.appendChild(o)})),e.header&&u(e.printableElement,e),e.footer&&f(e.printableElement,e),h.send(e,t)};function C(t){return C="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},C(t)}var A=function(e,t){if("object"!==C(e.printable))throw new Error("Invalid javascript data object (JSON).");if("boolean"!=typeof e.repeatTableHeader)throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!e.properties||!Array.isArray(e.properties))throw new Error("Invalid properties array for your JSON data.");e.properties=e.properties.map((function(t){return{field:"object"===C(t)?t.field:t,displayName:"object"===C(t)?t.displayName:t,columnSize:"object"===C(t)&&t.columnSize?t.columnSize+";":100/e.properties.length+"%;"}})),e.printableElement=document.createElement("div"),e.header&&u(e.printableElement,e),e.printableElement.innerHTML+=function(e){var t=e.printable,n=e.properties,r='<table style="border-collapse: collapse; width: 100%;">';e.repeatTableHeader&&(r+="<thead>"),r+="<tr>";for(var o=0;o<n.length;o++)r+='<th style="width:'+n[o].columnSize+";"+e.gridHeaderStyle+'">'+c(n[o].displayName)+"</th>";r+="</tr>",e.repeatTableHeader&&(r+="</thead>"),r+="<tbody>";for(var i=0;i<t.length;i++){r+="<tr>";for(var a=0;a<n.length;a++){var l=t[i],d=n[a].field.split(".");if(d.length>1)for(var s=0;s<d.length;s++)l=l[d[s]];else l=l[n[a].field];r+='<td style="width:'+n[a].columnSize+e.gridStyle+'">'+l+"</td>"}r+="</tr>"}return r+"</tbody></table>"}(e),e.footer&&f(e.printableElement,e),h.send(e,t)};function M(t){return M="function"==typeof Symbol&&"symbol"==e(Symbol.iterator)?function(t){return e(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":e(t)},M(t)}var O=["pdf","html","image","json","raw-html"],j=function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",footer:null,footerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(e){throw e},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",frameRemoveDelay:null,printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},t=arguments[0];if(void 0===t)throw new Error("printJS expects at least 1 attribute.");switch(M(t)){case"string":e.printable=encodeURI(t),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":for(var n in e.printable=t.printable,e.fallbackPrintable=void 0!==t.fallbackPrintable?t.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,".concat(e.fallbackPrintable):e.fallbackPrintable,e)"printable"!==n&&"fallbackPrintable"!==n&&(e[n]=void 0!==t[n]?t[n]:e[n]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+M(t))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||"string"!=typeof e.type||-1===O.indexOf(e.type.toLowerCase()))throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&l.show(e),e.onLoadingStart&&e.onLoadingStart();var r=document.getElementById(e.frameId);r&&r.parentNode.removeChild(r);var o=document.createElement("iframe");switch(i.isFirefox()?o.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):o.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),o.setAttribute("id",e.frameId),"pdf"!==e.type&&(o.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach((function(e){o.srcdoc+='<link rel="stylesheet" href="'+e+'">'}))),o.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(i.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer."),window.open(e.fallbackPrintable,"_blank").focus(),e.onIncompatibleBrowser()}catch(d){e.onError(d)}finally{e.showModal&&l.close(),e.onLoadingEnd&&e.onLoadingEnd()}else g(e,o);break;case"image":T(e,o);break;case"html":E(e,o);break;case"raw-html":x(e,o);break;case"json":A(e,o)}},L=j;"undefined"!=typeof window&&(window.printJS=L),n.default=L}]).default}(r);t("p",n(r.exports))}}}))}();
//# sourceMappingURL=@nangongpo-legacy-DNMPug1-.js.map