(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3728],{8152:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Service-Researchtaxcredit",function(){return i(8270)}])},3538:function(e,t,i){"use strict";var l=i(5893),n=(i(7294),i(1664)),a=i.n(n);t.Z=function(e){var t=e.pageTitle,i=e.homePageUrl,n=e.homePageText,s=e.activePageText,r=e.imgClass;return(0,l.jsx)("div",{className:"page-title-area ".concat(r),style:{fontFamily:"Digikala"},children:(0,l.jsx)("div",{className:"d-table",children:(0,l.jsx)("div",{className:"d-table-cell",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"page-title-content",children:[(0,l.jsx)("h2",{style:{fontFamily:"Digikala"},children:t}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{style:{fontFamily:"Digikala"},children:(0,l.jsx)(a(),{href:i,children:(0,l.jsx)("a",{children:n})})}),(0,l.jsx)("li",{className:"active",style:{fontFamily:"Digikala"},children:s})]})]})})})})})}},638:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var i=s.default,a=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};l(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=n({},a,e));if((a=n({},a,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");a.suspense&&(delete a.ssr,delete a.loading);a.loadableGenerated&&delete(a=n({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,r(i,a);delete a.ssr}return i(a)},t.noSSR=r;var n=i(6495).Z,a=i(2648).Z,s=(a(i(7294)),a(i(4302)));function r(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var l=(0,i(2648).Z)(i(7294)).default.createContext(null);t.LoadableContext=l},4302:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(9658).Z,n=i(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(6495).Z,s=(0,i(2648).Z)(i(7294)),r=i(6319),o=i(1688).useSyncExternalStore,c=[],u=[],d=!1;function f(e){var t=e(),i={loading:!0,loaded:null,error:null};return i.promise=t.then((function(e){return i.loading=!1,i.loaded=e,e})).catch((function(e){throw i.loading=!1,i.error=e,e})),i}var y=function(){function e(t,i){l(this,e),this._loadFn=t,this._opts=i,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return n(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,i=this._opts;t.loading&&("number"===typeof i.delay&&(0===i.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),i.delay)),"number"===typeof i.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),i.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var i=function(){if(!c){var t=new y(e,n);c={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return c.promise()},l=function(){i();var e=s.default.useContext(r.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach((function(t){e(t)}))},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=s.default.lazy(n.loader));var c=null;if(!d){var f=n.webpack?n.webpack():n.modules;f&&u.push((function(e){var t=!0,l=!1,n=void 0;try{for(var a,s=f[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var r=a.value;if(-1!==e.indexOf(r))return i()}}catch(o){l=!0,n=o}finally{try{t||null==s.return||s.return()}finally{if(l)throw n}}}))}var h=n.suspense?function(e,t){return l(),s.default.createElement(n.lazy,a({},e,{ref:t}))}:function(e,t){l();var i=o(c.subscribe,c.getCurrentValue,c.getCurrentValue);return s.default.useImperativeHandle(t,(function(){return{retry:c.retry}}),[]),s.default.useMemo((function(){return i.loading||i.error?s.default.createElement(n.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:c.retry}):i.loaded?s.default.createElement((t=i.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,i])};return h.preload=function(){return i()},h.displayName="LoadableComponent",s.default.forwardRef(h)}(f,e)}function m(e,t){for(var i=[];e.length;){var l=e.pop();i.push(l(t))}return Promise.all(i).then((function(){if(e.length)return m(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){m(c).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var i=function(){return d=!0,t()};m(u,e).then(i,i)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var x=h;t.default=x},8270:function(e,t,i){"use strict";i.r(t);var l=i(603),n=i(5893),a=i(7294),s=i(5829),r=i(3538),o=i(7282),c=i(5245),u=i(5152);i.n(u)()(i.e(5518).then(i.t.bind(i,8694,23)),{loadableGenerated:{webpack:function(){return[8694]}}});t.default=function(){var e=(0,l.Z)(a.useState(!1),2),t=(e[0],e[1]);return a.useEffect((function(){t(!0)}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{}),(0,n.jsx)(r.Z,{pageTitle:"\u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647",homePageUrl:"/",homePageText:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc",activePageText:"\u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647",imgClass:"bg-1"}),(0,n.jsx)("div",{className:"services-details-area ptb-100",style:{fontFamily:"Digikala",textAlign:"justify"},children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("div",{className:"row"}),(0,n.jsx)("div",{className:"services-details-text",children:(0,n.jsx)("p",{style:{fontFamily:"Digikala"},children:"\u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647 (R&D Tax Credit) \u06cc\u06a9 \u0646\u0648\u0639 \u062e\u0627\u0635 \u0627\u0632 \u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0628\u0631\u0627\u06cc \u062a\u0634\u0648\u06cc\u0642 \u0634\u0631\u06a9\u062a \u200c\u0647\u0627 \u0628\u0647 \u0633\u0631\u0645\u0627\u06cc\u0647 \u200c\u06af\u0630\u0627\u0631\u06cc \u062f\u0631 \u0646\u0648\u0622\u0648\u0631\u06cc \u0648 \u062a\u0648\u0633\u0639\u0647 \u0641\u0646\u0627\u0648\u0631\u06cc\u200c \u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0637\u0631\u0627\u062d\u06cc \u0634\u062f\u0647 \u0627\u0633\u062a. \u0627\u06cc\u0646 \u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u0628\u0647 \u0634\u0631\u06a9\u062a \u200c\u0647\u0627 \u0627\u062c\u0627\u0632\u0647 \u0645\u06cc \u200c\u062f\u0647\u062f \u06a9\u0647 \u0628\u062e\u0634\u06cc \u0627\u0632 \u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647 \u062e\u0648\u062f \u0631\u0627 \u0627\u0632 \u0645\u0627\u0644\u06cc\u0627\u062a \u200c\u0647\u0627\u06cc \u062e\u0648\u062f \u06a9\u0633\u0631 \u06a9\u0646\u0646\u062f \u06a9\u0647 \u0634\u0627\u0645\u0644 \u0634\u0631\u06a9\u062a \u0647\u0627\u06cc \u062f\u0627\u0646\u0634 \u0628\u0646\u06cc\u0627\u0646 \u0646\u06cc\u0632 \u0645\u06cc \u06af\u0631\u062f\u062f."})}),(0,n.jsx)("div",{className:"scrives-item-2 mt-4 ",children:(0,n.jsx)("div",{className:"row align-items-center",children:(0,n.jsx)("div",{className:"col-lg-15",children:(0,n.jsxs)("ul",{style:{fontFamily:"Digikala"},children:[(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:"\u0627\u0647\u062f\u0627\u0641 \u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u062a\u0634\u0648\u06cc\u0642 \u0628\u0647 \u0646\u0648\u0622\u0648\u0631\u06cc : "}),"\u0627\u0641\u0632\u0627\u06cc\u0634 \u0627\u0646\u06af\u06cc\u0632\u0647 \u0634\u0631\u06a9\u062a\u200c \u0647\u0627 \u0628\u0631\u0627\u06cc \u0633\u0631\u0645\u0627\u06cc\u0647\u200c \u06af\u0630\u0627\u0631\u06cc \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u200c\u0647\u0627\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647."]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0627\u0641\u0632\u0627\u06cc\u0634 \u0631\u0642\u0627\u0628\u062a \u200c\u067e\u0630\u06cc\u0631\u06cc:  "}),"\u06a9\u0645\u06a9 \u0628\u0647 \u0634\u0631\u06a9\u062a \u200c\u0647\u0627 \u0628\u0631\u0627\u06cc \u0628\u0647\u0628\u0648\u062f \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0648 \u0641\u0631\u0622\u06cc\u0646\u062f\u0647\u0627\u06cc \u062e\u0648\u062f \u0648 \u062f\u0631 \u0646\u062a\u06cc\u062c\u0647 \u0627\u0641\u0632\u0627\u06cc\u0634 \u0631\u0642\u0627\u0628\u062a \u200c\u067e\u0630\u06cc\u0631\u06cc \u062f\u0631 \u0628\u0627\u0632\u0627\u0631\u0647\u0627\u06cc \u062c\u0647\u0627\u0646\u06cc."]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0627\u06cc\u062c\u0627\u062f \u0627\u0634\u062a\u063a\u0627\u0644:   "}),"\u062a\u062d\u0631\u06cc\u06a9 \u0627\u06cc\u062c\u0627\u062f \u0641\u0631\u0635\u062a \u200c\u0647\u0627\u06cc \u0634\u063a\u0644\u06cc \u062f\u0631 \u0628\u062e\u0634 \u200c\u0647\u0627\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647."]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:"\u062a\u0648\u0633\u0639\u0647 \u0627\u0642\u062a\u0635\u0627\u062f\u06cc:  "}),"\u062a\u0642\u0648\u06cc\u062a \u0631\u0634\u062f \u0627\u0642\u062a\u0635\u0627\u062f\u06cc \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0627\u0641\u0632\u0627\u06cc\u0634 \u0628\u0647\u0631\u0647 \u200c\u0648\u0631\u06cc \u0648 \u062a\u0648\u0644\u06cc\u062f \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u062c\u062f\u06cc\u062f."]})]})]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0646\u062d\u0648\u0647 \u06a9\u0627\u0631\u06a9\u0631\u062f \u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647 "}),(0,n.jsx)("p",{children:" \u0634\u0631\u06a9\u062a \u200c\u0647\u0627 \u0645\u06cc \u200c\u062a\u0648\u0627\u0646\u0646\u062f \u0628\u062e\u0634\u06cc \u0627\u0632 \u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647 \u062e\u0648\u062f \u0631\u0627 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u0645\u0637\u0627\u0644\u0628\u0647 \u06a9\u0646\u0646\u062f. \u0627\u06cc\u0646 \u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0634\u0627\u0645\u0644 \u0645\u0648\u0627\u0631\u062f \u0632\u06cc\u0631 \u0628\u0627\u0634\u062f:"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627\u06cc \u062f\u0633\u062a\u0645\u0632\u062f:  "}),"\u062d\u0642\u0648\u0642 \u0648 \u062f\u0633\u062a\u0645\u0632\u062f \u06a9\u0627\u0631\u06a9\u0646\u0627\u0646 \u0645\u0634\u063a\u0648\u0644 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647\u200c \u0647\u0627\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647."]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627\u06cc \u0645\u0648\u0627\u062f \u0648 \u0644\u0648\u0627\u0632\u0645:   "}),"\u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0645\u0648\u0627\u062f \u0627\u0648\u0644\u06cc\u0647 \u0648 \u0644\u0648\u0627\u0632\u0645 \u0645\u0635\u0631\u0641\u06cc \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u200c\u0647\u0627."]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0647\u0632\u06cc\u0646\u0647\u200c \u0647\u0627\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0642\u0631\u0627\u0631\u062f\u0627\u062f\u06cc:   "}),"\u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062a\u062d\u0642\u06cc\u0642\u0627\u062a\u06cc \u06a9\u0647 \u0628\u0647 \u0635\u0648\u0631\u062a \u0642\u0631\u0627\u0631\u062f\u0627\u062f\u06cc \u0628\u0647 \u0634\u0631\u06a9\u062a \u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0648\u0627\u06af\u0630\u0627\u0631 \u0634\u062f\u0647 \u0627\u0633\u062a."]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627\u06cc \u062a\u062c\u0647\u06cc\u0632\u0627\u062a:   "}),"\u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627\u06cc \u062e\u0631\u06cc\u062f \u062a\u062c\u0647\u06cc\u0632\u0627\u062a \u0648\u06cc\u0698\u0647 \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647."]})]})]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0645\u0632\u0627\u06cc\u0627\u06cc \u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647 "}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u06a9\u0627\u0647\u0634 \u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc:   "}),"\u06a9\u0627\u0647\u0634 \u0645\u0633\u062a\u0642\u06cc\u0645 \u0645\u0628\u0644\u063a \u0645\u0627\u0644\u06cc\u0627\u062a \u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u06a9\u0647 \u0645\u06cc \u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0647 \u0628\u0647\u0628\u0648\u062f \u0646\u0642\u062f\u06cc\u0646\u06af\u06cc \u0634\u0631\u06a9\u062a \u200c\u0647\u0627 \u06a9\u0645\u06a9 \u06a9\u0646\u062f."]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0627\u0641\u0632\u0627\u06cc\u0634 \u0633\u0631\u0645\u0627\u06cc\u0647\u200c \u06af\u0630\u0627\u0631\u06cc \u062f\u0631 \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647:  "}),"\u0628\u0627 \u06a9\u0627\u0647\u0634 \u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627\u06cc \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc\u060c \u0634\u0631\u06a9\u062a \u200c\u0647\u0627 \u0645\u0645\u06a9\u0646 \u0627\u0633\u062a \u0627\u0646\u06af\u06cc\u0632\u0647 \u0628\u06cc\u0634\u062a\u0631\u06cc \u0628\u0631\u0627\u06cc \u0633\u0631\u0645\u0627\u06cc\u0647\u200c \u06af\u0630\u0627\u0631\u06cc \u062f\u0631 \u067e\u0631\u0648\u0698 \u0647\u200c\u0647\u0627\u06cc \u062a\u062d\u0642\u06cc\u0642 \u0648 \u062a\u0648\u0633\u0639\u0647 \u067e\u06cc\u062f\u0627 \u06a9\u0646\u0646\u062f."]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("i",{className:"flaticon-tick"}),(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0627\u0641\u0632\u0627\u06cc\u0634 \u0646\u0648\u0622\u0648\u0631\u06cc \u0648 \u0628\u0647\u0631\u0647 \u200c\u0648\u0631\u06cc:    "}),"\u062a\u0634\u0648\u06cc\u0642 \u0628\u0647 \u062a\u0648\u0633\u0639\u0647 \u0641\u0646\u0627\u0648\u0631\u06cc\u200c \u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0648 \u0628\u0647\u0628\u0648\u062f \u0641\u0631\u0622\u06cc\u0646\u062f\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u06a9\u0647 \u0645\u0646\u062c\u0631 \u0628\u0647 \u0627\u0641\u0632\u0627\u06cc\u0634 \u0628\u0647\u0631\u0647 \u200c\u0648\u0631\u06cc \u0648 \u06a9\u06cc\u0641\u06cc\u062a \u0645\u062d\u0635\u0648\u0644\u0627\u062a \u0645\u06cc \u200c\u0634\u0648\u062f."]})]})]}),(0,n.jsxs)("li",{style:{fontFamily:"Digikala"},children:[(0,n.jsx)("b",{style:{fontFamily:"Digikala"},children:" \u0646\u062d\u0648\u0647 \u0645\u062d\u0627\u0633\u0628\u0647 \u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u0645\u0648\u062f\u06cc\u0627\u0646 "}),(0,n.jsx)("p",{children:"\u0645\u062d\u0627\u0633\u0628\u0647 \u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u0645\u0648\u062f\u06cc\u0627\u0646 \u06cc\u06a9 \u0641\u0631\u0622\u06cc\u0646\u062f \u0686\u0646\u062f \u0645\u0631\u062d\u0644\u0647 \u200c\u0627\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0634\u0627\u0645\u0644 \u0634\u0646\u0627\u0633\u0627\u06cc\u06cc \u0647\u0632\u06cc\u0646\u0647 \u200c\u0647\u0627\u06cc \u0648\u0627\u062c\u062f \u0634\u0631\u0627\u06cc\u0637\u060c \u062a\u0639\u06cc\u06cc\u0646 \u0645\u06cc\u0632\u0627\u0646 \u0627\u0639\u062a\u0628\u0627\u0631 \u0645\u062c\u0627\u0632 \u0648 \u0627\u0639\u0645\u0627\u0644 \u0622\u0646 \u0628\u0647 \u0645\u0627\u0644\u06cc\u0627\u062a \u200c\u0647\u0627\u06cc \u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u0645\u06cc \u200c\u0634\u0648\u062f."})]})]})})})}),(0,n.jsx)("div",{className:"scrives-item-3 mt-4",children:(0,n.jsxs)("div",{className:"row align-items-center",children:[(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"social",children:(0,n.jsxs)("ul",{className:"social-link",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",children:(0,n.jsx)("i",{className:"bx bxl-facebook"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.twitter.com/",target:"_blank",children:(0,n.jsx)("i",{className:"bx bxl-twitter"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.pinterest.com/",target:"_blank",children:(0,n.jsx)("i",{className:"bx bxl-pinterest-alt"})})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",children:(0,n.jsx)("i",{className:"bx bxl-instagram"})})})]})})}),(0,n.jsx)("div",{className:"col-lg-6",children:(0,n.jsx)("div",{className:"share",children:(0,n.jsxs)("a",{href:"#",children:[(0,n.jsx)("i",{className:"bx bx-share-alt"})," \u0627\u0634\u062a\u0631\u0627\u06a9 \u06af\u0630\u0627\u0631\u06cc"]})})})]})})]})}),(0,n.jsx)(o.Z,{}),(0,n.jsx)(c.Z,{})]})}},5152:function(e,t,i){e.exports=i(638)},1163:function(e,t,i){e.exports=i(387)},3250:function(e,t,i){"use strict";var l=i(7294);var n="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=l.useState,s=l.useEffect,r=l.useLayoutEffect,o=l.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!n(e,i)}catch(l){return!0}}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var i=t(),l=a({inst:{value:i,getSnapshot:t}}),n=l[0].inst,u=l[1];return r((function(){n.value=i,n.getSnapshot=t,c(n)&&u({inst:n})}),[e,i,t]),s((function(){return c(n)&&u({inst:n}),e((function(){c(n)&&u({inst:n})}))}),[e]),o(i),i};t.useSyncExternalStore=void 0!==l.useSyncExternalStore?l.useSyncExternalStore:u},1688:function(e,t,i){"use strict";e.exports=i(3250)},9396:function(e,t,i){"use strict";function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}i.d(t,{Z:function(){return l}})},9534:function(e,t,i){"use strict";function l(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}i.d(t,{Z:function(){return l}})}},function(e){e.O(0,[1664,3967,5829,9774,2888,179],(function(){return t=8152,e(e.s=t);var t}));var t=e.O();_N_E=t}]);