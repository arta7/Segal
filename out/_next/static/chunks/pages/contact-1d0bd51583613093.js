(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9335],{8105:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n(5429)}])},3538:function(e,s,n){"use strict";var l=n(5893),t=(n(7294),n(1664)),a=n.n(t);s.Z=function(e){var s=e.pageTitle,n=e.homePageUrl,t=e.homePageText,c=e.activePageText,i=e.imgClass;return(0,l.jsx)("div",{className:"page-title-area ".concat(i),style:{fontFamily:"Digikala"},children:(0,l.jsx)("div",{className:"d-table",children:(0,l.jsx)("div",{className:"d-table-cell",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"page-title-content",children:[(0,l.jsx)("h2",{style:{fontFamily:"Digikala"},children:s}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{style:{fontFamily:"Digikala"},children:(0,l.jsx)(a(),{href:n,children:(0,l.jsx)("a",{children:t})})}),(0,l.jsx)("li",{className:"active",style:{fontFamily:"Digikala"},children:c})]})]})})})})})}},5378:function(e,s,n){"use strict";var l=n(7568),t=n(4924),a=n(6042),c=n(9396),i=n(7582),r=n(5893),o=n(7294),d=n(2283),u=n(9669),m=n.n(u),x=n(6455),h=n.n(x),j=n(7630),f=n.n(j),p=n(7105),g=f()(h()),b={name:"",email:"",number:"",subject:"",text:""};s.Z=function(){var e=(0,o.useState)(b),s=e[0],n=e[1],u=(0,d.cI)(),x=u.register,h=u.handleSubmit,j=u.errors,f=function(e){var l=e.target,i=l.name,r=l.value;n((function(e){return(0,c.Z)((0,a.Z)({},e),(0,t.Z)({},i,r))})),console.log(s)},v=function(){var e=(0,l.Z)((function(e){var l,t,a,c,r,o,d,u;return(0,i.__generator)(this,(function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),l="".concat(p.Z,"/api/contact"),t=s.name,a=s.email,c=s.number,r=s.subject,o=s.text,d={name:t,email:a,number:c,subject:r,text:o},[4,m().post(l,d)];case 1:return e.sent(),console.log(l),n(b),g.fire({title:"Congratulations!",text:"Your message was successfully send and will back to you soon",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),[3,3];case 2:return u=e.sent(),console.log(u),[3,3];case 3:return[2]}}))}));return function(s){return e.apply(this,arguments)}}();return(0,r.jsx)("div",{className:"main-contact-area contact ptb-100",style:{fontFamily:"Digikala"},children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("div",{className:"contact-wrap contact-pages mb-0",children:(0,r.jsx)("div",{className:"contact-form",children:(0,r.jsx)("form",{id:"contactForm",onSubmit:h(v),children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{children:"\u0646\u0627\u0645"}),(0,r.jsx)("input",{type:"text",name:"name",className:"form-control",placeholder:"\u0646\u0627\u0645 \u0634\u0645\u0627",value:s.name,onChange:f,ref:x({required:!0})}),(0,r.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:j.name&&"\u0646\u0627\u0645 \u0636\u0631\u0648\u0631\u06cc \u0647\u0633\u062a."})]})}),(0,r.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{children:"\u0627\u06cc\u0645\u06cc\u0644"}),(0,r.jsx)("input",{type:"text",name:"email",className:"form-control",placeholder:"\u0627\u06cc\u0645\u06cc\u0644 \u0634\u0645\u0627",value:s.email,onChange:f,ref:x({required:!0,pattern:/^\S+@\S+$/i})}),(0,r.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:j.email&&"\u0627\u06cc\u0645\u06cc\u0644 \u0636\u0631\u0648\u0631\u06cc \u0647\u0633\u062a."})]})}),(0,r.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{children:"\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633"}),(0,r.jsx)("input",{type:"text",name:"number",className:"form-control",placeholder:"\u062a\u0644\u0641\u0646 \u0634\u0645\u0627",value:s.number,onChange:f,ref:x({required:!0})}),(0,r.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:j.number&&"\u0634\u0645\u0627\u0631\u0647 \u062a\u0645\u0627\u0633 \u0636\u0631\u0648\u0631\u06cc \u0647\u0633\u062a."})]})}),(0,r.jsx)("div",{className:"col-lg-6 col-md-6",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{children:"\u0639\u0646\u0648\u0627\u0646"}),(0,r.jsx)("input",{type:"text",name:"subject",className:"form-control",placeholder:"\u0639\u0646\u0648\u0627\u0646",value:s.subject,onChange:f,ref:x({required:!0})}),(0,r.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:j.subject&&"\u0639\u0646\u0648\u0627\u0646 \u0636\u0631\u0648\u0631\u06cc \u0647\u0633\u062a."})]})}),(0,r.jsx)("div",{className:"col-lg-12 col-md-12",children:(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{children:"\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645"}),(0,r.jsx)("textarea",{name:"text",className:"form-control",cols:"30",rows:"5",placeholder:"\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645",value:s.text,onChange:f,ref:x({required:!0})}),(0,r.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:j.text&&"\u0645\u062a\u0646 \u0636\u0631\u0648\u0631\u06cc \u0647\u0633\u062a."})]})}),(0,r.jsx)("div",{className:"col-lg-6 col-sm-6"}),(0,r.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,r.jsx)("button",{type:"submit",className:"default-btn btn-two",children:"\u0627\u0631\u0633\u0627\u0644 \u067e\u06cc\u0627\u0645"})})]})})})})})})}},5429:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return o}});var l=n(5893),t=(n(7294),n(5829)),a=n(3538),c=function(){return(0,l.jsx)("div",{className:"contact-info-area",style:{fontFamily:"Digikala",textAlign:"justify"},children:(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsxs)("div",{className:"row",style:{justifyContent:"center",alignItems:"center"},children:[(0,l.jsx)("div",{className:"col-lg-3 p-0",children:(0,l.jsxs)("div",{className:"single-contact-info",children:[(0,l.jsx)("i",{className:"bx bx-location-plus"}),(0,l.jsx)("h3",{style:{fontFamily:"Digikala"},children:"\u0622\u062f\u0631\u0633 \u0634\u0639\u0628\u0647 \u0645\u0631\u06a9\u0632\u06cc"}),(0,l.jsx)("p",{children:"\u062a\u0647\u0631\u0627\u0646 - \u062e\u06cc\u0627\u0628\u0627\u0646 \u0634\u0647\u06cc\u062f \u0628\u0647\u0634\u062a\u06cc - \u062e\u06cc\u0627\u0628\u0627\u0646 \u0645\u0641\u062a\u062d \u0634\u0645\u0627\u0644\u06cc - \u062e\u06cc\u0627\u0628\u0627\u0646 \u0647\u0634\u062a\u0645 - \u067e\u0644\u0627\u06a9 1 - \u0648\u0627\u062d\u062f 9   \u06a9\u062f \u067e\u0633\u062a\u06cc : 1587815434"}),(0,l.jsx)("span",{children:"\u0627\u06cc\u0645\u06cc\u0644: info@segalventures.ir"})]})}),(0,l.jsx)("div",{className:"col-lg-3 p-0",children:(0,l.jsxs)("div",{className:"single-contact-info",children:[(0,l.jsx)("i",{className:"bx bx-location-plus"}),(0,l.jsx)("h3",{style:{fontFamily:"Digikala"},children:"\u0627\u0631\u062a\u0628\u0627\u0637 \u062f\u0627\u062e\u0644 \u06a9\u0634\u0648\u0631 "}),(0,l.jsx)("p",{children:"\u0628\u0631\u0627\u06cc \u06af\u0632\u0627\u0631\u0634 \u0645\u0634\u06a9\u0644\u0627\u062a \u06cc\u0627 \u062f\u0631\u06cc\u0627\u0641\u062a \u0631\u0627\u0647\u0646\u0645\u0627\u06cc\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u062e\u062f\u0645\u0627\u062a \u0648\u06a9\u06cc\u0644\u0627\u0646 \u0648 \u06cc\u0627 \u0647\u0631 \u0646\u0648\u0639 \u0633\u0648\u0627\u0644\u060c \u0627\u06cc\u0631\u0627\u062f \u0648 \u0627\u0646\u062a\u0642\u0627\u062f\u060c \u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u06cc\u0627 \u062a\u0642\u062f\u06cc\u0631 \u0627\u0632 \u06a9\u0627\u0631\u06a9\u0646\u0627\u0646 \u0648\u06a9\u06cc\u0644\u0627\u0646 \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0630\u06cc\u0644 \u062a\u0645\u0627\u0635\u0644 \u062d\u0627\u0635\u0644 \u0646\u0645\u0627\u06cc\u06cc\u062f "}),(0,l.jsx)("span",{children:"Tel: \u06f0\u06f2\u06f1\u06f8\u06f8\u06f5\u06f0\u06f7\u06f3\u06f6\u06f3 "})]})}),(0,l.jsx)("div",{className:"col-lg-3 p-0",children:(0,l.jsxs)("div",{className:"single-contact-info",children:[(0,l.jsx)("i",{className:"bx bx-location-plus"}),(0,l.jsx)("h3",{style:{fontFamily:"Digikala"},children:" \u0627\u0631\u062a\u0628\u0627\u0637 \u0627\u06cc\u0631\u0627\u0646\u06cc\u0627\u0646 \u062e\u0627\u0631\u062c \u0627\u0632 \u06a9\u0634\u0648\u0631 "}),(0,l.jsx)("p",{children:" \u0627\u06cc\u0631\u0627\u0646\u06cc\u0627\u0646 \u0645\u062d\u062a\u0631\u0645 \u062e\u0627\u0631\u062c \u0627\u0632 \u06a9\u0634\u0648\u0631 \u0627\u06af\u0631 \u0634\u0645\u0627 \u0645\u0634\u06a9\u0644 \u062d\u0642\u0648\u0642\u06cc\u060c \u0645\u0644\u06a9\u06cc\u060c \u06a9\u06cc\u0641\u0631\u06cc \u064a\u0627 \u062b\u0628\u062a\u064a \u062f\u0631 \u0627\u06cc\u0631\u0627\u0646 \u062f\u0627\u0631\u06cc\u062f \u06cc\u0627 \u0628\u0627 \u0645\u0631\u0627\u062c\u0639 \u0642\u0636\u0627\u06cc\u06cc \u060c \u0627\u0646\u062a\u0638\u0627\u0645\u06cc \u06cc\u0627 \u0627\u0631\u06af\u0627\u0646 \u0647\u0627 \u0648 \u0633\u0627\u0632\u0645\u0627\u0646\u0647\u0627\u06cc \u062f\u0648\u0644\u062a\u06cc \u0648 \u0639\u0645\u0648\u0645\u06cc \u0645\u0627\u0646\u0646\u062f \u062f\u0627\u062f\u06af\u0627\u0647 \u0627\u0646\u0642\u0644\u0627\u0628 \u060c \u0633\u062a\u0627\u062f \u0627\u062c\u0631\u0627\u064a \u0641\u0631\u0645\u0627\u0646 \u0627\u0645\u0627\u0645 \u060c \u0628\u0646\u064a\u0627\u062f \u0645\u0633\u062a\u0636\u0639\u0641\u0627\u0646 \u064a\u0627 \u0627\u062f\u0627\u0631\u0647 \u0645\u0627\u0644\u06cc\u0627\u062a \u064a\u0627 \u0627\u062f\u0627\u0631\u0647 \u0645\u0647\u0627\u062c\u0631\u062a \u0648 ... \u062f\u0631\u06af\u06cc\u0631 \u0647\u0633\u062a\u06cc\u062f \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0647\u0627\u06cc \u0630\u06cc\u0644 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0648\u0627\u062a\u0633\u0627\u067e \u062f\u0631 \u062e\u062f\u0645\u062a \u0634\u0645\u0627 \u0647\u0633\u062a\u064a\u0645"}),(0,l.jsx)("span",{children:"WhatsApp : 00989397711770"})]})})]})})})},i=(n(5378),n(7282)),r=n(5245),o=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.Z,{}),(0,l.jsx)(a.Z,{pageTitle:"\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627",homePageUrl:"/",homePageText:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc",activePageText:"\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0645\u0627",imgClass:"bg-1"}),(0,l.jsx)(c,{}),(0,l.jsx)(i.Z,{}),(0,l.jsx)(r.Z,{})]})}},7105:function(e,s){"use strict";s.Z="https://corf-react.envytheme.com"},1163:function(e,s,n){e.exports=n(387)},9396:function(e,s,n){"use strict";function l(e,s){return s=null!=s?s:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):function(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);s&&(l=l.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,l)}return n}(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))})),e}n.d(s,{Z:function(){return l}})},9534:function(e,s,n){"use strict";function l(e,s){if(null==e)return{};var n,l,t=function(e,s){if(null==e)return{};var n,l,t={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],s.indexOf(n)>=0||(t[n]=e[n]);return t}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}n.d(s,{Z:function(){return l}})}},function(e){e.O(0,[1664,505,3967,5829,9774,2888,179],(function(){return s=8105,e(e.s=s);var s}));var s=e.O();_N_E=s}]);