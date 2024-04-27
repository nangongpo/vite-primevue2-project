import{_ as fe,a as de,b as pe,c as he,d as me,e as ve,f as ye,g as ge}from"./app.mock.server-BptdGXsI.js";import{n as _e,r as se,g as Ee,a as be,s as Q,b as Re}from"./app.component-DQmWytpG.js";import{N as ee,V as ne}from"./app.core-BOMZqaWx.js";import{c as we,P as Te,T as xe,C as Oe,B as Le,d as Ae,R as Ce,S as Ne,e as Pe}from"./primevue2-z8ODENUo.js";import"./vite-plugin-fake-server-4rIte7rE.js";import"./whatwg-fetch-DzgvNDjV.js";import"./resize-observer-polyfill-B1PUzC5B.js";import"./prismjs-CUvZdSMw.js";import"./@nangongpo-5I40lFwe.js";function Ye(){import.meta.url,import("_").catch(()=>1),async function*(){}().next()}(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))h(f);new MutationObserver(f=>{for(const l of f)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&h(d)}).observe(document,{childList:!0,subtree:!0});function r(f){const l={};return f.integrity&&(l.integrity=f.integrity),f.referrerPolicy&&(l.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?l.credentials="include":f.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function h(f){if(f.ep)return;f.ep=!0;const l=r(f);fetch(f.href,l)}})();window.__VITE__PLUGIN__FAKE__SERVER__={meta:{name:"vite-plugin-fake-server",version:"2.1.1",type:"module",license:"MIT",author:"Condor Hero",description:"A fake server plugin for Vite.",exports:{".":{require:"./dist/index.cjs",import:"./dist/index.mjs"},"./client":{require:"./dist/client.cjs",import:"./dist/client.mjs"}},main:"dist/index.cjs",module:"dist/index.mjs",types:"dist/index.d.cts",typesVersions:{"*":{"*":["./dist/*","./dist/index.d.ts"]}},files:["dist"],keywords:["vite-plugin-fake-server","vite-plugin-fake","vite-plugin-faker","vite-plugin-mock-server","vite-plugin-mock","faker-server"],repository:{type:"git",url:"git+https://github.com/condorheroblog/vite-plugin-fake-server.git",directory:"packages/vite-plugin-fake-server"},bugs:{url:"https://github.com/condorheroblog/vite-plugin-fake-server/issues"},homepage:"https://github.com/condorheroblog/vite-plugin-fake-server/blob/main/README.md",scripts:{prepublishOnly:"nr build",test:"vitest",dev:"esno ./src/index.ts",build:"rimraf dist && rollup -c","build:watch":"rimraf dist && rollup -c -w",typecheck:"tsc --noEmit"},dependencies:{"bundle-import":"^0.0.1",chokidar:"^3.5.3","fast-glob":"^3.3.2","path-to-regexp":"^6.2.1",picocolors:"^1.0.0"},devDependencies:{vite:"^5.0.11"},publishConfig:{access:"public",registry:"https://registry.npmjs.org"}},vitePluginFakeServerOptions:{include:"mock",exclude:["data"],infixName:!1,extensions:["js"],enableProd:!0,enableDev:!0,watch:!0,logger:!0,timeout:1e3,basename:"/prod-api",headers:{},build:!1,http2:!0}};const ae=Object.assign({"/mock/country.js":fe,"/mock/customer.js":de,"/mock/event.js":pe,"/mock/icons.js":he,"/mock/node.js":me,"/mock/photo.js":ve,"/mock/product.js":ye,"/mock/user.js":ge}),Se=Object.keys(ae).reduce((e,a)=>{var h,f;const r=(h=ae[a])!=null?h:{};if(r.default)for(const l of Object.keys(r)){const d=(f=ae[a][l])!=null?f:[],T=Array.isArray(d)?[...d]:[d];return[...e,...T]}else return e},[]);window.__VITE__PLUGIN__FAKE__SERVER__.fakeModuleList=Se;function je(){const e=o=>{try{return new URL(o),!0}catch(t){return!1}},a=(o,t)=>Array.prototype.slice.call(o,t);let r=null;typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?r=self:typeof global<"u"?r=global:window&&(r=window);const h=r,f=r.document,l=["load","loadend","loadstart"],d=["progress","abort","error","timeout"],T=o=>["returnValue","totalSize","position"].includes(o),v=function(o,t){for(let n in o){if(T(n))continue;const i=o[n];try{t[n]=i}catch(c){}}return t},m=function(o,t,n){const i=c=>function(y){const s={};for(let C in y){if(T(C))continue;const U=y[C];s[C]=U===t?n:U}return n.dispatchEvent(c,s)};for(let c of Array.from(o))n._has(c)&&(t["on".concat(c)]=i(c))},g=function(o){if(f&&f.createEventObject!=null){const t=f.createEventObject();return t.type=o,t}try{return new Event(o)}catch(t){return{type:o}}},N=function(o){let t={};const n=c=>t[c]||[],i={};return i.addEventListener=function(c,y,s){t[c]=n(c),!(t[c].indexOf(y)>=0)&&(s=s===void 0?t[c].length:s,t[c].splice(s,0,y))},i.removeEventListener=function(c,y){if(c===void 0){t={};return}y===void 0&&(t[c]=[]);const s=n(c).indexOf(y);s!==-1&&n(c).splice(s,1)},i.dispatchEvent=function(){const c=a(arguments),y=c.shift();o||(c[0]=v(c[0],g(y)),Object.defineProperty(c[0],"target",{writable:!1,value:this}));const s=i["on".concat(y)];s&&s.apply(i,c);const C=n(y).concat(n("*"));for(let U=0;U<C.length;U++)C[U].apply(i,c)},i._has=c=>!!(t[c]||i["on".concat(c)]),o&&(i.listeners=c=>a(n(c)),i.on=i.addEventListener,i.off=i.removeEventListener,i.fire=i.dispatchEvent,i.once=function(c,y){var s=function(){return i.off(c,s),y.apply(null,arguments)};return i.on(c,s)},i.destroy=()=>t={}),i},I="\r\n",L=function(o){return Object.entries(o).map(([i,c])=>"".concat(i.toLowerCase(),": ").concat(c)).join(I)},b=function(o,t){const n=o.split(I);t==null&&(t={});for(let i of n)if(/([^:]+):\s*(.+)/.test(i)){const c=RegExp.$1!=null?RegExp.$1.toLowerCase():void 0,y=RegExp.$2;t[c]==null&&(t[c]=y)}return t};var x={convert:function(o,t){switch(typeof o){case"object":return L(o);case"string":return b(o,t)}return[]}};const E=N(!0),O=o=>o===void 0?null:o,R=h.XMLHttpRequest,p=function(){const t=new R,n={};let i=null,c,y,s;var C=0;const U=function(){if(s.status=i||t.status,i!==-1&&(s.statusText=t.statusText),i!==-1){const _=x.convert(t.getAllResponseHeaders());for(let w in _){const S=_[w];if(!s.headers[w]){const F=w.toLowerCase();s.headers[F]=S}}return}},G=function(){if(!t.responseType||t.responseType==="text"){s.text=t.responseText,s.data=t.responseText;try{s.xml=t.responseXML}catch(_){}}else t.responseType==="document"?(s.xml=t.responseXML,s.data=t.responseXML):s.data=t.response;"responseURL"in t&&(s.responseURL=t.responseURL)},q=function(){u.status=s.status,u.statusText=s.statusText},z=function(){var _,w;if("text"in s&&(u.responseText=s.text),"xml"in s&&(u.responseXML=s.xml),"data"in s)u.response=s.data;else{const S={"":"",text:"",json:null,blob:new Blob([],{type:new Headers((_=s.headers)!=null?_:{}).get("content-type")}),arraybuffer:new ArrayBuffer};u.response=S[u.responseType]}("responseURL"in s||n.url)&&(u.responseURL=(w=s.responseURL)!=null?w:e(n.url)?n.url:new URL(location.href).origin+n.url)},P=function(){c||u.dispatchEvent("load",{}),u.dispatchEvent("loadend",{}),c&&(u.readyState=0)},$=function(_){for(;_>C&&C<4;)u.readyState=++C,C===1&&u.dispatchEvent("loadstart",{}),C===2&&q(),C===4&&(q(),z()),u.dispatchEvent("readystatechange",{}),C===4&&(n.async===!1?P():setTimeout(P,0))},J=function(_){if(_!==4){$(_);return}const w=E.listeners("after");var S=function(){if(w.length>0){const F=w.shift();F.length===2?(F(n,s),S()):F.length===3&&n.async?F(n,s,S):S()}else $(4)};S()};var u=N();n.xhr=u,t.onreadystatechange=function(_){try{t.readyState===2&&U()}catch(w){}t.readyState===4&&(y=!1,U(),G()),J(t.readyState)};const W=function(){c=!0};u.addEventListener("error",W),u.addEventListener("timeout",W),u.addEventListener("abort",W),u.addEventListener("progress",function(_){C<3?J(3):t.readyState<=3&&u.dispatchEvent("readystatechange",{})}),"withCredentials"in t&&(u.withCredentials=!1),u.status=0;for(let _ of Array.from(d.concat(l)))u["on".concat(_)]=null;if(u.open=function(_,w,S,F,ie){C=0,c=!1,y=!1,n.headers={},n.headerNames={},n.status=0,n.method=_,n.url=w,n.async=S!==!1,n.user=F,n.pass=ie,s={},s.headers={},J(1)},u.send=function(_){let w,S;for(w of["type","timeout","withCredentials"])S=w==="type"?"responseType":w,S in u&&(n[w]=u[S]);n.body=_;const F=function(){m(d,t,u),u.upload&&m(d.concat(l),t.upload,u.upload),y=!0,t.open(n.method,n.url,n.async,n.user,n.pass);for(w of["type","timeout","withCredentials"])S=w==="type"?"responseType":w,w in n&&(t[S]=n[w]);for(let X in n.headers){const Y=n.headers[X];X&&t.setRequestHeader(X,Y)}t.send(n.body)},ie=E.listeners("before");var ue=function(){if(!ie.length)return F();const X=function(V){if(typeof V=="object"&&(typeof V.status=="number"||typeof s.status=="number")){v(V,s),"data"in V||(V.data=V.response||V.text),J(4);return}ue()};X.head=function(V){v(V,s),J(2)},X.progress=function(V){v(V,s),J(3)};const Y=ie.shift();Y.length===1?X(Y(n)):Y.length===2&&n.async?Y(n,X):X()};ue()},u.abort=function(){i=-1,y?t.abort():u.dispatchEvent("abort",{})},u.setRequestHeader=function(_,w){const S=_!=null?_.toLowerCase():void 0,F=n.headerNames[S]=n.headerNames[S]||_;n.headers[F]&&(w=n.headers[F]+", "+w),n.headers[F]=w},u.getResponseHeader=_=>O(s.headers[_?_.toLowerCase():void 0]),u.getAllResponseHeaders=()=>O(x.convert(s.headers)),t.overrideMimeType&&(u.overrideMimeType=function(){t.overrideMimeType.apply(t,arguments)}),t.upload){let _=N();u.upload=_,n.upload=_}return u.UNSENT=0,u.OPENED=1,u.HEADERS_RECEIVED=2,u.LOADING=3,u.DONE=4,u.response="",u.responseText="",u.responseXML=null,u.readyState=0,u.statusText="",u};p.UNSENT=0,p.OPENED=1,p.HEADERS_RECEIVED=2,p.LOADING=3,p.DONE=4;var j={patch(){R&&(h.XMLHttpRequest=p)},unpatch(){R&&(h.XMLHttpRequest=R)},Native:R,Xhook:p};function A(o,t){var n={};for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&t.indexOf(i)<0&&(n[i]=o[i]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,i=Object.getOwnPropertySymbols(o);c<i.length;c++)t.indexOf(i[c])<0&&Object.prototype.propertyIsEnumerable.call(o,i[c])&&(n[i[c]]=o[i[c]]);return n}function D(o,t,n,i){function c(y){return y instanceof n?y:new n(function(s){s(y)})}return new(n||(n=Promise))(function(y,s){function C(q){try{G(i.next(q))}catch(z){s(z)}}function U(q){try{G(i.throw(q))}catch(z){s(z)}}function G(q){q.done?y(q.value):c(q.value).then(C,U)}G((i=i.apply(o,t||[])).next())})}const M=h.fetch;function B(o){const t=["method","headers","body","mode","credentials","cache","redirect","referrer","referrerPolicy","integrity","keepalive","signal","url"];let n={};return t.forEach(i=>n[i]=o[i]),n}function K(o){return o instanceof Headers?re([...o.entries()]):Array.isArray(o)?re(o):o}function re(o){return o.reduce((t,[n,i])=>(t[n]=i,t),{})}const oe=function(o,t={headers:{}}){let n=Object.assign(Object.assign({},t),{isFetch:!0});if(o instanceof Request){const y=B(o),s=Object.assign(Object.assign({},K(y.headers)),K(n.headers));n=Object.assign(Object.assign(Object.assign({},y),t),{headers:s,acceptedRequest:!0,isFetch:!0})}else n.url=o;const i=E.listeners("before"),c=E.listeners("after");return new Promise(function(y,s){let C=y;const U=function(P){if(!c.length)return C(P);const $=c.shift();return $.length===2?($(n,P),U(P)):$.length===3?$(n,P,U):U(P)},G=function(P){if(P!==void 0){const $=new Response(P.body||P.text,P);Object.defineProperty($,"url",{value:e(n.url)?n.url:new URL(location.href).origin+n.url}),y($),U($);return}q()},q=function(){if(!i.length){z();return}const P=i.shift();if(P.length===1)return G(P(n));if(P.length===2)return P(n,G)},z=()=>D(this,void 0,void 0,function*(){const{url:P,isFetch:$,acceptedRequest:J}=n,u=A(n,["url","isFetch","acceptedRequest"]);return o instanceof Request&&u.body instanceof ReadableStream&&(u.body=yield new Response(u.body).text()),M(P,u).then(W=>U(W)).catch(function(W){return C=s,U(W),s(W)})});q()})};var te={patch(){M&&(h.fetch=oe)},unpatch(){M&&(h.fetch=M)},Native:M,Xhook:oe};const H=E;return H.EventEmitter=N,H.before=function(o,t){if(o.length<1||o.length>2)throw"invalid hook";return H.on("before",o,t)},H.after=function(o,t){if(o.length<2||o.length>3)throw"invalid hook";return H.on("after",o,t)},H.enable=function(){j.patch(),te.patch()},H.disable=function(){j.unpatch(),te.unpatch()},H.XMLHttpRequest=j.Native,H.fetch=te.Native,H.headers=x.convert,H.enable(),H}window.__VITE__PLUGIN__FAKE__SERVER__.xhook=je();function Me(e){for(var a=[],r=0;r<e.length;){var h=e[r];if(h==="*"||h==="+"||h==="?"){a.push({type:"MODIFIER",index:r,value:e[r++]});continue}if(h==="\\"){a.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if(h==="{"){a.push({type:"OPEN",index:r,value:e[r++]});continue}if(h==="}"){a.push({type:"CLOSE",index:r,value:e[r++]});continue}if(h===":"){for(var f="",l=r+1;l<e.length;){var d=e.charCodeAt(l);if(d>=48&&d<=57||d>=65&&d<=90||d>=97&&d<=122||d===95){f+=e[l++];continue}break}if(!f)throw new TypeError("Missing parameter name at ".concat(r));a.push({type:"NAME",index:r,value:f}),r=l;continue}if(h==="("){var T=1,v="",l=r+1;if(e[l]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(l));for(;l<e.length;){if(e[l]==="\\"){v+=e[l++]+e[l++];continue}if(e[l]===")"){if(T--,T===0){l++;break}}else if(e[l]==="("&&(T++,e[l+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(l));v+=e[l++]}if(T)throw new TypeError("Unbalanced pattern at ".concat(r));if(!v)throw new TypeError("Missing pattern at ".concat(r));a.push({type:"PATTERN",index:r,value:v}),r=l;continue}a.push({type:"CHAR",index:r,value:e[r++]})}return a.push({type:"END",index:r,value:""}),a}function He(e,a){a===void 0&&(a={});for(var r=Me(e),h=a.prefixes,f=h===void 0?"./":h,l="[^".concat(Z(a.delimiter||"/#?"),"]+?"),d=[],T=0,v=0,m="",g=function(A){if(v<r.length&&r[v].type===A)return r[v++].value},N=function(A){var D=g(A);if(D!==void 0)return D;var M=r[v],B=M.type,K=M.index;throw new TypeError("Unexpected ".concat(B," at ").concat(K,", expected ").concat(A))},I=function(){for(var A="",D;D=g("CHAR")||g("ESCAPED_CHAR");)A+=D;return A};v<r.length;){var L=g("CHAR"),b=g("NAME"),k=g("PATTERN");if(b||k){var x=L||"";f.indexOf(x)===-1&&(m+=x,x=""),m&&(d.push(m),m=""),d.push({name:b||T++,prefix:x,suffix:"",pattern:k||l,modifier:g("MODIFIER")||""});continue}var E=L||g("ESCAPED_CHAR");if(E){m+=E;continue}m&&(d.push(m),m="");var O=g("OPEN");if(O){var x=I(),R=g("NAME")||"",p=g("PATTERN")||"",j=I();N("CLOSE"),d.push({name:R||(p?T++:""),pattern:R&&!p?l:p,prefix:x,suffix:j,modifier:g("MODIFIER")||""});continue}N("END")}return d}function Ue(e,a){var r=[],h=ce(e,r,a);return Ie(h,r,a)}function Ie(e,a,r){r===void 0&&(r={});var h=r.decode,f=h===void 0?function(l){return l}:h;return function(l){var d=e.exec(l);if(!d)return!1;for(var T=d[0],v=d.index,m=Object.create(null),g=function(I){if(d[I]===void 0)return"continue";var L=a[I-1];L.modifier==="*"||L.modifier==="+"?m[L.name]=d[I].split(L.prefix+L.suffix).map(function(b){return f(b,L)}):m[L.name]=f(d[I],L)},N=1;N<d.length;N++)g(N);return{path:T,index:v,params:m}}}function Z(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function le(e){return e&&e.sensitive?"":"i"}function ke(e,a){if(!a)return e;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,h=0,f=r.exec(e.source);f;)a.push({name:f[1]||h++,prefix:"",suffix:"",modifier:"",pattern:""}),f=r.exec(e.source);return e}function De(e,a,r){var h=e.map(function(f){return ce(f,a,r).source});return new RegExp("(?:".concat(h.join("|"),")"),le(r))}function Fe(e,a,r){return qe(He(e,r),a,r)}function qe(e,a,r){r===void 0&&(r={});for(var h=r.strict,f=h===void 0?!1:h,l=r.start,d=l===void 0?!0:l,T=r.end,v=T===void 0?!0:T,m=r.encode,g=m===void 0?function(K){return K}:m,N=r.delimiter,I=N===void 0?"/#?":N,L=r.endsWith,b=L===void 0?"":L,k="[".concat(Z(b),"]|$"),x="[".concat(Z(I),"]"),E=d?"^":"",O=0,R=e;O<R.length;O++){var p=R[O];if(typeof p=="string")E+=Z(g(p));else{var j=Z(g(p.prefix)),A=Z(g(p.suffix));if(p.pattern)if(a&&a.push(p),j||A)if(p.modifier==="+"||p.modifier==="*"){var D=p.modifier==="*"?"?":"";E+="(?:".concat(j,"((?:").concat(p.pattern,")(?:").concat(A).concat(j,"(?:").concat(p.pattern,"))*)").concat(A,")").concat(D)}else E+="(?:".concat(j,"(").concat(p.pattern,")").concat(A,")").concat(p.modifier);else p.modifier==="+"||p.modifier==="*"?E+="((?:".concat(p.pattern,")").concat(p.modifier,")"):E+="(".concat(p.pattern,")").concat(p.modifier);else E+="(?:".concat(j).concat(A,")").concat(p.modifier)}}if(v)f||(E+="".concat(x,"?")),E+=r.endsWith?"(?=".concat(k,")"):"$";else{var M=e[e.length-1],B=typeof M=="string"?x.indexOf(M[M.length-1])>-1:M===void 0;f||(E+="(?:".concat(x,"(?=").concat(k,"))?")),B||(E+="(?=".concat(x,"|").concat(k,")"))}return new RegExp(E,le(r))}function ce(e,a,r){return e instanceof RegExp?ke(e,a):Array.isArray(e)?De(e,a,r):Fe(e,a,r)}window.__VITE__PLUGIN__FAKE__SERVER__.pathToRegexp={pathToRegexp:ce,match:Ue};const $e=window.__VITE__PLUGIN__FAKE__SERVER__.fakeModuleList,{pathToRegexp:Ve,match:Be}=window.__VITE__PLUGIN__FAKE__SERVER__.pathToRegexp;window.__VITE__PLUGIN__FAKE__SERVER__.xhook.before(async function(e,a){function r(v){return new Promise(m=>{const g=setTimeout(()=>{m(g),clearTimeout(g)},v)})}function h(v){let m="";try{m=JSON.parse(v)}catch(g){m=v}return m}async function f({URL:v,req:m,fakeModuleList:g,pathToRegexp:N,match:I,basename:L,defaultTimeout:b,globalResponseHeaders:k}){function x(E,O){const R=new v(E,"http://localhost:5173/").pathname,p=new v(O,"http://localhost:5173/").pathname;return R.endsWith("/")?R.slice(0,-1)+p:R+p}if(m.url){const E=new v(m.url,"http://localhost:5173/"),O=E.pathname,R=g.find(p=>{var M,B;if(!O||!p||!p.url)return!1;const j=(M=p.method)!=null?M:"GET",A=(B=m.method)!=null?B:"GET";if(j.toUpperCase()!==A.toUpperCase())return!1;const D=x(L,p.url);return N(D).test(O)});if(R){const{response:p,rawResponse:j,timeout:A=b,statusCode:D,statusText:M,url:B,headers:K={}}=R;A&&await r(A);const re=x(L,B),oe=I(re,{encode:encodeURI}),te=E.searchParams,H={};for(const[t,n]of te.entries())if(H.hasOwnProperty(t)){const i=H[t];Array.isArray(i)?i.push(n):H[t]=[i,n]}else H[t]=n;let o={};if(O){const t=oe(O);t&&(o=t.params)}return{response:p,rawResponse:j,timeout:A,statusCode:D!=null?D:200,statusText:M,url:m.url,query:H,params:o,responseHeaders:new Headers({...k,...K})}}}}const l={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"};function d(v){const m={};for(const[g,N]of v.entries())m[g]=N;return m}const T=await f({URL,req:e,fakeModuleList:$e,pathToRegexp:Ve,match:Be,basename:"/prod-api",defaultTimeout:1e3,globalResponseHeaders:{}});if(T){const{response:v,statusCode:m,statusText:g=l[m],url:N,query:I,params:L,responseHeaders:b}=T!=null?T:{},k="",x=typeof v=="function",E={};for(const R in e.headers)E[R.toLowerCase()]=e.headers[R];const O=!x||await Promise.resolve(v({url:N,body:h(e.body),rawBody:e.body,query:I,params:L,headers:E}));if(e.isFetch)typeof O=="string"?(b.get("Content-Type")||b.set("Content-Type","text/plain"),a(new Response(x?O:null,{statusText:k,status:m,headers:d(b)}))):(b.get("Content-Type")||b.set("Content-Type","application/json"),a(new Response(x?JSON.stringify(O,null,2):null,{statusText:k,status:m,headers:d(b)})));else{const R=x?{data:O}:{};if(!e.type||e.type.toLowerCase()==="text")b.get("Content-Type")||b.set("Content-Type","text/plain"),a({statusText:k,status:m,text:O,...R,headers:d(b)});else if(e.type.toLowerCase()==="json")b.get("Content-Type")||b.set("Content-Type","application/json"),a({statusText:k,status:m,...R,headers:d(b)});else if(e.type.toLowerCase()==="document"){b.get("Content-Type")||b.set("Content-Type","application/xml");const j=new DOMParser().parseFromString(O,"application/xml");a({statusText:k,status:m,xml:j,data:j,headers:d(b)})}else a({statusText:k,status:m,...R,headers:d(b)})}{const R=e.method?e.method.toUpperCase():"GET"}}else a()});const Ge={name:"App"};var Xe=function(){var a=this,r=a._self._c;return r("div",{attrs:{id:"app"}},[r(we),r("router-view")],1)},Ke=[],We=_e(Ge,Xe,Ke,!1,null,null,null,null);const ze=We.exports,Je={install(e,a={}){const{locale:r,inputStyle:h=!1,ripple:f=!1}=a;e.use(Te,{locale:r,ripple:f,inputStyle:h}),e.use(xe),e.use(Oe),e.directive("badge",Le),e.directive("tooltip",Ae),e.directive("ripple",Ce),e.directive("styleclass",Ne),e.component("Button",Pe)}};ee.configure({showSpinner:!1});const Qe=["/login","/auth-redirect"];se.beforeEach(async(e,a,r)=>{if(ee.start(),document.title=Ee(e.meta.title),be())if(e.path==="/login")r({path:"/"}),ee.done();else if(Q.getters.roles&&Q.getters.roles.length>0)r();else try{const{roles:l}=await Q.dispatch("user/getInfo");(await Q.dispatch("permission/generateRoutes",l)).forEach(T=>{se.addRoute(T)}),r({...e,replace:!0})}catch(l){await Q.dispatch("user/resetToken"),ne.prototype.$toast.add({severity:"error",summary:"错误信息",detail:l||"内部错误！",life:5e3}),r("/login?redirect=".concat(e.path)),ee.done()}else Qe.indexOf(e.path)!==-1?r():(r("/login?redirect=".concat(e.path)),ee.done())});se.afterEach(()=>{ee.done()});ne.config.productionTip=!1;ne.prototype.$publicUrl=Re;ne.use(Je,Q.state.settings);new ne({router:se,store:Q,render:e=>e(ze)}).$mount("#app");export{Ye as __vite_legacy_guard};
//# sourceMappingURL=index-DgK908NU.js.map
