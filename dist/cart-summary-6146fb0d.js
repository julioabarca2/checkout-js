(window.webpackJsonpCheckout=window.webpackJsonpCheckout||[]).push([[5],{1082:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};var c=r(1011),l=function(e){var t=e.children;return a.a.createElement("header",{className:"cart-header"},a.a.createElement("h3",{className:"cart-title optimizedCheckout-headingSecondary"},a.a.createElement(c.a,{id:"cart.cart_heading"})),t)},i=r(1035),u=r(1032),p=r(1036),s=r(1033),f=function(){return(f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},y=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.default=function(e){var t=e.storeCurrency,r=e.shopperCurrency,c=e.headerLink,d=e.additionalLineItems,m=e.lineItems,h=e.total,O=y(e,["storeCurrency","shopperCurrency","headerLink","additionalLineItems","lineItems","total"]),b=Object(n.useMemo)(function(){return function(e){return o({},e,{physicalItems:e.physicalItems.filter(function(e){return"string"!=typeof e.parentId}),digitalItems:e.digitalItems.filter(function(e){return"string"!=typeof e.parentId})})}(m)},[m]);return a.a.createElement("article",{className:"cart optimizedCheckout-orderSummary","data-test":"cart"},a.a.createElement(l,null,c),a.a.createElement(u.a,null,a.a.createElement(i.a,{items:b})),a.a.createElement(u.a,null,a.a.createElement(p.a,f({},O)),d),a.a.createElement(u.a,null,a.a.createElement(s.a,{orderAmount:h,shopperCurrencyCode:r.code,storeCurrencyCode:t.code})))}},1171:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(426),c=r(1082),l=r(1075),i=r(1084),u=r(1074),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};t.default=Object(o.a)(l.a)(function(e){var t=e.cartUrl,r=s(e,["cartUrl"]);return Object(i.a)(c.default)(p({},r,{cartUrl:t,headerLink:a.a.createElement(u.a,{url:t})}))})}}]);
//# sourceMappingURL=cart-summary-6146fb0d.js.map