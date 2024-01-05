/*! For license information please see 390.js.LICENSE.txt */
"use strict";(self.webpackChunkcart_micro=self.webpackChunkcart_micro||[]).push([[390],{390:(t,e,r)=>{r.r(e),r.d(e,{default:()=>k});var n=r(822),o=r.n(n),a=r(379),i=r.n(a),c=r(795),l=r.n(c),u=r(569),s=r.n(u),f=r(565),m=r.n(f),d=r(216),p=r.n(d),h=r(589),y=r.n(h),v=r(87),g={};g.styleTagTransform=y(),g.setAttributes=m(),g.insert=s().bind(null,"head"),g.domAPI=l(),g.insertStyleElement=p(),i()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals,r(906);var b=r(465),w=r(721);function x(t){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},x(t)}function E(){E=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),c=new L(o||[]);return n(i,"_invoke",{value:S(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f={};function m(){}function d(){}function p(){}var h={};l(h,a,(function(){return this}));var y=Object.getPrototypeOf,v=y&&y(y(_([])));v&&v!==e&&r.call(v,a)&&(h=v);var g=p.prototype=m.prototype=Object.create(h);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,a,i,c){var l=s(t[n],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==x(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,c)}))}c(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return d.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),l(g,c,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function S(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function j(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){S(a,n,o,i,c,"next",t)}function c(t){S(a,n,o,i,c,"throw",t)}i(void 0)}))}}function N(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const O=function(t){var e,r,a=t.total,i=t.cart,c=t.userData,l=(e=(0,n.useState)(!0),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return N(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?N(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=l[0],s=l[1];console.log("car: ",i),(0,n.useEffect)((function(){window.innerWidth<745?s(!0):s(!1)}),[]);var f=function(){var t=j(E().mark((function t(){var e,r;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("userData: ",c),e=new Date,r={_id:(0,w.Z)(),products:i.slice(0,-1),buyer_id:c.id,buyer_full_name:c.full_name,buyer_name:c.username,buyer_address:c.address,buyer_email:c.email,total_price:a+4.25,date:"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear()," - ").concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds())},console.log("order:",r),t.next=6,fetch("http://localhost:8080/api/orders/create-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=j(E().mark((function t(){var e,r,n,o,a;return E().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,b.J)("pk_test_51O43ZgBj3594sT8O2eK39AXj8ZEfq93Di8B6R0Md7we8ceR3At0TPvmAWVprz7BoLu6ti9t36ETyE8Tr6lKM3LSw00aQiGmtGo");case 2:return e=t.sent,i.push({productId:"shipping_cost_1234",productImage:"https://res.cloudinary.com/dcuexe6p4/image/upload/v1703169127/hz24dwfwdpmiqzwrgfv9.jpg",productName:"Shipping",productPrice:4.25,productQuantity:1}),r={products:i},t.next=7,fetch("https://kozmaph-payment-service.onrender.com/api/payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 7:return n=t.sent,t.next=10,n.json();case 10:o=t.sent,(a=e.redirectToCheckout({sessionId:o.id})).error&&console.log(a.error),f();case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o().createElement("div",null,u?o().createElement("div",{className:"flex justify-content-evenly fixed bottom-0 left-0 border-1 border-gray-400 h-5rem bg-white mb-6",style:{width:"100vw"}},o().createElement("span",null,o().createElement("p",{className:"mb-0"},"All Total"),o().createElement("p",{className:"mt-1"},"32 $")),o().createElement("button",{className:"my-3 w-12rem border-none p-3 border-round-sm bg-orange-300 font-Ubuntu cursor-pointer"},"Confirm Order")):o().createElement("div",{className:"w-20rem h-20rem mt-5 border-1s sticky right-0 top-0 flex flex-column align-items-between ml-4"},o().createElement("div",{className:"w-18rem h-15rem border-1 border-round-md mt-3 border-gray-500 p-3"},o().createElement("p",{className:"font-bold"},"Order Summary"),o().createElement("hr",null),o().createElement("p",null,"Product Total: ",a," $"),o().createElement("p",null,"Shipping: 4.25 $"),o().createElement("hr",null),o().createElement("p",null,"All Total: ",a+4.25," $")),o().createElement("button",{onClick:m,className:"mt-3 w-18rem border-none p-3 text-white border-round-sm bg-orange-500 font-Ubuntu cursor-pointer"},"Confirm Order")))};function L(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return _(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const A=function(t){var e=t.sendToParentUnitPrice,r=t.productData,a=t.removeProduct,i=L((0,n.useState)(r.productPrice),2),c=(i[0],i[1]),l=L((0,n.useState)(1),2),u=(l[0],l[1],L((0,n.useState)(r.productPrice/r.productQuantity),2)),s=u[0];return u[1],console.log("productDataSSS: ",r),o().createElement("div",{className:"flex flex-column justify-content-center align-items-between p-4 pt-2 border-bottom-1 border-gray-400 font-Ubuntu"},o().createElement("div",{className:"flex flex-column justify-content-between align-items-center sm:flex-row"},o().createElement("img",{src:r.productImage,alt:"product-image",className:"w-7rem mr-0 mt-3 border-round-sm sm:mr-5 sm:w-5rem"}),o().createElement("span",{className:"flex flex-column justify-content-between align-items-center mt-4 w-full sm:mt-0 xl:flex-row"},o().createElement("span",{className:"flex flex-column justify-content-centers align-items-center mr-0 sm:align-items-start sm:mr-5"},o().createElement("p",{className:"my-1 max-w-25rem"},r.productName),o().createElement("p",{className:"my-1 text-sm"},"Estimated Shipping: Within 9 days")),o().createElement("span",{className:"flex mt-4 justify-content-between align-items-center w-12rem lg:w-15rem lg:mt-0"},o().createElement("span",{className:"flex justify-content-between align-items-center ml-2s"},o().createElement("button",{onClick:function(){r.productQuantity=r.productQuantity+1,c(r.productPrice+s),e(s,"increase",r.productId)},className:"w-1rem h-1rem flex justify-content-center align-items-center surface-800 border-none border-round-sm cursor-pointer"},o().createElement("i",{className:"pi pi-plus text-white",style:{fontSize:"10px"}})),o().createElement("span",{className:"mx-2 text-xl xl:text-2xl"},r.productQuantity),o().createElement("button",{onClick:function(){r.productQuantity>1&&(r.productQuantity=r.productQuantity-1,c(r.productPrice-s),e(s,"decrease",r.productId))},className:"w-1rem h-1rem flex justify-content-center align-items-center surface-800 border-none border-round-sm cursor-pointer"},o().createElement("i",{className:"pi pi-minus text-white",style:{fontSize:"10px"}}))),o().createElement("span",null,r.productPrice*r.productQuantity," $"),o().createElement("i",{onClick:function(){a(r.productId)},className:"pi pi-trash cursor-pointer"})))))};function P(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return I(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const T=function(){var t=P((0,n.useState)(0),2),e=t[0],r=(t[1],P((0,n.useState)(!0),2)),a=(r[0],r[1]),i=P((0,n.useState)(0),2),c=i[0],l=i[1],u=P((0,n.useState)(),2),s=u[0],f=u[1],m=P((0,n.useState)({}),2),d=m[0],p=m[1],h=function(t,e){"increase"===e?(l(c+t),console.log("increase",c)):(l(c-t),console.log("decrease",c))},y=function(t){var e,r=localStorage.getItem("CurrentUserData"),n=JSON.parse(r),o=[];s.forEach((function(t){o.push(t)})),o=o.filter((function(e){return e.productId!==t})),null==n||n.cart.splice(0,null==n||null===(e=n.cart)||void 0===e?void 0:e.length),n.cart=o,localStorage.setItem("CurrentUserData",JSON.stringify(n)),f(o)};return(0,n.useEffect)((function(){var t=localStorage.getItem("CurrentUserData"),e=JSON.parse(t);f(null==e?void 0:e.cart),function(t){h();for(var e=0,r=0;r<(null==t?void 0:t.length);r++){var n;e+=null===(n=t[r])||void 0===n?void 0:n.productPrice,console.log("total: ",e)}l(e)}(null==e?void 0:e.cart),console.log("user: ",null==e?void 0:e.cart),p(e),window.innerWidth<745?a(!0):a(!1)}),[]),o().createElement("div",{className:"font-Ubuntu flex justify-content-between relative"},o().createElement("div",{className:"mt-5"},0===(null==s?void 0:s.length)&&o().createElement("div",{class:"flex justify-content-center w-full mt-4"},"Cart is empty."),null==s?void 0:s.map((function(t,e){return o().createElement(A,{key:e,productData:t,sendToParentUnitPrice:h,removeProduct:y})}))),o().createElement(O,{cart:s,price:e,total:c,userData:d}))},k=function(){return o().createElement("div",{className:"font-Ubuntu"},o().createElement(T,null))}},87:(t,e,r)=>{r.d(e,{Z:()=>c});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([t.id,".font-Ubuntu{\r\n    font-family: 'Ubuntu', sans-serif;\r\n}\r\n",""]);const c=i}}]);