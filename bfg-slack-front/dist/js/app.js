!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(e,n,t){var r=t(1),o=t(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),c=[];function a(e){for(var n=-1,t=0;t<c.length;t++)if(c[t].identifier===e){n=t;break}return n}function u(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],u=n.base?i[0]+n.base:i[0],s=t[u]||0,l="".concat(u," ").concat(s);t[u]=s+1;var f=a(l),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(c[f].references++,c[f].updater(d)):c.push({identifier:l,updater:m(d,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var l,f=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(n,o);else{var i=document.createTextNode(o),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(i,c[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var i=h++;t=v||(v=s(n)),r=d.bind(null,t,i,!1),o=d.bind(null,t,i,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=u(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);c[o].references--}for(var i=u(e,n),s=0;s<t.length;s++){var l=a(t[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}t=i}}}},function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(0);function r(e,n,t,r,o,i,c){try{var a=e[i](c),u=a.value}catch(e){return void t(e)}a.done?n(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var c=e.apply(n,t);function a(e){r(c,o,i,a,u,"next",e)}function u(e){r(c,o,i,a,u,"throw",e)}a(void 0)}))}}function i(){return(i=o(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://slack.com/api/oauth.access",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"code=".concat(n,"&client_id=752006658772.1466838087428&client_secret=354689b3087427b1d404d8e1ce070c46")});case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var c=function(e){return i.apply(this,arguments)};function a(e,n,t,r,o,i,c){try{var a=e[i](c),u=a.value}catch(e){return void t(e)}a.done?n(u):Promise.resolve(u).then(r,o)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))}}var s=function(){var e=window.bpRestApi,n=window.location.search,t=new URLSearchParams(n),r=t.get("code"),o=t.get("error"),i=function(){var n=u(regeneratorRuntime.mark((function n(t){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://".concat(window.location.host,"/wp-json/buddyboss/v1/members/").concat(t),{method:"GET",headers:{"X-WP-Nonce":e.nonce}});case 3:return r=n.sent,n.next=6,r.json();case 6:return o=n.sent,n.abrupt("return",o);case 10:n.prev=10,n.t0=n.catch(0),console.log("error");case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),a=function(){var n=u(regeneratorRuntime.mark((function n(t,r,o){var i,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("https://".concat(window.location.host,"/wp-json/buddyboss/v1/xprofile/50/data/4"),{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8","X-WP-Nonce":e.nonce},body:JSON.stringify({user_id:Number(e.sessionUserID),field_id:50,value:[t,"-",r]})});case 3:return i=n.sent,n.next=6,i.json();case 6:return c=n.sent,n.abrupt("return",c);case 10:n.prev=10,n.t0=n.catch(0),console.log("error: ",n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t,r){return n.apply(this,arguments)}}();return{init:function(){o?window.location.href="/":null!=r&&c(r).then((function(n){n.access_token;var t=n.team_id,r=n.user_id,o=n.team_name;a(r,t,o).then((function(n){i(Number(e.sessionUserID)).then((function(e){var n=e.link;window.location.href=n})).then((function(e){console.log(e)}))}))})).then((function(e){console.log(e)}))}}};(function(e){document.addEventListener("DOMContentLoaded",(function(){"slackConnect"===e&&s().init()}))})("slackConnect")}]);